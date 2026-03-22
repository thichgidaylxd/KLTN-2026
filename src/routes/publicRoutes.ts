import { lazy } from "react";

const Home = lazy(() => import("../pages/Home/Home"));


export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },

];
