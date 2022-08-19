// import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export const AuthNav = () => {
  return (
    <>
      <Nav className="me-auto">
        <Nav.Link href="/login">Log In</Nav.Link>
        <Nav.Link href="/register">Register</Nav.Link>
      </Nav>
      {/* <NavLink to="/login">Log In</NavLink>
      <NavLink to="/register">Register</NavLink> */}
    </>
  );
};
