import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    'check-device-data': {
      tid: '',
      mobileNumber: '',
    },
    'auth-code-data': {
      key: '',
      iv: '',
      AES: '',
      ALG: '',
    },
  },
  reducers: {
    updateState: (state, action) => {},
  },
});

export default authSlice;
