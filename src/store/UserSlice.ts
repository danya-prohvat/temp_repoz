import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { postRequest, getRequest } from 'api/apiClient';
import { apiUrls } from 'api/urls';
import { SingInFormProps } from 'components/core/signInForm/SignInForm';
import { SingUpFormProps } from 'components/core/signUpForm/SignUpForm';
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

export const signUpThunk = createAsyncThunk('user/signUp', async ({ userName, email, password }: SingUpFormProps) => {
  const response = await postRequest(apiUrls.signUp.url, { userName: userName, email: email, password: password });
  return response.data;
});

export const checkNewUserNameThunk = createAsyncThunk('user/checkNewUserName', async (userName: string) => {
  const response = await postRequest(apiUrls.checkNewUserName.url, { userName });
  return response.data;
});

export const getMeThunk = createAsyncThunk('user/getMe', async () => {
  const response = await getRequest(apiUrls.getMe.url);
  return response.data;
});

export const verifyUserThunk = createAsyncThunk('user/verifyUser', async (_, { dispatch }) => {
  try {
    await getRequest(apiUrls.verifyUser.url);
    dispatch(getMeThunk());
  } catch (e) {
    toast.error('token is mistaken');
    throw e;
  }
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
    builder.addCase(getMeThunk.fulfilled, (state, action) => {
      UserSlice.caseReducers.changeAuthorization(state);
      UserSlice.caseReducers.signInUser(state, action);
      localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      UserSlice.caseReducers.changeAuthorization(state);
      UserSlice.caseReducers.signInUser(state, action);
      toast.success('You authorized');
      localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(signInThunk.rejected, () => {
      toast.error('Email or password is incorrect');
    });
    builder.addCase(signUpThunk.fulfilled, (state, action) => {
      UserSlice.caseReducers.changeAuthorization(state);
      UserSlice.caseReducers.signInUser(state, action);
      toast.success('You authorized');
      localStorage.setItem('token', action.payload.token);
    });
    builder.addCase(signUpThunk.rejected, () => {
      toast.error('Error');
    });
    builder.addCase(checkNewUserNameThunk.pending, (state) => {
      state.signUping.errorMessage = '';
    });
    builder.addCase(checkNewUserNameThunk.fulfilled, (state) => {
      state.signUping.userNameIsExists = true;
      state.signUping.errorMessage = '';
    });
    builder.addCase(checkNewUserNameThunk.rejected, (state) => {
      state.signUping.userNameIsExists = false;
      state.signUping.errorMessage = 'Sorry, this username is taken';
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
