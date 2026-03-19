import axiosInstance from '../config/axios';
import { User } from '../types/user';

export const userService = {
  getUser: async (id: string): Promise<User> => {
    try {
      const response = await axiosInstance.get<User>(`/users/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  getAllUsers: async (): Promise<User[]> => {
    try {
      const response = await axiosInstance.get<User[]>('/users');
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  updateUser: async (id: string, data: Partial<User>): Promise<User> => {
    try {
      const response = await axiosInstance.put<User>(`/users/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (id: string): Promise<void> => {
    try {
      await axiosInstance.delete(`/users/${id}`);
    } catch (error) {
      throw error;
    }
  },
};
