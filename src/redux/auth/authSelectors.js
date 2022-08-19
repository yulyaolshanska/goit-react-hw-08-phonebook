const getUserName = state => state.auth.user.name;
const getToken = state => state.auth.token;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getUserName,
  getToken,
  getIsLoggedIn,
  getIsFetchingCurrentUser,
};

export default authSelectors;
