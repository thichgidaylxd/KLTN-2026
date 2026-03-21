import { ChevronDownIcon, ArrowUpRightIcon } from "lucide-react";
import LogoBrowser from "../../assets/Logo-browser.png";

const navItems = ["Trang Chủ", "Dịch vụ", "Tin tức", "Triển khai", "Kế Hoạch"];
export function Navbar() {
  return (
    <nav
      className="absolute top-0 left-0 w-full z-30"
      aria-label="Main navigation"
    >
      {/* Nav content */}
      <div className="flex items-center justify-between px-[78px] h-[80px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-1 shrink-0">
          <img
            src={LogoBrowser}
            alt="FamerAI corn logo"
            className="h-[50px] w-auto object-contain"
          />

          <span className="font-prompt text-[38px] font-extrabold leading-none text-light-yellow-2">
            FamerAI
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="flex items-center gap-[40px] xl:gap-[60px]">
          {navItems.map((item) => (
            <a key={item} href="#" className="flex items-center gap-1.5 group">
              <span className="font-roboto text-[16px] font-semibold leading-none text-light-yellow-1 group-hover:text-cta-yellow transition-colors duration-200">
                {item}
              </span>
              <ChevronDownIcon className="w-5 h-5 text-light-yellow-1 group-hover:text-cta-yellow transition-colors duration-200" />
            </a>
          ))}
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3 shrink-0">
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

      {/* Subtle divider line */}
      <div className="w-full h-px bg-white/20" />
    </nav>
  );
}
