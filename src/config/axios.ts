import axios, { AxiosInstance, AxiosError } from "axios";

/**
 * Axios Configuration
 * Cấu hình axios instance cho API calls
 */

const baseURL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

const axiosInstance: AxiosInstance = axios.create({
  baseURL,
  timeout: 30000, // 30 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Request Interceptor
 * Thêm Authorization token vào header của mỗi request
 */
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

/**
 * Response Interceptor
 * Xử lý errors và token refresh
 */
axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    // Handle 401 Unauthorized - Token expired
    if (error.response?.status === 401) {
      // Xóa token và redirect sang login page
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      window.location.href = "/register";
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
