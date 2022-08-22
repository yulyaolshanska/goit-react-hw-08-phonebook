import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import styles from './Home.module.css';

import { NavLink } from 'react-router-dom';

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
          <Nav className="mt-5 justify-content-center">
            <Nav.Item className="mr-3">
              <NavLink className={styles.navlink} to="/login">
                Log In
              </NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className={styles.navlink} to="/register">
                Register
              </NavLink>
            </Nav.Item>
          </Nav>
        </div>
      )}
    </Container>
  );
};

export default Home;
