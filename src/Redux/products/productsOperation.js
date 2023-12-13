import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/auth-operations';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async ({ category, query = '', page, limit }, thunkAPI) => {
    try {
      const params = new URLSearchParams({
        q: query,
        page: page,
        limit: limit,
      });
      const response = await instance.get(`/api/products/${category}`, {
        params,
      });
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const getProductById = createAsyncThunk(
  'products/getProductsById',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/api/products/id/${id}`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
);

export const createProduct = createAsyncThunk(
  'products/postProducts',
  async (arg, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/products', arg);
      return data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  },
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
  },
);
