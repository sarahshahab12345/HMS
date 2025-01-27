import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Initial state
const initialState = {
  staff: null,
  loading: false,
  error: null,
};

// Login Action (Async Thunk)
export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/admin/staff/login', credentials, {
        withCredentials: true, 
      });

      dispatch(checkAuth()); // Dispatch checkAuth to validate the token immediately

      return {}; // No need to return token here, since it's handled by cookies
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Something went wrong');
    }
  }
);

// Logout Action
export const logout = createAsyncThunk('auth/logout', async (_, { rejectWithValue }) => {
  try {
    document.cookie = 'token=; Max-Age=-99999999;';
    return {};
  } catch (error) {
    return rejectWithValue(error.response?.data?.message || 'Something went wrong');
  }
});

// Check Auth Action
export const checkAuth = createAsyncThunk(
  'auth/checkAuth',
  async (_, { rejectWithValue }) => {
    try {
      const token = document.cookie.split('; ').find(row => row.startsWith('authToken='))?.split('=')[1];

      if (!token) {
        return rejectWithValue('No token found');
      }

      const response = await axios.get('http://localhost:5000/api/admin/staff/checkAuth', {
        headers: { Authorization: `Bearer ${token}` },
      });

      return { staff: response.data.staff };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Invalid token');
    }
  }
);

// Slice for Auth
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setStaff(state, action) {
      state.staff = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(logout.fulfilled, (state) => {
      state.staff = null;
    });

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

export const { setStaff } = authSlice.actions;
export default authSlice.reducer;
