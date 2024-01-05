import { createSlice } from '@reduxjs/toolkit';
import {
  createProduct,
  deleteProduct,
  fetchProducts,
  getProductById,
  updateProduct,
} from './productsOperation';

const initialProducts = {
  items: [],
  isLoading: false,
  error: null,
  selectedProduct: null,
  isProductCreated: false,
  total: 0,
};

const rejectFunc = (state, action) => {
  return {
    items: state.items,
    isLoading: false,
    error: action.payload,
    total: 0,
  };
};
const pendingFunc = (state) => {
  return {
    ...state,
    items: state.items,
    isLoading: true,
    error: null,
  };
};

const productsStateSlice = createSlice({
  name: 'products',
  initialState: initialProducts,
  reducers: {
    resetProductCreated: (state) => {
      state.isProductCreated = false;
    },
  },
  extraReducers: (builder) => {
    // fetch

    builder.addCase(fetchProducts.pending, pendingFunc);
    builder.addCase(fetchProducts.fulfilled, (_, action) => {
      return {
        items: action.payload,
        isLoading: false,
        error: null,
        total: action.payload.total,
      };
    });
    builder.addCase(fetchProducts.rejected, rejectFunc);

    //getProductById

    builder.addCase(getProductById.pending, pendingFunc);
    builder.addCase(getProductById.fulfilled, (state, action) => {
      return {
        ...state,
        selectedProduct: action.payload,
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(getProductById.rejected, rejectFunc);

    // create

    builder.addCase(createProduct.pending, pendingFunc);
    builder.addCase(createProduct.fulfilled, (state, action) => {
      return {
        items: [action.payload.data, ...state.items],
        isLoading: false,
        error: null,
        isProductCreated: true,
      };
    });
    builder.addCase(createProduct.rejected, rejectFunc);

    // delete

    builder.addCase(deleteProduct.pending, pendingFunc);
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      return {
        items: [...state.items.filter((el) => el._id !== action.payload)],
        isLoading: false,
        error: null,
      };
    });
    builder.addCase(deleteProduct.rejected, rejectFunc);

    //update

    builder.addCase(updateProduct.pending, pendingFunc);

    builder.addCase(updateProduct.fulfilled, (state, action) => {
      const updatedProduct = action.payload;

      const updatedItems = state.items.map((product) =>
        product._id === updatedProduct._id ? updatedProduct : product
      );

      return {
        ...state,
        items: updatedItems,
        isLoading: false,
        error: null,
      };
    });

    builder.addCase(updateProduct.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { resetProductCreated } = productsStateSlice.actions;
export const productsStateReducer = productsStateSlice.reducer;
