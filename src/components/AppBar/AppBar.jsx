import { Outlet } from 'react-router-dom';

export function AppBar() {
  return (
    <header>
      <Navigation />
      <UserMenu />
      <Outlet />
    </header>
  );
}
