import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/auth-operations';

export const fetchOrders = createAsyncThunk(
  'orders/fetchOrders',
  async (thunkAPI) => {
    try {
      const response = await instance.get(`/api/orders/`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const getOrderById = createAsyncThunk(
  'orders/getOrdersById',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/api/orders/${id}`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const createOrder = createAsyncThunk(
  'orders/postOrders',
  async (arg, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/orders', arg
      );
      return data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const deleteOrder = createAsyncThunk(
  'orders/deleteOrders',
  async (arg, thunkAPI) => {
    try {
      instance.delete(`/api/orders/${arg}`);
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);
