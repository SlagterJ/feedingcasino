import { Box } from "./Box";
import styled from "styled-components";

const Wrapper = styled(Box)`
  padding: 0.25rem;
`;

const Text = styled(Box)`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.fg};
  text-decoration: none;
`;

export const Typography = ({ variant, children }) => {
  return (
    <Wrapper center>
      <Text component={variant} center>
        {children}
      </Text>
    </Wrapper>
  );
};

Typography.defaultProps = {
  variant: "p",
};
