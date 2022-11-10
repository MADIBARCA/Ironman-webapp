import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./bannerSlice";
import languageSlice from "./languageSlice";
import verificationSlice from "./verificationSlice";

const rootReducer = combineReducers({
  banner: bannerSlice,
  verification: verificationSlice,
  language: languageSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
