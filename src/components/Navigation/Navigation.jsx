import { Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
// import styles from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    // <Navbar bg="primary" variant="dark">

    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      {isLoggedIn && <Nav.Link href="/contacts">Contacts</Nav.Link>}
    </Nav>

    // </Navbar>

    // <nav>
    //   <NavLink
    //     to="/"
    //     className={({ isActive }) =>
    //       isActive ? styles.activeLink : styles.link
    //     }
    //   >
    //     Home
    //   </NavLink>
    //   {isLoggedIn && (
    //     <NavLink
    //       to="/contacts"
    //       className={({ isActive }) =>
    //         isActive ? styles.activeLink : styles.link
    //       }
    //     >
    //       Contacts
    //     </NavLink>
    //   )}
    // </nav>
  );
};
