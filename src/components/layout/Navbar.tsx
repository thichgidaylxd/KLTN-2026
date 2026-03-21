import { useEffect, useState } from "react";
import { ChevronDownIcon, ArrowUpRightIcon } from "lucide-react";
import LogoBrowser from "../../assets/Logo-browser.png";

const navItems = ["Trang Chủ", "Dịch vụ", "Tin tức", "Triển khai", "Kế Hoạch"];

const spinStyle = `
  @keyframes logoSpin {
    0%   { transform: rotate(0deg) scale(0.8); opacity: 0; }
    30%  { opacity: 1; }
    100% { transform: rotate(720deg) scale(1); opacity: 1; }
  }
`;

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        className={`absolute top-0 left-0 w-full z-30 transition-all duration-500
          ${scrolled ? "backdrop-blur-md bg-black/30 shadow-lg" : ""}
        `}
        aria-label="Main navigation"
      >
        {/* Nav content */}
        <div className="flex items-center justify-between px-[78px] h-[80px]">

          {/* Logo — slide down + fade */}
          <a
            href="#"
            className={`flex items-center gap-1 shrink-0 transition-all duration-[700ms] ease-out
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <img
              src={LogoBrowser}
              alt="FamerAI corn logo"
              className={`h-[50px] w-auto object-contain transition-all duration-[10ms] ease-out
              ${mounted ? "animate-logo-spin" : ""}`}
              style={{
                animation: mounted ? "logoSpin 1s ease-in-out 0.1s 1 forwards" : "none",
              }}
            />
            <span className="font-prompt text-[38px] font-extrabold leading-none text-light-yellow-2">
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
                style={{ transitionDelay: mounted ? `${150 + i * 80}ms` : "0ms" }}
              >
                <span className="font-roboto text-[16px] font-semibold leading-none text-light-yellow-1 group-hover:text-cta-yellow transition-colors duration-200">
                  {item}
                </span>
                <ChevronDownIcon className="w-5 h-5 text-light-yellow-1 group-hover:text-cta-yellow transition-colors duration-200" />
              </a>
            ))}
          </div>

          {/* Buttons — slide down + fade, delayed */}
          <div
            className={`flex items-center gap-3 shrink-0 transition-all duration-[700ms] ease-out delay-[600ms]
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            <a
              href="#"
              className="flex items-center gap-1 px-5 py-2.5 rounded-2xl border-2 border-light-yellow-1 backdrop-blur-[10px] bg-white/0 hover:bg-white/10 transition-all duration-200"
            >
              <span className="font-roboto text-[18px] font-medium leading-none text-light-yellow-1">
                Đăng nhập
              </span>
              <ArrowUpRightIcon className="w-5 h-5 text-light-yellow-1" />
            </a>
            <a
              href="#"
              className="flex items-center gap-1 px-5 py-2.5 rounded-2xl bg-cta-yellow hover:bg-yellow-300 transition-colors duration-200"
            >
              <span className="font-roboto text-[18px] font-medium leading-none text-dark-olive">
                Tạo Tài Khoản
              </span>
              <ArrowUpRightIcon className="w-5 h-5 text-dark-olive" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`w-full h-px bg-white/20 transition-all duration-[800ms] ease-out delay-[700ms]
          ${mounted ? "opacity-100" : "opacity-0"}`}
        />
      </nav>
    </>
  );
}