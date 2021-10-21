import { useCallback, useEffect } from "react";
import DefaultProps from "../../types/DefaultProps";
import IToast from "../../types/Toast";
import { FC } from "react";
import { useDispatch } from "../../app/hooks";
import { remove } from "../../global/toasts";
import { AnimationProps } from "framer-motion";
import c from "classnames";
import MotionBox from "../MotionBox";
import Box from "../Box";
import Typography from "../Typography";

export interface Props extends DefaultProps, IToast {}

/**
 * Toast component used for displaying a toast. Clears itself after a set
 * interval of 5 seconds.
 */
const Toast: FC<Props> = (props: Props) => {
  const { className, id, title, description, type, ...rest } = props;
  const dispatch = useDispatch();

  // Function to dismiss itself
  const dismissSelf = useCallback(() => {
    dispatch(remove(id));
  }, [dispatch, id]);

  // Dismiss when the user clicks on the dismiss button
  const handleDismissClick = () => {
    dismissSelf();
  };

  // Dismiss after 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      dismissSelf();
    }, 5000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [dismissSelf]);

  // Animation settings
  const animate = {
    initial: {
      x: "-50vw",
    },
    animate: {
      x: "0",
    },
    exit: {
      x: "-50vw",
    },
  } as AnimationProps;

  const cls = {
    wrapper: c(
      "w-full md:w-96 h-28 shadow-lg",
      "my-4 mx-4 md:mr-0 md:ml-4 p-2 rounded",
      {
        "bg-gray-700": type === "normal",
        "bg-green-500": type === "confirm",
        "bg-red-500": type === "alert",
      },
      className
    ),
    title: c("w-full h-1/4"),
    description_wrapper: c("w-full h-3/4"),
  };

  return (
    <MotionBox className={cls.wrapper} {...animate} center {...rest}>
      <Typography className={cls.title} variant="h5">
        {title}
      </Typography>
      <button onClick={handleDismissClick}>Dismiss</button>
      <Box className={cls.description_wrapper} center>
        <Typography variant="p" full>
          {description}
        </Typography>
      </Box>
    </MotionBox>
  );
};

export default Toast;
