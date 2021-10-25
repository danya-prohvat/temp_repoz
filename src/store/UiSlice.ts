import { createSlice } from '@reduxjs/toolkit';

interface UserinitialState {
  showSideBar: boolean;
}

const initialState: UserinitialState = {
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

export const { toggleSideBar } = UiSlice.actions;
export { UiSlice };
