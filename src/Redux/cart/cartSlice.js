import { createSlice } from "@reduxjs/toolkit";
import { startOfWeek } from "date-fns";

const initialState = {
cart: []
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, { payload }) => {
      state.cart.push(payload)
    },
    deleteCart: (state, { payload }) => {
      state.cart = state.cart.filter(el=> el.id !== payload)
    },

  },
});

export const { setCart,
  deleteCart,
 } = cartSlice.actions;

export default cartSlice.reducer;

