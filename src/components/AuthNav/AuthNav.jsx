// import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './AuthNav.module.css';

export const AuthNav = () => {
  const location = useLocation();

  return (
    <Nav activeKey={location.pathname} className="me-auto">
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Log In
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? styles.activeLink : styles.link
        }
      >
        Register
      </NavLink>
    </Nav>
  );
};
