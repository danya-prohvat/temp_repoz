import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { postRequest } from 'api/apiClient';
import { apiUrls } from 'api/urls';
import { SingInFormProps } from 'components/core/signInForm/SignInForm';
import { RootState } from './store';
import { User } from 'types/types';
import { toast } from 'react-toastify';

interface SignUping {
  userNameIsExists: boolean;
  errorMessage: string;
}
interface UserStore {
  isAuthorized: boolean;
  user: User;
  signUping: SignUping;
}

const initialState: UserStore = {
  isAuthorized: false,
  user: {
    userName: '',
    email: '',
  },
  signUping: {
    userNameIsExists: false,
    errorMessage: '',
  },
};

export const signInThunk = createAsyncThunk('user/signIn', async ({ email, password }: SingInFormProps) => {
  const response = await postRequest(apiUrls.signIn.url, { email: email, password: password });
  return response.data;
});

export const checkNewUserNameThunk = createAsyncThunk('user/checkNewUserName', async (userName: string) => {
  const response = await postRequest(apiUrls.checkNewUserName.url, { userName });
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
    builder.addCase(checkNewUserNameThunk.fulfilled, (state) => {
      state.signUping.userNameIsExists = true;
      state.signUping.errorMessage = '';
    });
    builder.addCase(checkNewUserNameThunk.rejected, (state) => {
      state.signUping.userNameIsExists = false;
      state.signUping.errorMessage = 'such user name is exist';
    });
  },
});

export const getUserName = (state: RootState): string => state.user.user.userName;
export const checkAuthorization = (state: RootState): boolean => state.user.isAuthorized;
export const checkNewUserName = (state: RootState): SignUping => {
  return { userNameIsExists: state.user.signUping.userNameIsExists, errorMessage: state.user.signUping.errorMessage };
};

export const { signInUser, changeAuthorization } = UserSlice.actions;
export { UserSlice };
