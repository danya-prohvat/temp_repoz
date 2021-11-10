import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getRequest } from 'api/apiClient';
import { apiUrls } from 'api/urls';
import { RootState } from './store';

interface GetPostThunkParams {
  postId: number;
  userId: number;
}

interface AuthorStore {
  authorId: number | null;
  userName: string;
  avatar: string;
  subscribers: number[];
}

interface AuthorPayload {
  id: number;
  userName: string;
  avatar: string;
  subscribers: number[];
}

interface CommentStore {
  authorId: number;
  comment: string;
  avatar: string;
  userName: string;
}

interface PostStore {
  id: number | null;
  likesCount: number;
  commentsCount: number;
  src: string;
  author: AuthorStore;
  comments: CommentStore[];
}

const initialState: PostStore = {
  id: null,
  likesCount: 0,
  commentsCount: 0,
  src: '',
  author: {
    authorId: null,
    userName: '',
    avatar: '',
    subscribers: [],
  },
  comments: [],
};

export const getPost = createAsyncThunk(
  'post/getPost',
  // TODO: TS
  async ({ postId, userId }: GetPostThunkParams, { dispatch }: any) => {
    const response = await getRequest(apiUrls.getPost.url, {
      params: { postId: postId, userId: userId },
    });
    dispatch(getPostAuthor(response.data.authorId));
    response.data.comments.forEach((comment: CommentStore) => dispatch(getCommentAuthor(comment.authorId)));

    return response.data;
  },
);

export const getPostAuthor = createAsyncThunk('post/getPostAuthor', async (userId: number) => {
  const response = await getRequest(apiUrls.getUser.url, {
    params: { userId: userId },
  });

  return response.data;
});

export const getCommentAuthor = createAsyncThunk('post/getCommentAuthor', async (userId: number) => {
  const response = await getRequest(apiUrls.getUser.url, {
    params: { userId: userId },
  });

  return response.data;
});

const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPost(state, action: PayloadAction<PostStore>) {
      state.id = action.payload.id;
      state.likesCount = action.payload.likesCount;
      state.commentsCount = action.payload.commentsCount;
      state.src = action.payload.src;
      state.comments = action.payload.comments;
    },
    setAuthor(state, action: PayloadAction<AuthorPayload>) {
      state.author.authorId = action.payload.id;
      state.author.userName = action.payload.userName;
      state.author.avatar = action.payload.avatar;
      state.author.subscribers = action.payload.subscribers;
    },
    setCommentAuthor(state, action: PayloadAction<AuthorPayload>) {
      // TODO: TS
      const updatedComment: any = {
        ...state.comments.find((comment) => action.payload.id === comment.authorId),
        userName: action.payload.userName,
        avatar: action.payload.avatar,
      };

      state.comments = [
        ...state.comments.filter((comment) => action.payload.id !== comment.authorId),
        { ...updatedComment },
      ];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPost.fulfilled, (state, action) => {
      PostSlice.caseReducers.setPost(state, action);
    });
    builder.addCase(getPost.rejected, () => {
      toast.error('Such post not found');
    });
    builder.addCase(getPostAuthor.fulfilled, (state, action) => {
      PostSlice.caseReducers.setAuthor(state, action);
    });
    builder.addCase(getPostAuthor.rejected, () => {
      toast.error('Such post not found');
    });
    builder.addCase(getCommentAuthor.fulfilled, (state, action) => {
      PostSlice.caseReducers.setCommentAuthor(state, action);
    });
    builder.addCase(getCommentAuthor.rejected, () => {
      toast.error('Such post not found');
    });
  },
});

export const getState = (state: RootState): PostStore => state.post;

export const getPosts = createSelector(getState, (state) => {
  return {
    postsId: state.id,
    likesCount: state.likesCount,
    commentsCount: state.commentsCount,
    src: state.src,
  };
});

export const getAuthorInfo = createSelector(getState, (state) => {
  return {
    authorId: state.author.authorId,
    userName: state.author.userName,
    avatar: state.author.avatar,
    subscribers: state.author.subscribers,
  };
});

export const getComments = createSelector(getState, (state) => state.comments);

export const { setPost, setAuthor, setCommentAuthor } = PostSlice.actions;
export { PostSlice };
