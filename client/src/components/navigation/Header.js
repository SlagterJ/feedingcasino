import { Box } from "../Box";
import { Typography } from "../Typography";
import { NavItem } from "./NavItem";
import styled from "styled-components";

const Wrapper = styled(Box)`
  position: fixed !important;
  z-index: 99 !important;

  width: 100%;
  height: 70px;

  background-color: ${(props) => props.theme.colors.bgAlt};
  box-shadow: 0px 5px 5px 0px ${(props) => props.theme.colors.bg};
`;

const TitleWrapper = styled(Box)`
  width: 50%;
  height: 100%;
`;

const Title = styled(Typography)`
  user-select: none;

  & * {
    user-select: none;
  }
`;

const ItemsWrapper = styled(Box)`
  width: 50%;
  height: 100%;

  flex-direction: row;
  justify-content: space-around;
  justify-items: center;
  align-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const Header = () => {
  return (
    <Wrapper component="header">
      <TitleWrapper center>
        <Title variant="h3">Feeding Casino</Title>
      </TitleWrapper>
      <ItemsWrapper component="nav" noDefaultFlex>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/account">Account</NavItem>
      </ItemsWrapper>
    </Wrapper>
  );
};
