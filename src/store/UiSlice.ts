import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface UiStore {
  showSideBar: boolean;
}

const initialState: UiStore = {
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

export const getVisibilitySideBar = (state: RootState): boolean => state.ui.showSideBar;

export const { toggleSideBar } = UiSlice.actions;
export { UiSlice };
