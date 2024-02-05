import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setToken, delToken } from '../operations/handleToken';
import { data } from 'autoprefixer';

export const instance = axios.create({
  baseURL: 'https://fabric-shop-back.onrender.com',
});

// register
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post(`/api/auth/register`, credentials);
      const { data: dataResponse } = data;

      setToken(dataResponse.accessToken);
      localStorage.setItem('refresh', dataResponse.refreshToken);

      return {
        token: dataResponse.accessToken,
        refreshToken: dataResponse.refreshToken,
        user: dataResponse.user,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

// login
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.post(`/api/auth/login`, credentials);
      setToken(data.accessToken);
      localStorage.setItem('refresh', data.refreshToken);

      return {
        token: data.accessToken,
        refreshToken: data.refreshToken,
        user: data.user,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

// current
export const currentUser = createAsyncThunk(
  '/api/auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;

    if (token === null) {
      thunkAPI.rejectValue();
    }

    setToken(token);

    try {
      const response = await instance.get(`/api/auth/current`);
      return response.data;
    } catch (error) {
      if (error.response.status === 403) {
        delToken();
        localStorage.setItem('refresh', null);
        return thunkAPI.rejectWithValue(error.response.status);
      }

      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

// logout
export const logout = createAsyncThunk('/api/auth/logout', async (thunkAPI) => {
  try {
    const result = await instance.post(`/api/auth/logout`);
    localStorage.setItem('refresh', null);
    delToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.status);
  }
});

// update
export const update = createAsyncThunk(
  'auth/update',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/api/auth`, credentials);

      return { token: data.token, user: data.user };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (arg, thunkAPI) => {
    try {
      const { data } = await instance.post(`/api/auth/password/forgot`, arg,  { headers: { 'Content-Type': 'application/json' } });
      console.log(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);

    }
  }
)

  export const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (arg, thunkAPI) => {
      try {
        const { data } = await instance.post(`/api/auth/password/reset`, arg,  { headers: { 'Content-Type': 'application/json' } });
        return { user: data.user };
  
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response.status);
      }
    }
);
