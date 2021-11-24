import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

export const Header = () => {
  return (
    <Navbar color="dark" dark expand="md" light>
      <NavbarBrand href="/">Feeding Casino</NavbarBrand>
      <Nav className="me-auto" navbar>
        <NavItem>
          <NavLink href="/game">Game</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};
