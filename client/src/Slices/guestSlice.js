import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState = {
  isLoading: false,
  guests: [],
  oneGuest: null,
  error: null,
};

// Get All Guests
export const getAllGuests = createAsyncThunk("admin/guest/getAll", async () => {
  const response = await axios.get("http://localhost:5000/api/admin/guest/all");
  return response.data.data.guests;
});

// Get Guest by ID
export const getGuestById = createAsyncThunk(
  "admin/guest/getById",
  async (id) => {
    const response = await axios.get(
      `http://localhost:5000/api/admin/guest/get/${id}`
    );
    return response.data.data;
  }
);

// Add a New Guest
export const createGuest = createAsyncThunk(
  "admin/guests/create",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/guest/create",
        formData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// Update an Existing Guest
export const updateGuest = createAsyncThunk(
  "admin/guests/update",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/admin/guest/update/${id}`,
        formData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// Delete a Guest
export const deleteGuest = createAsyncThunk(
  "admin/guests/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/admin/guest/delete/${id}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

const guestSlice = createSlice({
  name: "guest",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle getAllGuests actions
      .addCase(getAllGuests.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllGuests.fulfilled, (state, action) => {
        state.isLoading = false;
        state.guests = action.payload;
      })
      .addCase(getAllGuests.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle getGuestById actions
      .addCase(getGuestById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getGuestById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.oneGuest = action.payload;
      })
      .addCase(getGuestById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle createGuest actions
      .addCase(createGuest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createGuest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.guests.push(action.payload);
      })
      .addCase(createGuest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to create guest";
      })

      // Handle updateGuest actions
      .addCase(updateGuest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateGuest.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.guests.findIndex(
          (guest) => guest._id === action.payload._id
        );
        if (index !== -1) {
          state.guests[index] = action.payload;
        }
      })
      .addCase(updateGuest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle deleteGuest actions
      .addCase(deleteGuest.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteGuest.fulfilled, (state, action) => {
        state.isLoading = false;
        state.guests = state.guests.filter(
          (guest) => guest._id !== action.payload._id
        );
      })
      .addCase(deleteGuest.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default guestSlice.reducer;
