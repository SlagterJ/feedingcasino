import { FormEvent, ReactNode, FC } from "react";
import DefaultProps from "../../types/DefaultProps";
import c from "classnames";
import Box from "../Box";
import Typography from "../Typography";

export interface Props extends DefaultProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => any;
  title?: string;
  children?: ReactNode;
}

const Form: FC<Props> = (props: Props) => {
  const { className, title, onSubmit, children, ...rest } = props;

  const cls = {
    title_wrapper: c("w-full h-max"),
    inputs_wrapper: c("w-full h-max"),
  };

  return (
    <Box center>
      <Box component="form" onSubmit={onSubmit} center full {...rest}>
        {title && (
          <Box className={cls.title_wrapper} center>
            <Typography variant="h3">{title}</Typography>
          </Box>
        )}
        <Box className={cls.inputs_wrapper} center full>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Form;
