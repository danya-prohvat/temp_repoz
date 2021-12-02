import { updatePasswordProps } from './../components/core/updatePassword/UpdatePassword';
import { createSlice, PayloadAction, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { config } from 'config';
import { postRequest, getRequest, patchRequest } from 'api/apiClient';
import { apiUrls } from 'api/urls';
import { SingInFormProps } from 'components/core/signInForm/SignInForm';
import { SingUpFormProps } from 'components/core/signUpForm/SignUpForm';
import { RootState } from './store';
import { Pearson, SavedPosts, User } from 'types/types';

interface Post {
  id: number;
  src: string;
  commentsCount: number;
  likesCount: number;
}
interface checkUserName {
  exist: boolean;
  errorMessage: string;
}

interface UserStore {
  isAuthorized: boolean;
  loading: boolean;
  user: User;
  checkUserName: checkUserName;
  limit: number;
  offset: number;
  postLoader: boolean;
  posts: Post[];
}

const initialState: UserStore = {
  isAuthorized: false,
  loading: true,
  user: {
    userName: '',
    email: '',
    id: null,
    avatar: '',
    firstName: '',
    lastName: '',
    profileDescription: '',
    postsCount: 0,
    savedPostsCount: 0,
    subscribersCount: 0,
    subscriptionsCount: 0,
    privateProfile: false,
    allowComments: false,
    actualToken: null,
    subscribers: [],
    subscriptions: [],
    savedPosts: [],
  },
  checkUserName: {
    exist: false,
    errorMessage: '',
  },
  limit: config.constants.postsLimit,
  offset: 1,
  postLoader: false,
  posts: [],
};
// TODO: TS
export const getPostsThunk = createAsyncThunk(
  'user/getPosts',
  async ({ userId, initialRequest }: { userId: number; initialRequest?: boolean }, { getState, dispatch }: any) => {
    let postsCount;
    const { user } = getState().user;

    if (initialRequest) dispatch(resetPosts());

    if (userId !== user.id) postsCount = getState().anotherUser.postsCount;
    else postsCount = getState().user.user.postsCount;

    const { limit, offset } = getState().user;

    if (offset <= Math.ceil(postsCount / limit)) {
      dispatch(incrementPageSize());

      const response = await getRequest(apiUrls.getPosts.url.replace(':userId', String(userId)), {
        params: { limit: limit, offset: offset },
      });

      return response.data;
    }
  },
);

export const signInThunk = createAsyncThunk('user/signIn', async ({ email, password }: SingInFormProps) => {
  const response = await postRequest(apiUrls.signIn.url, { email: email, password: password });
  return response.data;
});

export const signUpThunk = createAsyncThunk('user/signUp', async ({ userName, email, password }: SingUpFormProps) => {
  const response = await postRequest(apiUrls.signUp.url, { userName: userName, email: email, password: password });
  return response.data;
});

export const checkNewUserNameThunk = createAsyncThunk('user/checkNewUserName', async (userName: string) => {
  const response = await postRequest(apiUrls.checkNewUserName.url, { userName });
  return response.data;
});

export const updatePasswordThunk = createAsyncThunk(
  'user/updatePasswordThunk',
  async (data: updatePasswordProps, { getState }: any) => {
    const { user } = getState().user;

    const response = await postRequest(apiUrls.updatePassword.url.replace(':userId', user.id), data);
    return response.data;
  },
);

export const getMeThunk = createAsyncThunk('user/getMe', async () => {
  const response = await getRequest(apiUrls.getMe.url);
  return response.data;
});

export const patchUserAvatar = createAsyncThunk('user/patchUserAvatar', async (data: FormData, { getState }: any) => {
  const { user } = getState().user;

  const response = await patchRequest(apiUrls.patchUser.url.replace(':userId', user.id), data, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
});

export const patchUser = createAsyncThunk(
  'user/patchUser',
  async (data: Partial<User>, { dispatch, getState }: any) => {
    const { user } = getState().user;

    if (data.userName && data.userName !== user.userName) {
      await dispatch(checkNewUserNameThunk(data.userName));
      const { checkUserName } = getState().user;
      if (checkUserName.exist) {
        const response = await patchRequest(apiUrls.patchUser.url.replace(':userId', user.id), data);
        return response.data;
      }
    }
    const response = await patchRequest(apiUrls.patchUser.url.replace(':userId', user.id), data);
    return response.data;
  },
);

export const verifyUserThunk = createAsyncThunk('user/verifyUser', async (_, { dispatch }) => {
  try {
    await getRequest(apiUrls.verifyUser.url);
    dispatch(getMeThunk());
  } catch (e) {
    toast.error('token is mistaken');
    throw e;
  }
});

export const getSubscribersThunk = createAsyncThunk(
  'user/getSubscribersThunk',
  async ({ userId, search }: { userId: number; search?: string }) => {
    const response = await getRequest(apiUrls.getSubscribers.url.replace(':userId', String(userId)), {
      params: { search: search || '' },
    });
    return response.data;
  },
);

export const getSubscriptionsThunk = createAsyncThunk(
  'user/getSubscriptionsThunk',
  async ({ userId, search }: { userId: number; search?: string }) => {
    const response = await getRequest(apiUrls.getSubscriptions.url.replace(':userId', String(userId)), {
      params: { search: search || '' },
    });
    return response.data;
  },
);

export const getSavedPostsThunk = createAsyncThunk(
  'user/getSavedPostsThunk',
  // TS
  async ({ initialRequest, sortBy }: { initialRequest?: boolean; sortBy: string }, { dispatch, getState }: any) => {
    const { user } = getState().user;

    if (initialRequest) dispatch(resetPosts());

    const { limit, offset } = getState().user;

    if (offset <= Math.ceil(user.savedPostsCount / limit)) {
      dispatch(incrementPageSize());
      const response = await getRequest(apiUrls.getSavedPosts.url.replace(':userId', String(user.id)), {
        params: { limit: limit, offset: offset, sortBy: sortBy },
      });
      return response.data;
    }
  },
);

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeAuthorization(state) {
      state.isAuthorized = true;
    },
    setUser(state, action: PayloadAction<User>) {
      if (action.payload) {
        state.user = { ...action.payload };
      }
    },
    incrementPageSize(state) {
      state.offset = ++state.offset;
    },
    addPosts(state, action: PayloadAction<Post[]>) {
      if (action.payload) state.posts = [...state.posts, ...action.payload];
    },
    changePostLoader(state) {
      state.postLoader = !state.postLoader;
    },
    resetUser(state) {
      state.isAuthorized = initialState.isAuthorized;
      state.offset = initialState.offset;
      state.posts = initialState.posts;
      state.user = initialState.user;

      localStorage.removeItem('token');
    },
    resetPosts(state) {
      state.posts = initialState.posts;
      state.offset = initialState.offset;
      state.user.savedPosts = initialState.user.savedPosts;
    },
    setSubscribers(state, action: PayloadAction<Pearson[]>) {
      state.user.subscribers = action.payload;
    },
    setSubscriptions(state, action: PayloadAction<Pearson[]>) {
      state.user.subscriptions = action.payload;
    },
    setSavedPosts(state, action: PayloadAction<SavedPosts[]>) {
      if (action.payload) state.user.savedPosts = [...state.user.savedPosts, ...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMeThunk.fulfilled, (state, action) => {
      UserSlice.caseReducers.changeAuthorization(state);
      UserSlice.caseReducers.setUser(state, action);
      localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      UserSlice.caseReducers.changeAuthorization(state);
      UserSlice.caseReducers.setUser(state, action);
      toast.success('You authorized');
      localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(signInThunk.rejected, () => {
      toast.error('Email or password is incorrect');
    });
    builder.addCase(verifyUserThunk.rejected, (state) => {
      localStorage.removeItem('token');
      state.user.actualToken = false;
    });
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      UserSlice.caseReducers.changeAuthorization(state);
      UserSlice.caseReducers.setUser(state, action);
      toast.success('You authorized');
      localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(signUpThunk.rejected, () => {
      toast.error('Error');
    });
    builder.addCase(checkNewUserNameThunk.pending, (state) => {
      state.checkUserName.errorMessage = '';
    });
    builder.addCase(checkNewUserNameThunk.fulfilled, (state) => {
      state.checkUserName.exist = true;
      state.checkUserName.errorMessage = '';
    });
    builder.addCase(checkNewUserNameThunk.rejected, (state) => {
      state.checkUserName.exist = false;
      state.checkUserName.errorMessage = 'Sorry, this username is taken';
    });
    builder.addCase(updatePasswordThunk.fulfilled, (state, action) => {
      toast.success(action.payload);
    });
    builder.addCase(updatePasswordThunk.rejected, () => {
      toast.error("Your password wasn't changed, try again");
    });
    builder.addCase(getPostsThunk.pending, (state) => {
      UserSlice.caseReducers.changePostLoader(state);
    });
    builder.addCase(getPostsThunk.fulfilled, (state, action) => {
      UserSlice.caseReducers.addPosts(state, action);
      UserSlice.caseReducers.changePostLoader(state);
    });
    builder.addCase(getPostsThunk.rejected, (state) => {
      UserSlice.caseReducers.changePostLoader(state);
      toast.error('Error');
    });
    builder.addCase(patchUser.fulfilled, (state, action) => {
      UserSlice.caseReducers.setUser(state, action);
      toast.success('Your information was changed');
    });
    builder.addCase(patchUser.rejected, () => {
      toast.error("Your information wasn't changed, try again");
    });
    builder.addCase(patchUserAvatar.fulfilled, (state, action) => {
      UserSlice.caseReducers.setUser(state, action);
      toast.success('Your avatar was changed');
    });
    builder.addCase(patchUserAvatar.rejected, () => {
      toast.error("Your avatar wasn't changed, try again");
    });
    builder.addCase(getSubscribersThunk.fulfilled, (state, action) => {
      UserSlice.caseReducers.setSubscribers(state, action);
    });
    builder.addCase(getSubscribersThunk.rejected, () => {
      toast.error('Error');
    });
    builder.addCase(getSubscriptionsThunk.fulfilled, (state, action) => {
      UserSlice.caseReducers.setSubscriptions(state, action);
    });
    builder.addCase(getSubscriptionsThunk.rejected, () => {
      toast.error('Error');
    });
    builder.addCase(getSavedPostsThunk.pending, (state) => {
      UserSlice.caseReducers.changePostLoader(state);
    });
    builder.addCase(getSavedPostsThunk.fulfilled, (state, action) => {
      UserSlice.caseReducers.changePostLoader(state);
      UserSlice.caseReducers.setSavedPosts(state, action);
    });
    builder.addCase(getSavedPostsThunk.rejected, (state) => {
      UserSlice.caseReducers.changePostLoader(state);
      toast.error('Error');
    });
  },
});

export const getState = (state: RootState): UserStore => state.user;

export const getUserInfo = createSelector(getState, (state) => {
  return {
    userName: state.user.userName,
    email: state.user.email,
    firstName: state.user.firstName,
    lastName: state.user.lastName,
    id: state.user.id,
    avatar: state.user.avatar,
    profileDescription: state.user.profileDescription,
    postsCount: state.user.postsCount,
    subscribersCount: state.user.subscribersCount,
    subscriptionsCount: state.user.subscriptionsCount,
    privateProfile: state.user.privateProfile,
    allowComments: state.user.allowComments,
    actualToken: state.user.actualToken,
  };
});
export const getPostsInfo = createSelector(getState, (state) => {
  return {
    posts: state.posts,
    postLoader: state.postLoader,
  };
});
export const checkAuthorization = createSelector(getState, (state) => state.isAuthorized);
export const checkNewUserName = createSelector(getState, (state) => {
  return { exist: state.checkUserName.exist, errorMessage: state.checkUserName.errorMessage };
});

export const getUserSubscribers = createSelector(getState, (state) => state.user.subscribers);
export const getUserSubscriptions = createSelector(getState, (state) => state.user.subscriptions);

export const getSavedPosts = createSelector(getState, (state) => state.user.savedPosts);

export const {
  setUser,
  changeAuthorization,
  addPosts,
  incrementPageSize,
  changePostLoader,
  resetUser,
  setSubscribers,
  setSubscriptions,
  resetPosts,
  setSavedPosts,
} = UserSlice.actions;
export { UserSlice };
