import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../Store/Shopping-cart/CartSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
