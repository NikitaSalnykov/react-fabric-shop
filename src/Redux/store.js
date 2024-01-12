import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { authSlice } from './auth/auth-slice';
import {favoriteSlice} from './favorites/favoriteSlice';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { productsStateReducer } from './products/productsSlice';
import cartSlice from './cart/cartSlice';
import { orderReducer } from './orders/ordersSlice';
import { postReducer } from './posts/postsSlice';
import filterSlice from './filter/filterSlice';

// auth persist config
const authPersistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'],
};

const cartPersistConfig = {
  key: 'cart',
  storage: storage,
  whitelist: ['cart'],
};

const favoritesPersistConfig={
  key: 'favorites',
  storage: storage,
  whitelist: ['favorites'],
}

const rootReduser = combineReducers({
  // redusers
  auth: persistReducer(authPersistConfig, authSlice.reducer),
  products: productsStateReducer,
  orders: orderReducer,
  posts: postReducer,
  filter: filterSlice,
  favorites: persistReducer(favoritesPersistConfig, favoriteSlice.reducer),
  cart: persistReducer(cartPersistConfig, cartSlice),
});

export const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
