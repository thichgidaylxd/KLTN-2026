export interface RegisterRequest {
  email: string;
  password: string;
  fullName?: string;
  phoneNumber?: string;
}

export interface OTPRequest {
  email: string;
  otp: string;
}

export interface OTPResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id: string;
    email: string;
    fullName?: string;
  };
}

export interface SendOTPResponse {
  success: boolean;
  message: string;
  expiresIn: number; // seconds
}
