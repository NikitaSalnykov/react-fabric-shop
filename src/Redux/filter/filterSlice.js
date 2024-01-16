import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterName: "",
  filterdCategory: "",
  filterPrice: '',
  filterColor: '',
  filterSale: false,
  filterNew: false,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterName: (state, { payload }) => {
      state.filterName = payload;
    },
    setFilterCategory: (state, { payload }) => {
      state.filterdCategory = payload;
    },
    setFilterColor: (state, { payload }) => {
      state.filterColor = payload;
    },
    setFilterPrice: (state, { payload }) => {
      state.filterPrice = payload;
    },
    setFilterSale: (state, { payload }) => {
      state.filterSale = payload;
    },
    setFilterNew: (state, { payload }) => {
      state.filterNew = payload;
    },
  },
});

export const { setFilterName,
  setFilterCategory,
  setFilterColor,
  setFilterPrice,
  setFilterSale,
  setFilterNew,
 } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
export const getFilterCategory = (state) => state.filter.filterdCategory;
export const getFilterPrice = (state) => state.filter.filterPrice;
export const getFilterColor = (state) => state.filter.filterColor;
export const getFilterName = (state) => state.filter.filterName;
export const getFilterSale = (state) => state.filter.filterSale;
export const getFilterNew = (state) => state.filter.filterNew;



