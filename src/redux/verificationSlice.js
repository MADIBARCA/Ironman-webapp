import { createSlice } from "@reduxjs/toolkit";

const verificationSlice = createSlice({
  name: "verification",
  initialState: {
    accessToken: localStorage.getItem("accessToken")
      ? localStorage.getItem("accessToken")
      : null,
    email: localStorage.getItem("email") ? localStorage.getItem("email") : null,
    id: localStorage.getItem("id") ? localStorage.getItem("id") : null,
  },
  reducers: {
    addAccessToken(state, action) {
      if (action.payload) {
        localStorage.setItem("accessToken", action.payload);
      } else {
        localStorage.removeItem("accessToken");
      }
      state.accessToken = action.payload;
    },
    addEmail(state, action) {
      if (action.payload) {
        localStorage.setItem("email", action.payload);
      } else {
        localStorage.removeItem("email");
      }
      state.email = action.payload;
    },
    addId(state, action) {
      if (action.payload) {
        localStorage.setItem("id", action.payload);
      } else {
        localStorage.removeItem("id", action.payload);
      }
      state.id = action.payload;
    },
  },
});

export default verificationSlice.reducer;
export const { addAccessToken, addEmail, addId } = verificationSlice.actions;
