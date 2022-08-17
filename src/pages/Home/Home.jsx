const { NavLink } = require('react-router-dom');

const Home = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <p>Log In or Register and use Phonebook</p>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to="/register">Register</NavLink>
    </>
  );
};

export default Home;
