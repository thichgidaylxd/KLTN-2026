import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { publicRoutes } from "./publicRoutes";
import { authRoutes } from "./authRoutes";
import { privateRoutes } from "./privateRoutes";
import PrivateRoute from "./PrivateRoute";

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      <p className="mt-4 text-gray-600">Loading...</p>
    </div>
  </div>
);

export default function Router() {
  // Lấy trạng thái xác thực từ Redux
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  return (
    <Routes>
      {/* Public Routes - Không yêu cầu đăng nhập */}
      {publicRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<LoadingFallback />}>
              {React.createElement(route.component)}
            </Suspense>
          }
        />
      ))}

      {/* Auth Routes - OTP, Email Verification, etc. */}
      {authRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<LoadingFallback />}>
              {React.createElement(route.component)}
            </Suspense>
          }
        />
      ))}

      {/* Private Routes - Yêu cầu đăng nhập */}
      {privateRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <PrivateRoute
              isAuthenticated={isAuthenticated}
              element={
                <Suspense fallback={<LoadingFallback />}>
                  {React.createElement(route.component)}
                </Suspense>
              }
            />
          }
        />
      ))}

      {/* 404 Not Found */}
      <Route
        path="*"
        element={
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <div className="text-center">
              <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-2xl text-gray-600 mb-4">Page not found</p>
              <p className="text-gray-500">Trang bạn tìm kiếm không tồn tại.</p>
            </div>
          </div>
        }
      />
    </Routes>
  );
}
