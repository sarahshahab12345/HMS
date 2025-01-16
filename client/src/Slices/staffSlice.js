import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState = {
  isLoading: false,
  staffMembers: [],
  error: null,
};

// Get All Staff Members
export const getAllStaff = createAsyncThunk("/admin/staff/getAll", async () => {
  const response = await axios.get("http://localhost:5000/api/admin/staff/all");
  return response.data.data.staffMembers;
});

// Add a New Staff Member
export const createStaff = createAsyncThunk(
  "/admin/staff/create",
  async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/admin/staff/create",
      formData
    );
    return response.data;
  }
);

// Update an Existing Staff Member
export const updateStaff = createAsyncThunk(
  "/admin/staff/update",
  async ({ id, formData }) => {
    const response = await axios.put(
      `http://localhost:5000/api/admin/staff/update/${id}`,
      formData
    );
    return response.data;
  }
);

// Delete a Staff Member
export const deleteStaff = createAsyncThunk(
  "/admin/staff/delete",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/api/admin/staff/delete/${id}`
    );
    return response.data;
  }
);

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle getAllStaff actions
      .addCase(getAllStaff.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllStaff.fulfilled, (state, action) => {
        state.isLoading = false;
        state.staffMembers = action.payload;
      })
      .addCase(getAllStaff.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle createStaff actions
      .addCase(createStaff.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createStaff.fulfilled, (state, action) => {
        state.isLoading = false;
        state.staffMembers.push(action.payload);
      })
      .addCase(createStaff.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle updateStaff actions
      .addCase(updateStaff.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateStaff.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.staffMembers.findIndex(
          (staff) => staff._id === action.payload._id
        );
        if (index !== -1) {
          state.staffMembers[index] = action.payload;
        }
      })
      .addCase(updateStaff.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle deleteStaff actions
      .addCase(deleteStaff.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteStaff.fulfilled, (state, action) => {
        state.isLoading = false;
        state.staffMembers = state.staffMembers.filter(
          (staff) => staff._id !== action.payload._id
        );
      })
      .addCase(deleteStaff.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default staffSlice.reducer;
