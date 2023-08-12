import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/auth';
import productSlilce from './slices/product';

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    product: productSlilce.reducer,
  },
});

export default store;
