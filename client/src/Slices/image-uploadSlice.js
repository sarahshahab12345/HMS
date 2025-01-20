import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk to upload image (Base64)
export const uploadImage = createAsyncThunk(
  "image/uploadImage",
  async (file, { rejectWithValue }) => {
    try {
      console.log("Sending File to Backend:", file.buffer);  

      const response = await axios.post("http://localhost:5000/api/img/upload-image", {
        file: file.buffer,  
      });

      console.log("Backend Response:", response.data);  

      return response.data.result; 
    } catch (error) {
      console.log("Error in Upload:", error.response.data); 
      return rejectWithValue(error.response.data);
    }
  }
);

const imageSlice = createSlice({
  name: "image",
  initialState: {
    image: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearImageState: (state) => {
      state.image = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.loading = false;
        state.image = action.payload;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to upload image";
      });
  },
});

export const { clearImageState } = imageSlice.actions;
export default imageSlice.reducer;
