const getUserName = state => state.auth.user.name;
const getToken = state => state.auth.token;
const getIsLoggedIn = state => state.auth.isLoggedIn;

const authSelectors = {
  getUserName,
  getToken,
  getIsLoggedIn,
};

export default authSelectors;
