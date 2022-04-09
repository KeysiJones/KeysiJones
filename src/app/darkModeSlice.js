import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") ?? "light",
};

export const darkModeSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    switchTheme: (state) => {
      state.theme === "light"
        ? (state.theme = "dark")
        : (state.theme = "light");
    },
  },
});

export const { switchTheme } = darkModeSlice.actions;

export default darkModeSlice.reducer;
