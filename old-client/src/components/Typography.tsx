import { FC } from "react";
import DefaultProps from "../types/DefaultProps";
import c from "classnames";
import Box from "./Box";

type Variant = "h1" | "h2" | "h3" | "h4" | "h5" | "p";

export interface Props extends DefaultProps {
  textClassName?: string;
  full?: boolean;
  variant?: Variant;
  children?: string;
}

const Typography: FC<Props> = (props: Props) => {
  const { className, textClassName, full, variant, children, ...rest } = props;

  const cls = {
    wrapper: c(className),
    text: c("text-white", textClassName),
  };

  return (
    <Box className={cls.wrapper} full={full} center {...rest}>
      <Box component={variant} className={cls.text} center full>
        {children}
      </Box>
    </Box>
  );
};

Typography.defaultProps = {
  full: false,
  variant: "p",
} as Props;

export default Typography;
