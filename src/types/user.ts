export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
  role: 'admin' | 'user';
  createdAt?: string;
  updatedAt?: string;
}

export interface UserState {
  currentUser: User | null;
  loading: boolean;
  error: string | null;
}
