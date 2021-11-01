import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { postRequest } from 'api/apiClient';
import { apiUrls } from 'api/urls';
import { SingInFormProps } from 'components/core/signInForm/SignInForm';
import { RootState } from './store';
import { User } from 'types/types';
import { toast } from 'react-toastify';

interface UserStore {
  isAuthorized: boolean;
  user: User;
}

const initialState: UserStore = {
  isAuthorized: false,
  user: {
    userName: '',
    email: '',
  },
};

export const signInThunk = createAsyncThunk('user/signIn', async ({ email, password }: SingInFormProps) => {
  const response = await postRequest(apiUrls.signIn.url, { email: email, password: password });
  return response.data;
});

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeAuthorization(state) {
      state.isAuthorized = true;
    },
    signInUser(state, action: PayloadAction<User>) {
      state.user = { ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      UserSlice.caseReducers.changeAuthorization(state);
      UserSlice.caseReducers.signInUser(state, action);
      toast.success('You authorized');
    });
    builder.addCase(signInThunk.rejected, () => {
      toast.error('Email or password is incorrect');
    });
  },
});

export const getUserName = (state: RootState): string => state.user.user.userName;
export const checkAuthorization = (state: RootState): boolean => state.user.isAuthorized;

export const { signInUser, changeAuthorization } = UserSlice.actions;
export { UserSlice };
