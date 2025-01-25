import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  token: localStorage.getItem('authToken') || null,
  staff: null,
  loading: false,
  error: null,
};

// Login Action (Async Thunk)
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/staff/login', credentials);
      const token = response.data.token;

      // Store token in localStorage
      localStorage.setItem('authToken', token);

      return { token };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Something went wrong');
    }
  }
);

// Logout Action
export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    // Remove token from localStorage
    localStorage.removeItem('authToken');
    return {}; // Empty object to reset state
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Something went wrong');
  }
});

// Check Auth Action (Verifying token validity)
export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        return rejectWithValue('No token found');
      }

      // If the token is available, validate it via the server
      const response = await axios.get('http://localhost:5000/api/admin/staff/checkAuth', {
        headers: { Authorization: `Bearer ${token}` },
      });

      return { staff: response.data.staff };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Invalid token');
    }
  }
);

// Slice for Auth (Login, AuthMiddleware, and Logout)
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Set staff data after successful login or checkAuth
    setStaff(state, action) {
      state.staff = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Logout
    builder.addCase(logout.fulfilled, (state) => {
      state.token = null;
      state.staff = null;
    });

    // Check Authentication (verify token)
    builder.addCase(checkAuth.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(checkAuth.fulfilled, (state, action) => {
      state.staff = action.payload.staff;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(checkAuth.rejected, (state, action) => {
      state.staff = null;
      state.loading = false;
      state.error = action.payload;
    });
  },
});

// Export actions and reducer
export const { setStaff } = authSlice.actions;
export default authSlice.reducer;
