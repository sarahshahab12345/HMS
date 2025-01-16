// store.js
import { configureStore } from '@reduxjs/toolkit';
import staffReducer from '../Slices/staffSlice';
import guestReducer from '../Slices/guestSlice';
import roomReducer from '../Slices/roomSlice';

const store = configureStore({
  reducer: {
    staff: staffReducer,
    guests: guestReducer,
    room: roomReducer,
  },
});

export default store;
