/**
 * User Types
 * Định nghĩa các kiểu dữ liệu cho User
 */

export interface User {
  id: string;
  email: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface UserState {
  users: User[];
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}

export interface UpdateUserPayload {
  firstName?: string;
  lastName?: string;
  fullName?: string;
  avatar?: string;
}
