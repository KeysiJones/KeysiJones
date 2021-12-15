import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("theme") ?? "light",
};

export const darkModeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchDarkMode: (state) => {
      state.value === "light"
        ? (state.value = "dark")
        : (state.value = "light");
    },
  },
});

export const { switchDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
