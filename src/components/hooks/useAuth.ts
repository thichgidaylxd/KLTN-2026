/**
 * useAuth Hook
 * Custom hook để truy cập authentication state và actions từ Redux store
 * Sử dụng typed hooks useAppDispatch và useAppSelector
 */

import { useAppDispatch, useAppSelector } from "../../store";
import {
  loginUser,
  registerUser,
  verifyOTP,
  logoutUser,
  clearAuth,
} from "../../store/slices/authSlice";
import { LoginFormData, RegisterFormData } from "../../types/auth";

export const useAuth = () => {
  const dispatch = useAppDispatch();
  const {
    isAuthenticated,
    user,
    loading,
    error,
  } = useAppSelector((state) => state.auth);

  return {
    // ── Authentication State ─────────────────────────────────────────────────
    isAuthenticated,
    user,
    loading,
    error,

    // ── Auth Actions (Async Thunks) ───────────────────────────────────────────
    login: (credentials: LoginFormData) => dispatch(loginUser(credentials)),
    register: (userData: RegisterFormData) => dispatch(registerUser(userData)),
    verifyOTP: (data: { email: string; otp: string }) =>
      dispatch(verifyOTP(data)),
    logout: () => dispatch(logoutUser()),
    clearAuth: () => dispatch(clearAuth()),
  };
};
