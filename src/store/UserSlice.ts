import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { signIn } from 'api/apiClient';
import { apiUrls } from 'api/urls';
import { SingInFormProps } from 'components/core/signInForm/SignInForm';
import { RootState } from './store';

interface UserStore {
  isAuthorized: boolean;
  userName: string;
}

const initialState: UserStore = {
  isAuthorized: !true,
  userName: 'dasfdsafasfasfasf 645654',
};

export const signInThunk = createAsyncThunk('user/signIn', async ({ email, password }: SingInFormProps) => {
  console.log(email);
  console.log(password);

  signIn(apiUrls.signIn.url, { email: email, password: password }).then((res) => {
    console.log(res);
  });

  return 0;
});

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserName(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});

export const getUserName = (state: RootState): string => state.user.userName;
export const checkAuthorization = (state: RootState): boolean => state.user.isAuthorized;

export const { changeUserName } = UserSlice.actions;
export { UserSlice };
