import { v4 as uuid } from "uuid";

export type ToastID = ReturnType<typeof uuid>;
export type ToastType = "normal" | "confirm" | "alert";

interface Toast {
  id: ToastID;
  title: string;
  description: string;
  type: ToastType;
}

export default Toast;
