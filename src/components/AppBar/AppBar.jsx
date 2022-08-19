import { Outlet } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';

import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { AuthNav } from 'components/AuthNav/AuthNav';

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    // <header>
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default AppBar;
