import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { postRequest } from 'api/apiClient';
import { apiUrls } from 'api/urls';
import { SingInFormProps } from 'components/core/signInForm/SignInForm';
import { RootState } from './store';
import { toast } from 'react-toastify';

interface UserStore {
  isAuthorized: boolean;
  userName: string;
}

const initialState: UserStore = {
  isAuthorized: false,
  userName: 'dasfdsafasfasfasf 645654',
};

export const signInThunk = createAsyncThunk('user/signIn', async ({ email, password }: SingInFormProps) => {
  return postRequest(apiUrls.signIn.url, { email: email, password: password }).then((response) => response.data);
});

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeAuthorization(state) {
      state.isAuthorized = true;
    },
    changeUserName(state, action: PayloadAction<{ userName: string }>) {
      state.userName = action.payload.userName;
    }, // question
  },
  extraReducers: (builder) => {
    builder.addCase(signInThunk.fulfilled, (state, action) => {
      UserSlice.caseReducers.changeAuthorization(state);
      UserSlice.caseReducers.changeUserName(state, action);
      toast.success('You authorized');
    });
    builder.addCase(signInThunk.rejected, () => {
      toast.error('Email or password is incorrect');
    });
  },
});

export const getUserName = (state: RootState): string => state.user.userName;
export const checkAuthorization = (state: RootState): boolean => state.user.isAuthorized;

export const { changeUserName, changeAuthorization } = UserSlice.actions;
export { UserSlice };
