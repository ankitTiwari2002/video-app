import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenueOpen: true,
  },
  reducers: {
    toggleMenue: (state) => {
      state.isMenueOpen = !state.isMenueOpen;
    },
    closeMenue: (state) => {
      state.isMenueOpen = false;
    },
  },
});
export const { toggleMenue, closeMenue } = appSlice.actions;
export default appSlice.reducer;
