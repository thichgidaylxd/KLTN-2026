/**
 * User Service
 * Xử lý tất cả API calls liên quan đến User
 * Hỗ trợ mock data cho UI chuyên nghiệp khi chưa có API
 */

import axiosInstance from "../config/axios";
import { User, UpdateUserPayload } from "../types/user";

const USER_ENDPOINTS = {
  GET_PROFILE: "/users/profile",
  UPDATE_PROFILE: "/users/profile",
  GET_ALL: "/users",
  GET_BY_ID: (id: string) => `/users/${id}`,
  DELETE: (id: string) => `/users/${id}`,
} as const;

const mockDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const mockUser: User = {
  id: "mock-user-1",
  email: "example@gmail.com",
  fullName: "Nông Dân Chuyên Nghiệp",
  firstName: "Nông",
  lastName: "Dân",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

const mockUsers: User[] = [
  mockUser,
  {
    id: "mock-user-2",
    email: "test2@famerai.vn",
    fullName: "Kỹ Sư Nông Nghiệp",
    firstName: "Kỹ Sư",
    lastName: "Nông Nghiệp",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

/**
 * Lấy thông tin user hiện tại
 */
export const getProfile = async (): Promise<User> => {
  try {
    const response = await axiosInstance.get<User>(USER_ENDPOINTS.GET_PROFILE);
    return response.data;
  } catch (error) {
    console.warn("API getProfile thất bại, trả về mock data...");
    await mockDelay(800);
    return mockUser;
  }
};

/**
 * Cập nhật thông tin user
 */
export const updateProfile = async (
  payload: UpdateUserPayload,
): Promise<User> => {
  try {
    const response = await axiosInstance.put<User>(
      USER_ENDPOINTS.UPDATE_PROFILE,
      payload,
    );
    return response.data;
  } catch (error) {
    console.warn("API updateProfile thất bại, trả về mock data mới...");
    await mockDelay(1000);
    return { ...mockUser, ...payload, updatedAt: new Date().toISOString() };
  }
};

/**
 * Lấy danh sách tất cả users (Admin)
 */
export const getAllUsers = async (): Promise<User[]> => {
  try {
    const response = await axiosInstance.get<User[]>(USER_ENDPOINTS.GET_ALL);
    return response.data;
  } catch (error) {
    console.warn("API getAllUsers thất bại, trả về mock data...");
    await mockDelay(1200);
    return mockUsers;
  }
};

/**
 * Lấy user theo ID
 */
export const getUserById = async (id: string): Promise<User> => {
  try {
    const response = await axiosInstance.get<User>(USER_ENDPOINTS.GET_BY_ID(id));
    return response.data;
  } catch (error) {
    console.warn("API getUserById thất bại, trả về mock data...");
    await mockDelay(600);
    return mockUsers.find((u) => u.id === id) || mockUser;
  }
};

/**
 * Xóa user (Admin)
 */
export const deleteUser = async (id: string): Promise<{ message: string }> => {
  try {
    const response = await axiosInstance.delete<{ message: string }>(
      USER_ENDPOINTS.DELETE(id),
    );
    return response.data;
  } catch (error) {
    console.warn("API deleteUser thất bại, giả lập xóa thành công...");
    await mockDelay(800);
    return { message: "Xóa người dùng thành công." };
  }
};
