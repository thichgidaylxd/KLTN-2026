/**
 * User Slice
 * Quản lý state người dùng
 * Sử dụng userService (axios) để gọi API
 */

import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as userService from "../../services/userService";
import { User, UserState, UpdateUserPayload } from "../../types/user";

const initialState: UserState = {
  users: [],
  currentUser: null,
  loading: false,
  error: null,
};

// ─── Async Thunks (dùng userService + axios) ────────────────────────────────

export const fetchProfile = createAsyncThunk(
  "user/fetchProfile",
  async (_, { rejectWithValue }) => {
    try {
      const data = await userService.getProfile();
      return data;
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Lấy thông tin thất bại";
      return rejectWithValue(message);
    }
  },
);

export const updateProfile = createAsyncThunk(
  "user/updateProfile",
  async (payload: UpdateUserPayload, { rejectWithValue }) => {
    try {
      const data = await userService.updateProfile(payload);
      return data;
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Cập nhật thông tin thất bại";
      return rejectWithValue(message);
    }
  },
);

export const fetchAllUsers = createAsyncThunk(
  "user/fetchAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const data = await userService.getAllUsers();
      return data;
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Lấy danh sách người dùng thất bại";
      return rejectWithValue(message);
    }
  },
);

export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (id: string, { rejectWithValue }) => {
    try {
      const data = await userService.getUserById(id);
      return data;
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Lấy thông tin người dùng thất bại";
      return rejectWithValue(message);
    }
  },
);

export const removeUser = createAsyncThunk(
  "user/removeUser",
  async (id: string, { rejectWithValue }) => {
    try {
      await userService.deleteUser(id);
      return id;
    } catch (error: any) {
      const message =
        error.response?.data?.message ||
        error.message ||
        "Xóa người dùng thất bại";
      return rejectWithValue(message);
    }
  },
);

// ─── Slice ──────────────────────────────────────────────────────────────────

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    clearUser: (state) => {
      state.currentUser = null;
      state.users = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    // ── Fetch Profile ────────────────────────────────────────────────────────
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ── Update Profile ───────────────────────────────────────────────────────
    builder
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ── Fetch All Users ──────────────────────────────────────────────────────
    builder
      .addCase(fetchAllUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchAllUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ── Fetch User By ID ─────────────────────────────────────────────────────
    builder
      .addCase(fetchUserById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentUser = action.payload;
      })
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });

    // ── Remove User ──────────────────────────────────────────────────────────
    builder
      .addCase(removeUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users = state.users.filter((u) => u.id !== action.payload);
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setUsers, setCurrentUser, setLoading, setError, clearUser } =
  userSlice.actions;

export default userSlice.reducer;
