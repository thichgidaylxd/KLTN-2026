import { lazy } from "react";

// Private page components (yêu cầu đăng nhập)
const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));

/**
 * Private Routes - Yêu cầu đăng nhập
 * Chỉ người dùng đã xác thực mới có thể truy cập
 * Nếu chưa login thì sẽ bị redirect về trang chủ
 */
export const privateRoutes = [
    {
        path: "/dashboard",
        component: Dashboard,
    },
];
