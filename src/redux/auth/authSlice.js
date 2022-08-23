import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  isError: false,
  isTryEnter: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isError = false;
    },
    [authOperations.register.pending](state) {
      state.isTryEnter = true;
    },
    [authOperations.register.rejected](state) {
      state.isError = true;
      state.isTryEnter = false;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isError = false;
      state.isTryEnter = false;
    },
    [authOperations.logIn.pending](state) {
      state.isTryEnter = true;
    },
    [authOperations.logIn.rejected](state) {
      state.isError = true;
      state.isTryEnter = false;
    },
    [authOperations.logOut.fulfilled](state, _) {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLoggedIn = false;
      state.isError = false;
      state.isTryEnter = false;
    },
    [authOperations.fetchCurrentUser.pending](state, _) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

// export default authSlice.reducer;
export const authReducer = authSlice.reducer;
export const { setCredentials } = authSlice.actions;
