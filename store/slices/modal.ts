import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    snackBar: {
      content: "",
      width: 0,
    },
  },
  reducers: {
    setSnackBarModal: (state, action) => {
      state.snackBar = action.payload;
    },
  },
});

const { actions } = modalSlice;

export const { setSnackBarModal } = actions;

export default modalSlice;
