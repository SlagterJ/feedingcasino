import { ChangeEvent } from "react";
import DefaultProps from "../../types/DefaultProps";

export interface Props extends DefaultProps {
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => any;
}

const TextField = () => {};

export default TextField;
