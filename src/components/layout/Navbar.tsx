import { useEffect, useState } from "react";
import { ChevronDownIcon, ArrowUpRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LogoBrowser from "../../assets/Logo-browser.png";
import CornBackground from "../../assets/Corn-Background.png";

const navItems = ["Trang Chủ", "Dịch vụ", "Tin tức", "Triển khai", "Kế Hoạch"];

interface NavbarProps {
  hideCreateButton?: boolean;
  hideDivider?: boolean;
  backgroundImage?: string;
  hideLoginButton?: boolean;
  hideNavBackground?: boolean;
}

const spinStyle = `
  @keyframes logoSpin {
    0%   { transform: rotate(0deg) scale(0.8); opacity: 0; }
    30%  { opacity: 1; }
    100% { transform: rotate(720deg) scale(1); opacity: 1; }
  }
`;

export function Navbar({
  hideCreateButton = false,
  hideDivider = false,
  backgroundImage = CornBackground,
  hideLoginButton = false,
  hideNavBackground = false,
}: NavbarProps) {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Scroll: thêm background mờ khi cuộn xuống
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>{spinStyle}</style>
      <nav
        className={`fixed top-0 left-0 w-full transition-all duration-500 bg-cover bg-fixed bg-top ${
          scrolled ? "z-50 bg-white shadow-lg" : "z-50"
        }`}
        style={{
          backgroundImage:
            scrolled || !backgroundImage || hideNavBackground
              ? "none"
              : `url(${backgroundImage})`,
        }}
        aria-label="Main navigation"
      >
        {/* Nav content */}
        <div className="relative flex items-center justify-between px-[78px] h-[80px]">
          {/* Logo — slide down + fade */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
            className={`flex items-center gap-1 shrink-0 transition-all duration-[700ms] ease-out
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <img
              src={LogoBrowser}
              alt="FamerAI corn logo"
              className={`h-[50px] w-auto object-contain transition-all duration-[10ms] ease-out
              ${mounted ? "animate-logo-spin" : ""}`}
              style={{
                animation: mounted
                  ? "logoSpin 1s ease-in-out 0.1s 1 forwards"
                  : "none",
              }}
            />
            <span
              className={`font-prompt text-[38px] font-extrabold leading-none transition-colors duration-500 ${
                scrolled ? "text-dark-olive" : "text-light-yellow-2"
              }`}
            >
              FamerAI
            </span>
          </a>

          {/* Nav Links — stagger fade in */}
          <div className="flex items-center gap-[40px] xl:gap-[60px]">
            {navItems.map((item, i) => (
              <a
                key={item}
                href="#"
                className={`flex items-center gap-1.5 group transition-all duration-[600ms] ease-out
                ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"}`}
                style={{
                  transitionDelay: mounted ? `${150 + i * 80}ms` : "0ms",
                }}
              >
                <span
                  className={`font-roboto text-[16px] font-medium leading-none transition-colors duration-500 ${
                    scrolled
                      ? "text-dark-olive group-hover:text-cta-yellow"
                      : "text-light-yellow-1 group-hover:text-cta-yellow"
                  }`}
                >
                  {item}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 transition-colors duration-500 ${
                    scrolled
                      ? "text-dark-olive group-hover:text-cta-yellow"
                      : "text-light-yellow-1 group-hover:text-cta-yellow"
                  }`}
                />
              </a>
            ))}
          </div>

          {/* Buttons — slide down + fade, delayed */}
          <div
            className={`flex items-center gap-2.5 shrink-0 transition-all duration-[700ms] ease-out delay-[600ms]
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            {!hideLoginButton && (
              <button
                onClick={() => navigate("/login")}
                className={`flex items-center justify-center gap-1.5 h-12 px-6 rounded-xl border-2 transition-all duration-200 group ${
                  scrolled
                    ? "border-gray-300 bg-gray-50 hover:bg-gray-100"
                    : "border-light-yellow-1 backdrop-blur-[10px] bg-white/5 hover:bg-white/15"
                }`}
              >
                <span
                  className={`font-roboto text-[16px] font-semibold leading-none transition-colors duration-200 ${
                    scrolled
                      ? "text-gray-800 group-hover:text-dark-olive"
                      : "text-light-yellow-1 group-hover:text-white"
                  }`}
                >
                  Đăng nhập
                </span>
                <ArrowUpRightIcon
                  className={`w-4 h-4 transition-all duration-200 ${
                    scrolled
                      ? "text-gray-800 group-hover:text-dark-olive group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      : "text-light-yellow-1 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  }`}
                />
              </button>
            )}
            {!hideCreateButton && (
              <button
                onClick={() => navigate("/register")}
                className="relative flex items-center justify-center gap-1.5 h-12 px-6 rounded-xl bg-cta-yellow transition-all duration-300 overflow-hidden group"
              >
                {/* Lớp màu nền chạy từ trái sang phải */}
                <div
                  className="absolute inset-0 w-full h-full bg-yellow-300 translate-x-[-100%] 
               group-hover:translate-x-0 transition-transform duration-500 ease-in-out"
                />

                {/* Nội dung nằm trên lớp nền (z-10) */}
                <span className="relative z-10 font-roboto text-[16px] font-semibold leading-none text-dark-olive group-hover:text-black transition-colors duration-300">
                  Tạo Tài Khoản
                </span>

                <ArrowUpRightIcon
                  className="relative z-10 w-4 h-4 text-dark-olive group-hover:text-black 
               group-hover:translate-x-0.5 group-hover:-translate-y-0.5 
               transition-all duration-300"
                />
              </button>
            )}
          </div>
        </div>

        {/* Divider */}
        {!hideDivider && (
          <div
            className={`w-full h-px transition-all duration-[800ms] ease-out delay-[700ms]
    ${mounted && !scrolled ? "opacity-100" : "opacity-0"}`}
            style={{
              background:
                "linear-gradient(to right, transparent, #F5C842 30%, #7EC87A 70%, transparent)",
              boxShadow: "0 0 14px 3px rgba(200,210,80,0.45)",
            }}
          />
        )}

        {/* Bottom divider when scrolled */}
        {scrolled && <div className="w-full h-px bg-gray-200" />}
      </nav>
    </>
  );
}
