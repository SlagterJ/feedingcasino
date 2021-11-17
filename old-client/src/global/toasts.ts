import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Toast, { ToastID } from "../types/Toast";
import Omit from "../types/Omit";
import { v4 as uuid } from "uuid";
import _ from "lodash";

interface ToastsState {
  value: Toast[];
}

interface ToastPayload extends Omit<Toast, "id"> {}

const initialState = {
  value: [],
} as ToastsState;

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ToastPayload>) => {
      const payload = action.payload;

      const id = uuid();

      const newToast = {
        id,
        ...payload,
      };

      // Remove the first toast if there are already 3 toasts on screen
      if (state.value.length >= 3) {
        state.value.shift();
      }

      state.value.push(newToast);
    },
    remove: (state, action: PayloadAction<ToastID>) => {
      const id = action.payload;
      const toasts = state.value;
      const toastsWithoutRemovedId = _.filter(toasts, (toast) => {
        return toast.id !== id;
      });

      state.value = toastsWithoutRemovedId;
    },
    clear: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { add, remove, clear } = toastsSlice.actions;

export default toastsSlice.reducer;
