import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState = {
  isLoading: false,
  rooms: [],
  error: null,
};

// Get All Rooms
export const getAllRooms = createAsyncThunk("/admin/room/getAll", async () => {
  const response = await axios.get("http://localhost:5000/api/admin/room/all");
  return response.data.data.rooms;
});

// Add a New Room
export const createRoom = createAsyncThunk(
  "admin/room/create",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/room/create",
        formData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// Update an Existing Room
export const updateRoom = createAsyncThunk(
  "/admin/room/update",
  async ({ id, formData }) => {
    const response = await axios.put(
      `http://localhost:5000/api/admin/room/update/${id}`,
      formData
    );
    return response.data;
  }
);

// Delete a Room
export const deleteRoom = createAsyncThunk(
  "/admin/room/delete",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/api/admin/room/delete/${id}`
    );
    return response.data;
  }
);

const roomSlice = createSlice({
  name: "room",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle getAllRooms actions
      .addCase(getAllRooms.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllRooms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rooms = action.payload;
      })
      .addCase(getAllRooms.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle createRoom actions
      .addCase(createRoom.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rooms.push(action.payload);
      })
      .addCase(createRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to create staff";
      })

      // Handle updateRoom actions
      .addCase(updateRoom.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.rooms.findIndex(
          (room) => room._id === action.payload._id
        );
        if (index !== -1) {
          state.rooms[index] = action.payload;
        }
      })
      .addCase(updateRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle deleteRoom actions
      .addCase(deleteRoom.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.rooms = state.rooms.filter(
          (room) => room._id !== action.payload._id
        );
      })
      .addCase(deleteRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default roomSlice.reducer;
