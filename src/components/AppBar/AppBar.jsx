import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';

function AppBar() {
  return (
    <header>
      <Navigation />
      <UserMenu />
      <Outlet />
    </header>
  );
}

export default AppBar;
