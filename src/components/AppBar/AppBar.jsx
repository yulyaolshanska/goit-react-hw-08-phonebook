import { Outlet } from 'react-router-dom';
import { Navigation } from 'components/Navigation';
import { UserMenu } from 'components/UserMenu';

export function AppBar() {
  return (
    <header>
      <Navigation />
      <UserMenu />
      <Outlet />
    </header>
  );
}
