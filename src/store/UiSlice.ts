import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface UserInitialState {
  showSideBar: boolean;
}

const initialState: UserInitialState = {
  showSideBar: true,
};

const UiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSideBar(state) {
      state.showSideBar = !state.showSideBar;
    },
  },
});

export const getVisibilitySideBar = (state: RootState) => state.ui.showSideBar;

export const { toggleSideBar } = UiSlice.actions;
export { UiSlice };
