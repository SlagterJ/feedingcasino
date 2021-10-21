import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ToastType = "normal" | "confirm" | "alert";

interface Toast {
  title: string;
  description: string;
  type: ToastType;
}

interface ToastsState {
  value: Toast[];
}

const initialState = {
  value: [],
} as ToastsState;

const toastsSlice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Toast>) => {
      const newToast = action.payload;

      state.value.push(newToast);
    },
    removeTop: (state) => {
      state.value.shift();
    },
    clear: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { add, removeTop, clear } = toastsSlice.actions;

export default toastsSlice.reducer;
