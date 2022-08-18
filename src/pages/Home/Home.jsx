import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

const { NavLink } = require('react-router-dom');

const Home = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <h1>Phonebook</h1>
      {isLoggedIn ? (
        <p>Welcome to Phonebook</p>
      ) : (
        <div>
          <p>Log In or Register and use Phonebook</p>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/register">Register</NavLink>
        </div>
      )}
    </>
  );
};

export default Home;
