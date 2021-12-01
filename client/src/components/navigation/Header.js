import { useSelector, useDispatch } from "react-redux";
import { clearUser } from "../../global/user";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export const Header = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleLogOutClick = () => {
    dispatch(clearUser());
  };

  return (
    <Navbar color="dark" dark expand="md" light>
      <NavbarBrand href="/">Feeding Casino</NavbarBrand>
      <Nav className="me-auto" navbar>
        {user ? (
          <>
            <NavItem>
              <NavLink href="/game">Game</NavLink>
            </NavItem>
            <NavItem onClick={handleLogOutClick}>
              <NavLink>Log Out</NavLink>
            </NavItem>
          </>
        ) : (
          <>
            <NavItem>
              <NavLink href="/auth">Log In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/auth/signup">Sign Up</NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </Navbar>
  );
};
