import { Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';
// import styles from './Navigation.module.css';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const location = useLocation();

  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav variant="pills" activeKey={location.pathname} className="me-auto ">
          <Nav.Link href="/">Home</Nav.Link>
          {isLoggedIn && <Nav.Link href="/contacts">Contacts</Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

// <nav>
//   <NavLink
//     to="/"
//     className={({ isActive }) =>
//       isActive ? activeLink : link
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
