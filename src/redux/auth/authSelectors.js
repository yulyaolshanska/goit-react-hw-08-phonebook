const getUserName = state => state.auth.user.name;
const getToken = state => state.auth.token;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsError = state => state.auth.isError;

const getIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getUserName,
  getToken,
  getIsLoggedIn,
  getIsFetchingCurrentUser,
  getIsError,
};

export default authSelectors;
