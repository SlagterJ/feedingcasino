import Box, { Props as BoxProps } from "./Box";
import { HTMLMotionProps, motion } from "framer-motion";
import { FC } from "react";

export interface Props extends HTMLMotionProps<"div">, BoxProps {}

const MotionBox: FC<Props> = (props: Props) => {
  const component = motion.div;

  return <Box component={component} {...props} />;
};

export default MotionBox;
