/**
 * Auth Service
 * Xử lý tất cả API calls liên quan đến Authentication
 * Hỗ trợ mock data nếu API thực tế thất bại / chưa có
 */

import axiosInstance from "../config/axios";
import {
  LoginFormData,
  RegisterFormData,
  LoginResponse,
  RegisterResponse,
  VerifyOTPResponse,
} from "../types/auth";

const AUTH_ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  VERIFY_OTP: "/auth/verify-otp",
  LOGOUT: "/auth/logout",
  REFRESH_TOKEN: "/auth/refresh-token",
} as const;

const mockDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockUser = {
  id: "mock-user-1",
  email: "example@gmail.com",
  fullName: "Nông Dân Chuyên Nghiệp",
};

/**
 * Đăng nhập
 */
export const login = async (credentials: LoginFormData): Promise<LoginResponse> => {
  try {
    const response = await axiosInstance.post<LoginResponse>(
      AUTH_ENDPOINTS.LOGIN,
      credentials,
    );
    if (response.data.accessToken) {
      localStorage.setItem("accessToken", response.data.accessToken);
      if (response.data.refreshToken) {
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }
    }
    return response.data;
  } catch (error) {
    console.warn("API login thất bại, sử dụng mock data...");
    await mockDelay(1000); // Giả lập network delay
    if (credentials.email && credentials.password) {
      localStorage.setItem("accessToken", "mock-access-token-123");
      return {
        accessToken: "mock-access-token-123",
        refreshToken: "mock-refresh-token-456",
        user: { ...mockUser, email: credentials.email },
      };
    }
    throw new Error("Email hoặc mật khẩu không đúng.");
  }
};

/**
 * Đăng ký
 */
export const register = async (
  userData: RegisterFormData,
): Promise<RegisterResponse> => {
  try {
    const response = await axiosInstance.post<RegisterResponse>(
      AUTH_ENDPOINTS.REGISTER,
      userData,
    );
    return response.data;
  } catch (error) {
    console.warn("API register thất bại, sử dụng mock data...");
    await mockDelay(1000);
    return {
      message: "Đăng ký thành công, vui lòng kiểm tra email để nhận OTP.",
      email: userData.email,
    };
  }
};

/**
 * Xác thực OTP
 */
export const verifyOTP = async (data: {
  email: string;
  otp: string;
}): Promise<VerifyOTPResponse> => {
  try {
    const response = await axiosInstance.post<VerifyOTPResponse>(
      AUTH_ENDPOINTS.VERIFY_OTP,
      data,
    );
    if (response.data.accessToken) {
      localStorage.setItem("accessToken", response.data.accessToken);
      if (response.data.refreshToken) {
        localStorage.setItem("refreshToken", response.data.refreshToken);
      }
    }
    return response.data;
  } catch (error) {
    console.warn("API verify OTP thất bại, sử dụng mock data...");
    await mockDelay(1000);
    if (data.otp.length === 6) {
      localStorage.setItem("accessToken", "mock-access-token-123");
      return {
        accessToken: "mock-access-token-123",
        refreshToken: "mock-refresh-token-456",
        user: { ...mockUser, email: data.email },
      };
    }
    throw new Error("Mã OTP không hợp lệ.");
  }
};

/**
 * Đăng xuất
 */
export const logout = async (): Promise<void> => {
  try {
    await axiosInstance.post(AUTH_ENDPOINTS.LOGOUT);
  } catch (error) {
    console.warn("API logout thất bại, dọn dẹp mock data...");
  } finally {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
};

/**
 * Refresh token
 */
export const refreshToken = async (): Promise<{ accessToken: string }> => {
  try {
    const token = localStorage.getItem("refreshToken");
    const response = await axiosInstance.post<{ accessToken: string }>(
      AUTH_ENDPOINTS.REFRESH_TOKEN,
      { refreshToken: token },
    );
    if (response.data.accessToken) {
      localStorage.setItem("accessToken", response.data.accessToken);
    }
    return response.data;
  } catch (error) {
    console.warn("API refresh token thất bại, phát sinh mock data...");
    await mockDelay(500);
    localStorage.setItem("accessToken", "new-mock-access-token-789");
    return { accessToken: "new-mock-access-token-789" };
  }
};
