import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/auth-operations';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (thunkAPI) => {
    try {
      const response = await instance.get(`/api/products/`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const getProductById = createAsyncThunk(
  'products/getProductsById',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/api/products/${id}`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const createProduct = createAsyncThunk(
  'products/postProducts',
  async (arg, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/products', arg, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'products/updateProduct',
  async ({ id, arg }, thunkAPI) => {
    console.log('a', arg);
    try {
      const { data } = await instance.patch(`/api/products/${id}`, arg, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProducts',
  async (arg, thunkAPI) => {
    try {
      instance.delete(`/api/products/${arg}`);
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);
