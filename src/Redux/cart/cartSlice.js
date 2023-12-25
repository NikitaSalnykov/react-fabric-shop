import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    resetCart: (state) => {
      state.cart = [];
    },
    setCart: (state, { payload }) => {
      state.cart.push(payload);
    },
    deleteCart: (state, { payload }) => {
      state.cart = state.cart.filter((el) => el.id !== payload);
    },
    updateCart: (state, { payload }) => {
      const index = state.cart.findIndex((el) => el.id === payload.id);
      if (index !== -1) {
        state.cart[index] = payload;
      }
    },
  },
});

export const { setCart, deleteCart, updateCart, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
