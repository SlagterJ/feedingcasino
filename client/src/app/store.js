import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { userSlice } from "../global/user";

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export const store = configureStore({
  devTools: true,
  reducer: rootReducer,
});
