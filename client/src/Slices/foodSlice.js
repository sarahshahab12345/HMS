import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState = {
  isLoading: false,
  foodItems: [],
  foodItem: null,
  error: null,
};

// Get All Food Items
export const fetchAllFoodItems = createAsyncThunk(
  "/admin/food/getAll",
  async () => {
    const response = await axios.get("http://localhost:5000/api/admin/food/all");
    return response.data.data.foods;
  }
);

// Get Food Item by ID
export const getFoodById = createAsyncThunk(
  "/admin/food/getById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/admin/food/getById/${id}`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// Add a New Food Item
export const addFoodItem = createAsyncThunk(
  "admin/food/create",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/food/create",
        formData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// Update an Existing Food Item
export const modifyFoodItem = createAsyncThunk(
  "/admin/food/update",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:5000/api/admin/food/update/${id}`,
        formData
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Something went wrong');
    }
  }
);

// Delete a Food Item
export const removeFoodItem = createAsyncThunk(
  "/admin/food/delete",
  async (id) => {
    const response = await axios.delete(
      `http://localhost:5000/api/admin/food/delete/${id}`
    );
    return response.data;
  }
);

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchAllFoodItems actions
      .addCase(fetchAllFoodItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllFoodItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.foodItems = action.payload;
      })
      .addCase(fetchAllFoodItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle getFoodById actions
      .addCase(getFoodById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getFoodById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.foodItem = action.payload;
      })
      .addCase(getFoodById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle addFoodItem actions
      .addCase(addFoodItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFoodItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.foodItems.push(action.payload);
      })
      .addCase(addFoodItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to add food item";
      })

      // Handle modifyFoodItem actions
      .addCase(modifyFoodItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(modifyFoodItem.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.foodItems.findIndex(
          (food) => food._id === action.payload._id
        );
        if (index !== -1) {
          state.foodItems[index] = action.payload;
        }
      })
      .addCase(modifyFoodItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })

      // Handle removeFoodItem actions
      .addCase(removeFoodItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeFoodItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.foodItems = state.foodItems.filter(
          (food) => food._id !== action.payload._id
        );
      })
      .addCase(removeFoodItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export default foodSlice.reducer;
