/**
 * Auth Types
 * Định nghĩa các kiểu dữ liệu cho Auth
 */

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthUser {
  id?: string;
  email?: string;
  fullName?: string;
}

export interface AuthState {
  // Authentication
  isAuthenticated: boolean;
  user: AuthUser | null;
  loading: boolean;
  error: string | null;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken?: string;
  user: AuthUser;
}

export interface RegisterResponse {
  message: string;
  email: string;
}

export interface VerifyOTPResponse {
  accessToken: string;
  refreshToken?: string;
  user: AuthUser;
}
