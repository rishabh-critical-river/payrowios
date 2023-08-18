import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth";
import productSlilce from "./slices/product";
import modalSlice from "./slices/modal";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    product: productSlilce.reducer,
    modal: modalSlice.reducer,
  },
});

export default store;
