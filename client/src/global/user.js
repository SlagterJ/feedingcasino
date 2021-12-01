import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-hydrate";

const initialState = {
  value: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.value = undefined;
      localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [HYDRATE]: (state) => {
      localStorage.getItem("user") &&
        (state.value = JSON.parse(localStorage.getItem("user")));
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
