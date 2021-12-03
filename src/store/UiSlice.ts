import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface UiStore {
  showSideBar: boolean;
  loading: boolean;
}

const initialState: UiStore = {
  showSideBar: true,
  loading: false,
};

const UiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSideBar(state) {
      state.showSideBar = !state.showSideBar;
    },
    startLoading(state) {
      state.loading = true;
    },
    endLoading(state) {
      state.loading = false;
    },
  },
});

export const getVisibilitySideBar = (state: RootState): boolean => state.ui.showSideBar;
export const getLoading = (state: RootState): boolean => state.ui.loading;

export const { toggleSideBar, startLoading, endLoading } = UiSlice.actions;
export { UiSlice };
