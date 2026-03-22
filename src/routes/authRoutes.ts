import { lazy } from "react";

// Auth flow page components (OTP, Email Verification, etc.)
const OTPVerification = lazy(
  () => import("../pages/OTPVerification/OTPVerification"),
);


export const authRoutes = [
  {
    path: "/otp-verification",
    component: OTPVerification,
  },
];
