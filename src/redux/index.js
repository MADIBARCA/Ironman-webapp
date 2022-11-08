import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./bannerSlice";
import verificationSlice from "./verificationSlice";

const rootReducer = combineReducers({
  banner: bannerSlice,
  verification: verificationSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
