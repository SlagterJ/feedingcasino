import { combineReducers, configureStore } from "@reduxjs/toolkit";

// Import reducers
import toasts from "../global/toasts";

const rootReducer = combineReducers({
  toasts,
});

const store = configureStore({
  devTools: true,
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export default store;
