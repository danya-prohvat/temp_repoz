import { createSlice, createAsyncThunk, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { getRequest } from 'api/apiClient';
import { apiUrls } from 'api/urls';
import { RootState } from './store';

interface GetPostThunkParams {
  postId: number;
  userId: number;
}

interface Author {
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

interface Comment {
  authorId: number;
  comment: string;
  avatar: string;
  userName: string;
}

interface Likes {
  id: number;
  avatar: string;
  userName: string;
}

interface PostStore {
  id: number | null;
  likesCount: number;
  commentsCount: number;
  src: string;
  author: Author;
  comments: Comment[];
  likes: Likes[];
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
  likes: [],
};

export const getPost = createAsyncThunk(
  'post/getPost',
  // TODO: TS
  async ({ postId, userId }: GetPostThunkParams, { dispatch }: any) => {
    const response = await getRequest(
      apiUrls.getPost.url.replace(':userId', String(userId)).replace(':postId', String(postId)),
    );
    dispatch(getPostAuthor(response.data.authorId));

    return response.data;
  },
);

export const getPostAuthor = createAsyncThunk('post/getPostAuthor', async (userId: number) => {
  const response = await getRequest(apiUrls.getUser.url.replace(':userId', String(userId)));

  return response.data;
});

export const getLikesThunk = createAsyncThunk('post/getLikesThunk', async ({ postId, userId }: GetPostThunkParams) => {
  const response = await getRequest(
    apiUrls.getLikes.url.replace(':userId', String(userId)).replace(':postId', String(postId)),
  );

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
      const author = state.comments.find((comment) => action.payload.id === comment.authorId);
      if (author) {
        const updatedComment: Comment = {
          ...author,
          userName: action.payload.userName,
          avatar: action.payload.avatar,
        };

        state.comments = [
          ...state.comments.filter((comment) => action.payload.id !== comment.authorId),
          { ...updatedComment },
        ];
      }
    },
    setLikes(state, action: PayloadAction<Likes[]>) {
      state.likes = action.payload;
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
    builder.addCase(getLikesThunk.fulfilled, (state, action) => {
      PostSlice.caseReducers.setLikes(state, action);
    });
    builder.addCase(getLikesThunk.rejected, () => {
      toast.error('Such likes not found');
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

export const getLikes = createSelector(getState, (state) => state.likes);

export const { setPost, setAuthor, setCommentAuthor } = PostSlice.actions;
export { PostSlice };
