import { lazy } from "react";

// Public page components
const Home = lazy(() => import("../pages/Home/Home"));
const Register = lazy(() => import("../pages/Register/Register"));
const Login = lazy(() => import("../pages/Login/Login"));
const About = lazy(() => import("../pages/About/About"));
/**
 * Public Routes - Không yêu cầu đăng nhập
 * Ai cũng có thể truy cập
 */
export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
  {
    path: "/about",
    component: About,
  },
];
