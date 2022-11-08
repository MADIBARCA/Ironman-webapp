import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./bannerSlice";

const rootReducer = combineReducers({
  banner: bannerSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
