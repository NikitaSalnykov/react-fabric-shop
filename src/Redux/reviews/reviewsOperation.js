import { createAsyncThunk } from '@reduxjs/toolkit';
import { instance } from '../auth/auth-operations';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchReviews',
  async (thunkAPI) => {
    try {
      const response = await instance.get(`/api/reviews/`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);


export const getReviewById = createAsyncThunk(
  'reviews/getReviewById',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/api/reviews/${id}`);
      return response.data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const createReview = createAsyncThunk(
  'reviews/postReview',
  async (arg, thunkAPI) => {
    try {
      const { data } = await instance.post('/api/reviews', arg, {
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

export const deleteReview = createAsyncThunk(
  'reviews/deleteReviews',
  async (arg, thunkAPI) => {
    try {
      instance.delete(`/api/reviews/${arg}`);
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const createReviewComment = createAsyncThunk(
  'reviews/postReviewComment',
  async ({reviewId, post}, thunkAPI) => {
    try {
      const { data } = await instance.patch(`/api/reviews/${reviewId}/comments`, post);
      return data;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);

export const deleteReviewComment = createAsyncThunk(
  'reviews/deleteReviewComment',
  async ({reviewId, commentId}, thunkAPI) => {
    try {
      instance.delete(`/api/reviews/${reviewId}/comments/${commentId}`);
      return arg;
    } catch (evt) {
      return thunkAPI.rejectWithValue(evt.message);
    }
  }
);
