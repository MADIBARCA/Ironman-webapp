import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
  name: "banner",
  initialState: true,
  reducers: {
    bannerClose(state) {
      return (state = false);
    },
  },
});

export default bannerSlice.reducer;
export const { bannerClose } = bannerSlice.actions;
