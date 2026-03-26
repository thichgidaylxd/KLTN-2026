import { useEffect, useState } from "react";
import { LoginFormData } from "../../types/auth";
import { useNavigate } from "react-router-dom";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Navbar } from "../../components/layout/Navbar";
import { useAuth } from "../../components/hooks/useAuth";
import LoginBackground from "../../assets/Login-Background.png";
import LogoBrowser from "../../assets/Logo-browser.png";

const spinStyle = `
  @keyframes logoSpin {
    0%   { transform: rotate(0deg) scale(0.8); opacity: 0; }
    30%  { opacity: 1; }
    100% { transform: rotate(720deg) scale(1); opacity: 1; }
  }
`;

export default function Login() {
  const navigate = useNavigate();
  const { login, loading, error, isAuthenticated } = useAuth();
  
  const [mounted, setMounted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const toggleShowPassword = () => setShowPassword((prev) => !prev);
  const updateLoginField = (field: "email" | "password", value: string) => {
    setLoginForm((prev) => ({ ...prev, [field]: value }));
  };
  const resetLoginForm = () => {
    setLoginForm({ email: "", password: "" });
  };

  // Trigger animation on mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => {
      clearTimeout(t);
      setMounted(false);
    };
  }, [setMounted]);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    updateLoginField(name as "email" | "password", value);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(loginForm);
      resetLoginForm();
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  return (
    <>
      <style>{spinStyle}</style>
      {/* Full-screen background wrapper */}
      <div
        className="fixed inset-0"
        style={{
          backgroundImage: `url(${LoginBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          zIndex: 0,
        }}
      >
        {/* Blur Overlay */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />
      </div>

      {/* Navbar */}
      <Navbar
        hideCreateButton={false}
        hideDivider={true}
        backgroundImage=""
        hideLoginButton={true}
      />

      <div
        className="relative min-h-screen flex items-center justify-center overflow-y-auto pt-[80px]"
        style={{ zIndex: 10 }}
      >
        {/* Login Form Container - Modal */}
        <div
          className={`relative w-full max-w-[450px] px-12 py-7 transition-all duration-700 ease-out z-20 flex flex-col justify-center bg-white rounded-3xl shadow-2xl
          ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        >
          {/* Logo + Brand Name */}
          <div
            className={`flex items-center justify-center gap-2 mb-5 transition-all duration-[700ms] ease-out
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <img
              src={LogoBrowser}
              alt="FamerAI corn logo"
              className={`h-[45px] w-auto object-contain transition-all duration-[10ms] ease-out
              ${mounted ? "animate-logo-spin" : ""}`}
              style={{
                animation: mounted
                  ? "logoSpin 1s ease-in-out 0.1s 1 forwards"
                  : "none",
              }}
            />
            <span
              className="font-prompt text-[28px] font-extrabold leading-none"
              style={{ color: "#5C5E33" }}
            >
              FamerAI
            </span>
          </div>

          {/* Heading */}
          <div
            className={`mb-5 text-center transition-all duration-[700ms] ease-out delay-100
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <h1 className="font-prompt text-[20px] font-bold text-gray-800 mb-0">
              Chào Mừng Bạn Trở Lại!
            </h1>
            <p className="font-roboto text-[13px] text-gray-600 mt-1">
              Tạo trang trại thông minh với công nghệ AI của FamerAI
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-3.5">
            {/* Email */}
            <div
              className={`transition-all duration-[700ms] ease-out delay-150
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              <label className="block font-roboto text-[13px] font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={loginForm.email}
                onChange={handleChange}
                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg
                focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-all duration-200
                font-roboto text-[13px] placeholder:text-gray-400 bg-gray-50/50"
              />
            </div>

            {/* Password */}
            <div
              className={`transition-all duration-[700ms] ease-out delay-200
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
            >
              <label className="block font-roboto text-[13px] font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="••••••••••"
                  value={loginForm.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg
                  focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-300 transition-all duration-200
                  font-roboto text-[13px] placeholder:text-gray-400 bg-gray-50/50"
                />
                <button
                  type="button"
                  onClick={toggleShowPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOffIcon className="w-4 h-4" />
                  ) : (
                    <EyeIcon className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div
              className={`text-right transition-all duration-[700ms] ease-out delay-250
              ${mounted ? "opacity-100" : "opacity-0"}`}
            >
              <a
                href="#"
                className="font-roboto text-[12px] text-dark-olive hover:text-dark-olive/80 transition-colors duration-200"
              >
                Quên mật khẩu?
              </a>
            </div>

            {/* Error Message */}
            {error && (
              <div
                className={`transition-all duration-300 rounded-lg
                ${mounted ? "opacity-100" : "opacity-0"}`}
              >
                <p className="font-roboto text-[13px] text-red-600 bg-red-50 p-3 rounded-lg">
                  {error}
                </p>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2.5 mt-3 rounded-lg bg-dark-olive hover:bg-dark-olive/90 disabled:bg-gray-400
              transition-all duration-300 font-roboto text-[14px] font-semibold
              text-white relative overflow-hidden group
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                transitionDelay: mounted ? "300ms" : "0ms",
              }}
            >
              <div
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent
              translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
              />
              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? "Đang đăng nhập..." : "Đăng nhập"}
              </span>
            </button>

            {/* Divider */}
            <div
              className={`flex items-center gap-3 my-3 transition-all duration-[700ms] ease-out delay-350
              ${mounted ? "opacity-100" : "opacity-0"}`}
            >
              <div className="flex-1 h-px bg-gray-300" />
              <span className="font-roboto text-[13px] text-gray-600">
                Hoặc
              </span>
              <div className="flex-1 h-px bg-gray-300" />
            </div>

            {/* Google Sign In */}
            <button
              type="button"
              className={`w-full py-2.5 rounded-lg border border-gray-300
              hover:border-gray-400 hover:bg-gray-50 transition-all duration-300
              flex items-center justify-center gap-2
              ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              style={{
                transitionDelay: mounted ? "400ms" : "0ms",
              }}
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="font-roboto text-[13px] font-medium text-gray-700">
                Đăng nhập bằng Google
              </span>
            </button>

            {/* Register Link */}
            <div
              className={`text-center mt-2 transition-all duration-[700ms] ease-out delay-450
              ${mounted ? "opacity-100" : "opacity-0"}`}
            >
              <span className="font-roboto text-[13px] text-gray-600">
                Chưa có tài khoản?{" "}
                <a
                  href="/register"
                  className="font-semibold text-gray-800 hover:text-dark-olive transition-colors duration-200"
                >
                  Đăng ký
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
