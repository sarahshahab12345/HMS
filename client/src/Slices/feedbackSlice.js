import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState = {
  isLoading: false,
  feedbacks: [],
  feedback: null,
  error: null,
};

// Get All Feedbacks
export const getAllFeedbacks = createAsyncThunk("/admin/feedback/getAll", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:5000/api/admin/feedback/all');
    return response.data.data.feedbacks;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Error fetching feedbacks");
  }
});

// Get Feedback by ID
export const getFeedbackById = createAsyncThunk("/admin/feedback/getById", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`http://localhost:5000/api/admin/feedback/${id}`);
    return response.data.feedback;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Error fetching feedback");
  }
});

// Create Feedback
export const createFeedback = createAsyncThunk("/admin/feedback/create", async (formData, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:5000/api/admin/feedback/create', formData);
    return response.data.feedback;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Error creating feedback");
  }
});

// Update Feedback
export const updateFeedback = createAsyncThunk("/admin/feedback/update", async ({ id, formData }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`http://localhost:5000/api/admin/feedback/update/${id}`, formData);
    return response.data.feedback;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Error updating feedback");
  }
});

// Delete Feedback
export const deleteFeedback = createAsyncThunk("/admin/feedback/delete", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`http://localhost:5000/api/admin/feedback/delete/${id}`);
    return id;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Error deleting feedback");
  }
});

const feedbackSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllFeedbacks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllFeedbacks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.feedbacks = action.payload;
      })
      .addCase(getAllFeedbacks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getFeedbackById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFeedbackById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.feedback = action.payload;
      })
      .addCase(getFeedbackById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.feedbacks.push(action.payload);
      })
      .addCase(createFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.feedbacks.findIndex((fb) => fb._id === action.payload._id);
        if (index !== -1) {
          state.feedbacks[index] = action.payload;
        }
      })
      .addCase(updateFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteFeedback.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteFeedback.fulfilled, (state, action) => {
        state.isLoading = false;
        state.feedbacks = state.feedbacks.filter((fb) => fb._id !== action.payload);
      })
      .addCase(deleteFeedback.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default feedbackSlice.reducer;