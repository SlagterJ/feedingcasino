import {
  useDispatch as _useDispatch,
  TypedUseSelectorHook,
  useSelector as _useSelector,
} from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useDispatch = () => {
  const dispatch = _useDispatch<AppDispatch>();
  return dispatch;
};

export const useSelector: TypedUseSelectorHook<RootState> = _useSelector;
