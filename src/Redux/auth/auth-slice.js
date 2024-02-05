import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  currentUser,
  logout,
  update,
  forgotPassword,
  resetPassword,
} from './auth-operations';

const initialState = {
  user: null,
  error: null,
  token: null,
  isLoggedIn: false,
  isRefresh: false,
  isRequestActive: false,
  isPasswordCompleted: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetHttpError: (state) => {
      state.error = null;
    },

    refreshToken: (state, action) => {
      state.token = action.payload;
    },

      resetPasswordCompleted: (state) => {
        state.isPasswordCompleted = false;
      },
  },
  extraReducers: (builder) => {
    // register
    builder.addCase(register.pending, (state) => {
      state.error = null;
      state.isRequestActive = true;
    });

    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isRequestActive = false;
    });

    builder.addCase(register.rejected, (state, action) => {
      state.error = action.payload;
      state.isRequestActive = false;
    });

    // login
    builder.addCase(login.pending, (state) => {
      state.error = null;
      state.isRequestActive = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRequestActive = false;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload;
      state.isRequestActive = false;
    });

    // current
    builder.addCase(currentUser.pending, (state) => {
      state.error = null;
      state.isRefresh = true;
    });

    builder.addCase(currentUser.fulfilled, (state, action) => {
      state.user = action.payload.data.user;
      state.isLoggedIn = true;
      state.isRefresh = false;
    });

    builder.addCase(currentUser.rejected, (state, action) => {
      if(action.payload === 403) {
        state.token = null
      }
      state.error = action.payload;
      state.isRefresh = false;
    });

    //logout
    builder.addCase(logout.pending, (state) => {
      state.error = null;
      state.isRefresh = true;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
      state.error = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isRefresh = false;
    });
    builder.addCase(logout.rejected, (state) => {
      state.user = null;
      state.error = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isRefresh = false;
    });

    // update
    builder.addCase(update.pending, (state) => {
      state.error = null;
      state.isRequestActive = true;
    });

    builder.addCase(update.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.error = null;
      state.isRequestActive = false;
    });

    builder.addCase(update.rejected, (state, action) => {
      state.error = action.payload;
      state.isRequestActive = false;
    });

    // forgot 

    builder.addCase(forgotPassword.pending, (state) => {
      state.error = null;
      state.isRequestActive = true;
    });

    builder.addCase(forgotPassword.fulfilled, (state) => {
      state.error = null;
      state.isRequestActive = false;
    });

    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.error = action.payload;
      state.isRequestActive = false;
    });

        // reset 

        builder.addCase(resetPassword.pending, (state) => {
          state.error = null;
          state.isRequestActive = true;
        });
    
        builder.addCase(resetPassword.fulfilled, (state, action) => {
          state.user = action.payload.user;
          state.error = null;
          state.isRequestActive = false;
          state.isPasswordCompleted = true;
        });
    
        builder.addCase(resetPassword.rejected, (state, action) => {
          state.error = action.payload;
          state.isRequestActive = false;
        });
  },
});


export const { resetPasswordCompleted } = authSlice.actions;
