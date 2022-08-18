import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    console.log('credentials', credentials);
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {
    console.log('error', error);
  }
});

const authOperations = {
  register,
};

export default authOperations;
