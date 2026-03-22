import { Routes, Route } from "react-router-dom";
import { Suspense} from "react";
import Home from "../pages/Home/Home";
import OTPVerification from "../pages/OTPVerification/OTPVerification";

const routes = [
  { path: "/", component: Home },
  { path: "/otp-verification", component: OTPVerification },
];

export default function Router() {
  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <route.component />
            </Suspense>
          }
        />
      ))}
    </Routes>
  );
}
