import DefaultProps from "../../types/DefaultProps";
import { FC } from "react";
import { useSelector } from "../../app/hooks";
import { AnimateSharedLayout } from "framer-motion";
import c from "classnames";
import Box from "../Box";
import Toast from "./Toast";

export interface Props extends DefaultProps {}

/**
 * Toast handler that displays toasts dispatched to Redux automatically.
 */
const ToastsHandler: FC<Props> = (props: Props) => {
  const { className, ...rest } = props;

  // Get all current toasts
  const toasts = useSelector((state) => {
    const allToasts = state.toasts.value;
    return allToasts;
  });

  const cls = {
    wrapper: c(
      "fixed z-40 w-full md:w-96 h-max bottom-0 left-0",
      "flex-col-reverse justify-end justify-items-end content-center",
      "items-center flex-nowrap transition-all pointer-events-none",
      className
    ),
  };

  return (
    <Box className={cls.wrapper} noDefaultFlex {...rest}>
      {/* Wrap in AnimatePresence to allow for
        animations on mount and unmount. */}
      <AnimateSharedLayout>
        {/* Return a toast for each toast in the array. */}
        {toasts.map((toast) => {
          return (
            <Toast
              key={toast.id}
              layout
              id={toast.id}
              title={toast.title}
              description={toast.description}
              type={toast.type}
            />
          );
        })}
      </AnimateSharedLayout>
    </Box>
  );
};

export default ToastsHandler;
