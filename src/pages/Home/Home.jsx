import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

// const { NavLink } = require('react-router-dom');

import { Container } from 'react-bootstrap';

const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container className="mt-5">
      <h1>Phonebook</h1>
      {isLoggedIn ? (
        <p>Welcome to Phonebook</p>
      ) : (
        <div>
          <p>Log In or Register and use Phonebook.</p>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href="/login">Log In</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav.Item>
          </Nav>
        </div>
      )}
    </Container>
  );
};

export default Home;

/* <NavLink to="/login">Log In</NavLink>
          <NavLink to="/register">Register</NavLink> */
