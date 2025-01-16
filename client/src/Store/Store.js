import { configureStore } from '@reduxjs/toolkit';
import staffReducer from '../Slices/staffSlice.js';

const store = configureStore({
  reducer: {
    staff: staffReducer,
  },
});

export default store;
