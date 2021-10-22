import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './UserReducer';

export const store = configureStore({
  reducer: {
    UserSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
