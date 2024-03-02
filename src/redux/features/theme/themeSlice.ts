import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  darkMode: false,
};

const themeSlice = createSlice({
  name: "themeMode",
  initialState,
  reducers: {
    toggleThemeMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
export const useCureentThemeMode = (state: RootState) =>
  state.themeMode.darkMode;

