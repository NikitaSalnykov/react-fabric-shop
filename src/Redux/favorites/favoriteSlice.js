import { createSlice } from "@reduxjs/toolkit";

const initialState = {
favorites: []
};

export const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorite: (state, { payload }) => {
      state.favorites.push(payload)
    },
    deleteFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter(el=> el._id !== payload)
    },

  },
});

export const { setFavorite,
  deleteFavorite,
 } = favoriteSlice.actions;

export default favoriteSlice.reducer;

//Selectors
export const getFavorite = (state) => state.favorites.favorites;