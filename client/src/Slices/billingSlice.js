import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial State
const initialState = {
  isLoading: false,
  billingRecords: [],
  billingRecord: null,
  error: null,
};

// Get All Billing Records
export const getAllBillings = createAsyncThunk(
  "/admin/billing/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5000/api/admin/billing/all");
      return response.data.data.billings; 
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching billing records");
    }
  }
);

// Get a Billing Record by ID
export const getBillingById = createAsyncThunk(
  "/admin/billing/getById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/admin/billing/${id}`);
      return response.data.data; // Ensure API structure matches
    } catch (error) {
      return rejectWithValue(error.response?.data || "Error fetching billing record");
    }
  }
);

// Add a New Billing Record
export const createBilling = createAsyncThunk(
  "/admin/billing/create",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:5000/api/admin/billing/create", formData);
      return response.data.billing; // Ensure response contains newly created billing
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// Update an Existing Billing Record
export const updateBilling = createAsyncThunk(
  "/admin/billing/update",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/admin/billing/update/${id}`, formData);
      return response.data.billing; // Ensure response contains updated billing data
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete a Billing Record
export const deleteBilling = createAsyncThunk(
  "/admin/billing/delete",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:5000/api/admin/billing/delete/${id}`);
      return id; // Return only the ID for filtering out
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete billing record");
    }
  }
);

const billingSlice = createSlice({
  name: "billing",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Get All Billings
      .addCase(getAllBillings.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllBillings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.billingRecords = action.payload;
      })
      .addCase(getAllBillings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Get Billing by ID
      .addCase(getBillingById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBillingById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.billingRecord = action.payload;
      })
      .addCase(getBillingById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Create Billing
      .addCase(createBilling.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createBilling.fulfilled, (state, action) => {
        state.isLoading = false;
        state.billingRecords.push(action.payload);
      })
      .addCase(createBilling.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update Billing
      .addCase(updateBilling.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateBilling.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.billingRecords.findIndex(
          (billing) => billing._id === action.payload._id
        );
        if (index !== -1) {
          state.billingRecords[index] = action.payload;
        }
      })
      .addCase(updateBilling.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete Billing
      .addCase(deleteBilling.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBilling.fulfilled, (state, action) => {
        state.isLoading = false;
        state.billingRecords = state.billingRecords.filter(
          (billing) => billing._id !== action.payload // Filter out deleted record
        );
      })
      .addCase(deleteBilling.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default billingSlice.reducer;
