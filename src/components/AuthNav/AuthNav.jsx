// import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

export const AuthNav = () => {
  const location = useLocation();

  return (
    <Nav activeKey={location.pathname} className="me-auto">
      <Nav.Link href="/login">Log In</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
    </Nav>
  );
};

/* <NavLink to="/login">Log In</NavLink>
      <NavLink to="/register">Register</NavLink> */
