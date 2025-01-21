// store.js
import { configureStore } from '@reduxjs/toolkit';
import staffReducer from '../Slices/staffSlice';
import guestReducer from '../Slices/guestSlice';
import roomReducer from '../Slices/roomSlice';
import bookingReducer from "../Slices/bookingSlice";

const store = configureStore({
  reducer: {
    staff: staffReducer,
    guests: guestReducer,
    room: roomReducer,
    booking: bookingReducer,

  },
});

export default store;
