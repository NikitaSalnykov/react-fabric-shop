import { createSlice } from '@reduxjs/toolkit';
import {
  createOrder,
  deleteOrder,
  fetchOrders,
  getOrderById,
} from './ordersOperation';

const initialProducts = {
  orders: [],
  isLoading: false,
  error: null,
  isOrderCreated: false,
  selectedProduct: null,
};

const rejectFunc = (state, action) => {
  return {
    orders: state.orders,
    isLoading: false,
    error: action.payload,
  };
};
const pendingFunc = (state) => {
  return {
    ...state,
    orders: state.orders,
    isLoading: true,
    error: null,
  };
};

const orderSlice = createSlice({
  name: 'orders',
  initialState: initialProducts,
  reducers: {
    resetOrderCreated: (state) => {
      state.isOrderCreated = false;
    },
  },
  extraReducers: (builder) => {
    // fetch

    builder.addCase(fetchOrders.pending, pendingFunc);
    builder.addCase(fetchOrders.fulfilled, (_, action) => {
      return {
        orders: action.payload,
        isLoading: false,
        error: null,
        total: action.payload.total,
      };
    });
    builder.addCase(fetchOrders.rejected, rejectFunc);

    //getById

    builder.addCase(getOrderById.pending, pendingFunc);
    builder.addCase(getOrderById.fulfilled, (state, action) => {
      return {
        ...state,
        selectedProduct: action.payload,
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(getOrderById.rejected, rejectFunc);

    // create

    builder.addCase(createOrder.pending, pendingFunc);
    builder.addCase(createOrder.fulfilled, (state, action) => {
      return {
        orders: [action.payload.data, ...state.orders],
        isLoading: false,
        error: null,
        isOrderCreated: true,
      };
    });
    builder.addCase(createOrder.rejected, rejectFunc);

    // delete

    builder.addCase(deleteOrder.pending, pendingFunc);
    builder.addCase(deleteOrder.fulfilled, (state, action) => {
      return {
        orders: [...state.orders.filter((el) => el._id !== action.payload)],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(deleteOrder.rejected, rejectFunc);
  },
});
export const orderReducer = orderSlice.reducer;
export const { resetOrderCreated } = orderSlice.actions;
