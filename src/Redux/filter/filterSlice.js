import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filterName: "",
  filterdCategory: "",
  filterPrice: '',
  filterColor: '',
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterName: (state, { payload }) => {
      state.filterName = payload;
    },
    setFilterdCategory: (state, { payload }) => {
      state.filterdCategory = payload;
    },
    setFilterColor: (state, { payload }) => {
      state.filterColor = payload;
    },
    setFilterPrice: (state, { payload }) => {
      state.filterPrice = payload;
    },
  },
});

export const { setFilterName,
  setFilterdCategory,
  setFilterColor,
  setFilterPrice
 } = filterSlice.actions;

export default filterSlice.reducer;

//Selectors
export const getFilterdCategory = (state) => state.filter.filterdCategory;
export const getFilterPrice = (state) => state.filter.filterPrice;
export const getFilterColor = (state) => state.filter.filterColor;
export const getFilterName = (state) => state.filter.filterName;
