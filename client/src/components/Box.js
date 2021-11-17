import styled from "styled-components";

const Component = ({
  // Take out the style props
  noFlex,
  noDefaultFlex,
  center,
  grid,
  component: Component,
  ...rest
}) => <Component {...rest} />;

const Wrapper = styled(Component)`
  ${({ noFlex, grid }) =>
    !noFlex & !grid &&
    `
    display: flex;
  `}

  ${({ noFlex, noDefaultFlex, center, grid }) =>
    !noFlex & !noDefaultFlex & !center & !grid &&
    `
    flex-direction: row;
    justify-content: flex-start;
    justify-items: flex-start;
    align-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  `}

  ${({ center, grid }) =>
    center & !grid &&
    `
    flex-direction: column;
    justify-content: center;  
    justify-items: center;
    align-content: center;
    align-items: center;
    flex-wrap: nowrap;
    `}

  ${({ grid }) => grid && `display: grid;`}
`;

export const Box = ({ component, children, ...rest }) => {
  return (
    <Wrapper component={component} {...rest}>
      {children}
    </Wrapper>
  );
};

Box.defaultProps = {
  component: "div",
  noFlex: false,
  noDefaultFlex: false,
  center: false,
};
