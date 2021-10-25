import { createSlice } from '@reduxjs/toolkit';
import { State } from './store';

export interface UiStore {
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

export const getVisibilitySideBar = (state: State) => state.ui.showSideBar;

export const { toggleSideBar } = UiSlice.actions;
export { UiSlice };
