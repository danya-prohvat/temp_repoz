import { toast } from 'react-toastify';
import { createSlice, PayloadAction, createAsyncThunk, createSelector } from '@reduxjs/toolkit';
import { config } from 'config';
import { getRequest } from 'api/apiClient';
import { apiUrls } from 'api/urls';
import { RootState } from './store';

interface AnotherUser {
  id: number | null;
  userName: string;
  email: string;
  avatar: string | null;
  firstName: string;
  lastName: string;
  profileDescription: string;
  postsCount: number;
  subscribersCount: number;
  subscriptionsCount: number;
}

const initialState: AnotherUser = {
  id: null,
  userName: '',
  email: '',
  avatar: '',
  firstName: '',
  lastName: '',
  profileDescription: '',
  postsCount: 0,
  subscribersCount: 0,
  subscriptionsCount: 0,
};

export const getAnotherUserThunk = createAsyncThunk(
  `user/getAnotherUser${config.constants.initialLoading}`,
  async (userId: number) => {
    const response = await getRequest(apiUrls.getUser.url.replace(':userId', String(userId)));
    return response.data;
  },
);

const AnotherUserSlice = createSlice({
  name: 'anotherUser',
  initialState,
  reducers: {
    setAnotherUser(state, action: PayloadAction<AnotherUser>) {
      state.id = action.payload.id;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
      state.avatar = action.payload.avatar;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.profileDescription = action.payload.profileDescription;
      state.postsCount = action.payload.postsCount;
      state.subscribersCount = action.payload.subscribersCount;
      state.subscriptionsCount = action.payload.subscriptionsCount;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAnotherUserThunk.fulfilled, (state, action) => {
      AnotherUserSlice.caseReducers.setAnotherUser(state, action);
    });
    builder.addCase(getAnotherUserThunk.rejected, () => {
      toast.error('Error');
    });
  },
});

export const getState = (state: RootState): AnotherUser => state.anotherUser;

export const getAnotherUserInfo = createSelector(getState, (state) => {
  return {
    id: state.id,
    userName: state.userName,
    email: state.email,
    firstName: state.firstName,
    lastName: state.lastName,
    avatar: state.avatar,
    profileDescription: state.profileDescription,
    postsCount: state.postsCount,
    subscribersCount: state.subscribersCount,
    subscriptionsCount: state.subscriptionsCount,
  };
});

export { AnotherUserSlice };
