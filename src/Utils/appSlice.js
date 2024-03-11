import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenueOpen: true,
    query: "",
  },
  reducers: {
    toggleMenue: (state) => {
      state.isMenueOpen = !state.isMenueOpen;
    },
    closeMenue: (state) => {
      state.isMenueOpen = false;
    },
    getSearchQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});
export const { toggleMenue, closeMenue, getSearchQuery } = appSlice.actions;
export default appSlice.reducer;
