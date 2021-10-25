import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface UserStore {
  userName: string;
}

const initialState: UserStore = {
  userName: 'dasfdsafasfasfasf 645654',
};

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

export const { changeUserName } = UserSlice.actions;
export { UserSlice };
