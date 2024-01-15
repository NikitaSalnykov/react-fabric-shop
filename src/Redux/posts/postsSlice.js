import { createSlice } from '@reduxjs/toolkit';
import {
  createPost,
  deletePost,
  fetchPosts,
  fetchPostsCount,
  getPostById,
  updatePost,
  updateMain,
} from './postsOperation';

const initialProducts = {
  posts: [],
  isLoading: false,
  error: null,
  isPostCreated: false,
  selectedPost: null,
  count: 0,
};

const rejectFunc = (state, action) => {
  return {
    posts: state.posts,
    isLoading: false,
    error: action.payload,
  };
};
const pendingFunc = (state) => {
  return {
    ...state,
    posts: state.posts,
    isLoading: true,
    error: null,
  };
};

const postSlice = createSlice({
  name: 'posts',
  initialState: initialProducts,
  reducers: {
    resetPostCreated: (state) => {
      state.isPostCreated = false;
    },
  },
  extraReducers: (builder) => {
    // fetch

    builder.addCase(fetchPosts.pending, pendingFunc);
    builder.addCase(fetchPosts.fulfilled, (_, action) => {
      return {
        posts: action.payload,
        isLoading: false,
        error: null,
        total: action.payload.total,
      };
    });
    builder.addCase(fetchPosts.rejected, rejectFunc);

    // count

    builder.addCase(fetchPostsCount.pending, pendingFunc);
    builder.addCase(fetchPostsCount.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        error: null,
        count: action.payload,
      };
    });
    builder.addCase(fetchPostsCount.rejected, rejectFunc);

    //getById

    builder.addCase(getPostById.pending, pendingFunc);
    builder.addCase(getPostById.fulfilled, (state, action) => {
      return {
        ...state,
        selectedPost: action.payload,
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(getPostById.rejected, rejectFunc);

    // create

    builder.addCase(createPost.pending, pendingFunc);
    builder.addCase(createPost.fulfilled, (state, action) => {
      return {
        posts: [action.payload.data, ...state.posts],
        isLoading: false,
        error: null,
        isPostCreated: true,
      };
    });
    builder.addCase(createPost.rejected, rejectFunc);

    // delete

    builder.addCase(deletePost.pending, pendingFunc);
    builder.addCase(deletePost.fulfilled, (state, action) => {
      return {
        posts: [...state.posts.filter((el) => el._id !== action.payload)],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(deletePost.rejected, rejectFunc);

    //update

    builder.addCase(updatePost.pending, pendingFunc);

    builder.addCase(updatePost.fulfilled, (state, action) => {
      const updatedProduct = action.payload;

      const updatedItems = state.posts.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      );

      return {
        ...state,
        posts: updatedItems,
        isLoading: false,
        error: null,
      };
    });

    builder.addCase(updatePost.rejected, (state, action) => {
      state.error = action.payload;
    });

    //updateMain

    builder.addCase(updateMain.pending, pendingFunc);

    builder.addCase(updateMain.fulfilled, (state, action) => {
      const updatedProduct = action.payload;

      const updatedItems = state.posts.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      );

      return {
        ...state,
        posts: updatedItems,
        isLoading: false,
        error: null,
      };
    });

    builder.addCase(updateMain.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const postReducer = postSlice.reducer;
export const { resetPostCreated } = postSlice.actions;
