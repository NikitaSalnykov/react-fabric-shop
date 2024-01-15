import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/auth-operations';

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (thunkAPI) => {
    try {
      const response = await instance.get(`/api/posts/`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const fetchPostsCount = createAsyncThunk(
  'posts/fetchPostsCount',
  async (thunkAPI) => {
    try {
      const response = await instance.get(`/api/posts/count`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const getPostById = createAsyncThunk(
  'posts/getPostById',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/api/posts/${id}`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const createPost = createAsyncThunk(
  'posts/postPost',
  async (arg, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/posts', arg, {
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

export const updatePost = createAsyncThunk(
  'posts/updatePost',
  async ({ id, arg }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/api/posts/${id}`, arg, {
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

export const updateMain = createAsyncThunk(
  'posts/updateMain',
  async ({ id, arg }, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/api/posts/${id}/main`, arg);
      return data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  'posts/deletePost',
  async (arg, thunkAPI) => {
    try {
      instance.delete(`/api/posts/${arg}`);
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);
