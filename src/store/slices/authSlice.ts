/**
 * Auth Slice
 * Quản lý state authentication, UI state, form data, và OTP
 * Sử dụng authService (axios) thay vì fetch trực tiếp
 */

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as authService from "../../services/authService";
import { AuthState, AuthUser, LoginFormData, RegisterFormData } from "../../types/auth";

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null,
};

// ─── Async Thunks (dùng authService + axios) ────────────────────────────────

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials: LoginFormData, { rejectWithValue }) => {
    try {
      const data = await authService.login(credentials);
      return data;
    } catch (error: any) {
      const message =
        error.response?.data?.message || error.message || "Đăng nhập thất bại";
      return rejectWithValue(message);
    }
  },
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: RegisterFormData, { rejectWithValue }) => {
    try {
      const data = await authService.register(userData);
      return data;
    } catch (error: any) {
      const message =
        error.response?.data?.message || error.message || "Đăng ký thất bại";
      return rejectWithValue(message);
    }
  },
);

export const verifyOTP = createAsyncThunk(
  "auth/verifyOTP",
  async (data: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await authService.verifyOTP(data);
      return response;
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Xác thực OTP thất bại";
      return rejectWithValue(message);
    }
  },
);

export const logoutUser = createAsyncThunk(
  "auth/logoutUser",
  async (_, { rejectWithValue }) => {
    try {
      await authService.logout();
      return;
    } catch (error: any) {
      // Dù API lỗi vẫn logout phía client
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return rejectWithValue(error.message);
    }
  },
);

// ─── Slice ──────────────────────────────────────────────────────────────────

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // Authentication
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setUser: (state, action: PayloadAction<AuthUser>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },

    // Clear auth state
    clearAuth: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // ── Login ────────────────────────────────────────────────────────────────
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ── Register ─────────────────────────────────────────────────────────────
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = false; // Cần xác thực OTP trước
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ── Verify OTP ───────────────────────────────────────────────────────────
    builder
      .addCase(verifyOTP.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.error = null;
      })
      .addCase(verifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ── Logout ───────────────────────────────────────────────────────────────
    builder
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state) => {
        // Vẫn logout phía client dù API lỗi
        state.loading = false;
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const {
  setIsAuthenticated,
  setUser,
  setLoading,
  setError,
  clearAuth,
} = authSlice.actions;

export default authSlice.reducer;
