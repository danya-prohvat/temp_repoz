import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserinitialState {
  userName: string;
}

const initialState: UserinitialState = {
  userName: 'dasfdsafasfasfasf',
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

export const { changeUserName } = UserSlice.actions;
export { UserSlice };
