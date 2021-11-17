import { Box } from "../Box";
import Link from "next/link";
import { Typography } from "../Typography";
import styled from "styled-components";

const Wrapper = styled(Box)`
  padding: 2.5px;
  border-radius: 10px;

  cursor: pointer;

  transition: ease-in-out 0.3s;

  user-select: none;

  &:hover,
  &:focus,
  &:active {
    background-color: ${(props) => props.theme.colors.bg};
  }
`;

export const NavItem = ({ to, children }) => {
  return (
    <Wrapper component={Link} href={to} center>
      <Link href={to}>
        <Typography>{children}</Typography>
      </Link>
    </Wrapper>
  );
};
