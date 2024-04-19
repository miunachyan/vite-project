import { createSlice } from "@reduxjs/toolkit";

export const overall = createSlice({
  name: "overall",
  initialState: {
    dark: false,
  },
  reducers: {
    setDarkTheme(state, { payload }) {
      state.dark = payload;
    },
  },
});

export const { setDarkTheme } = overall.actions;

export default overall.reducer;
