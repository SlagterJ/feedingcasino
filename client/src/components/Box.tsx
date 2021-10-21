import { ElementType, FC } from "react";
import DefaultProps from "../types/DefaultProps";
import c from "classnames";

export interface Props extends DefaultProps {
  component?: ElementType; // Which component should be rendered, default: div
  full?: boolean; // If the Box should be 100% width and height
  noFlex?: boolean; // If the component should not render in display: flex
  // If the component should not render default flex values
  noDefaultFlex?: boolean;
  center?: boolean; // If the component should center its children
  children?: any | any[];
}

/**
 * Basic component akin to a div in standard HTML
 */
const Box: FC<Props> = (props: Props) => {
  const {
    className,
    component,
    full,
    noFlex,
    noDefaultFlex,
    center,
    children,
    ...rest
  } = props;

  // Convert the prop into an element
  const Component = component!;

  const cls = {
    main: c("m-0 p-0", {
      "w-full h-full": full,
      flex: !noFlex,
      ["flex-start justify-start justify-items-start content-start " +
      "items-start flex-wrap"]: !noFlex && !noDefaultFlex,
      ["flex-col justify-center justify-items-center content-center " +
      "items-center flex-nowrap"]: !noFlex && center,
    }),
  };

  return (
    <Component className={cls.main} {...rest}>
      {children}
    </Component>
  );
};

Box.defaultProps = {
  component: "div",
  full: false,
  noFlex: false,
  noDefaultFlex: false,
  center: false,
} as Props;

export default Box;
