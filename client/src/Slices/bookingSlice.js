import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState = {
  isLoading: false,
  bookings: [],
  oneBooking: null,
  error: null,
};

// Get All Bookings
export const getAllBookings = createAsyncThunk("admin/bookings/getAll", async () => {
  const response = await axios.get("http://localhost:5000/api/admin/booking/all");
  return response.data;
});

// Get Booking by ID
export const getBookingById = createAsyncThunk("admin/bookings/getById", async (id) => {
  const response = await axios.get(`http://localhost:5000/api/admin/booking/get/${id}`);
  return response.data;
});

// Create a New Booking
export const createBooking = createAsyncThunk(
  "admin/bookings/create",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/admin/booking/create", formData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// Update an Existing Booking
export const updateBooking = createAsyncThunk(
  "admin/bookings/update",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/admin/booking/update/${id}`,
        formData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// Delete a Booking
export const deleteBooking = createAsyncThunk(
  "admin/bookings/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/admin/booking/delete/${id}`);
      return { id }; // Return only the ID for easy filtering
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle getAllBookings actions
      .addCase(getAllBookings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllBookings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookings = action.payload;
      })
      .addCase(getAllBookings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle getBookingById actions
      .addCase(getBookingById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBookingById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.oneBooking = action.payload;
      })
      .addCase(getBookingById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle createBooking actions
      .addCase(createBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        if (Array.isArray(state.bookings)) {
          state.bookings.push(action.payload);
        } else {
          console.error('state.bookings is not an array');
        }
      })
      .addCase(createBooking.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          if (action.payload.error && action.payload.error.includes("duplicate key")) {
            state.error = "Duplicate booking ID error. Please use a different booking ID.";
            console.error("Duplicate booking ID error");
          } else {
            state.error = action.payload.message || "Failed to create booking";
          }
        } else {
          state.error = "Failed to create booking";
        }
      })      

      // Handle updateBooking actions
      .addCase(updateBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.bookings?.findIndex((booking) => booking._id === action.payload._id) || -1;
        if (index !== -1) {
          state.bookings[index] = action.payload;
        }
      })
      .addCase(updateBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle deleteBooking actions
      .addCase(deleteBooking.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.bookings = state.bookings?.filter((booking) => booking._id !== action.payload.id);
      })
      .addCase(deleteBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default bookingSlice.reducer;
