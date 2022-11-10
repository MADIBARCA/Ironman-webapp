import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
  name: "language",
  initialState: localStorage.getItem("lang")
    ? localStorage.getItem("lang")
    : "en",
  reducers: {
    addLanguage(state, action) {
      if (action.payload) {
        localStorage.setItem("lang", action.payload);
      } else {
        localStorage.removeItem("lang");
      }
      return (state = action.payload);
    },
  },
});

export default languageSlice.reducer;
export const { addLanguage } = languageSlice.actions;
