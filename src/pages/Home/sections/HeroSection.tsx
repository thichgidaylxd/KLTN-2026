import { ArrowUpRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import CornBackground from "../../../assets/Corn-Background.png";
import Water from "../../../assets/Water.png";
import LogoIntro from "../../../assets/Logo-intro.png";
import paddyintro from "../../../assets/paddy-intro.png";

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  // Trigger entrance animations after mount
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh+100px)] pb-0">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={CornBackground}
          className={`w-full h-full object-cover transition-all duration-[1800ms] ease-out ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full">
        {/* Main Hero Text Block */}
        <div className="absolute left-[93px] top-[194px]">
          <div className="flex items-start">
            {/* "AI" text */}
            <div className="relative">
              <span
                className={`font-playfair text-[280px] font-semibold leading-none text-light-yellow-2 block mr-[30px] mt-[28px]
                  transition-all duration-[900ms] ease-out delay-[200ms]
                  ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"}`}
              >
                AI
              </span>
              {/* Water drop */}
              <img
                src={Water}
                alt="Corn drop"
                className={`absolute top-[2px] left-[208px] w-[41px] h-[60px] object-contain
                  transition-all duration-[700ms] ease-out delay-[900ms]
                  ${mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-6"}`}
              />
            </div>

            {/* Vertical line */}
            <div
              className={`w-[1px] bg-white/30  mt-[28px] mx-[-24px] transition-all duration-[600ms] ease-out delay-[400ms]
                ${mounted ? "h-[327px] opacity-100" : "h-0 opacity-0"}`}
            />

            {/* MÙA VỤ / KHỞI SẮC */}
            <div className="mt-[67px] ml-[40px] overflow-hidden">
              <h1
                className={`font-playfair text-[100px] font-semibold leading-none text-light-yellow-3
                  transition-all duration-[800ms] ease-out delay-[500ms]
                  ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                MÙA VỤ
              </h1>
              <h1
                className={`font-playfair text-[100px] font-semibold leading-none text-light-yellow-3 mt-6
                  transition-all duration-[800ms] ease-out delay-[650ms]
                  ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              >
                KHỞI SẮC
              </h1>
            </div>
          </div>
        </div>

        {/* Seedling Icon */}
        {/* CTA Button */}
        <a
          href="#"
          className={`absolute left-[93px] top-[610px] flex items-center justify-center gap-2 w-[268px] h-[64px] rounded-2xl bg-cta-yellow hover:bg-yellow-300 group
            transition-all duration-[700ms] ease-out delay-[500ms]
            ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <span className="font-roboto text-[18px] font-medium text-black">
            Tạo mùa vụ ngay
          </span>
          <ArrowUpRightIcon className="w-6 h-6 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </a>

        {/* Seedling — mọc từ button lên */}
        <img
          src={paddyintro}
          alt="Seedling"
          className="absolute left-[307px] top-[565px] w-12 h-12"
          style={{
            transformOrigin: "bottom center",
            transform: mounted
              ? "scaleY(1) translateY(0)"
              : "scaleY(0) translateY(100%)",
            opacity: mounted ? 1 : 0,
            transition:
              "transform 0.8s ease-out 1s, opacity 0.4s ease-out 1.2s",
            zIndex: -1,
          }}
        />

        {/* Glassmorphism Card */}
        <div
          className={`absolute right-[121px] top-[200px] w-[323px] h-[451px] rounded-[40px] overflow-hidden backdrop-blur-[8px]
            transition-all duration-[1000ms] ease-out delay-[600ms]
            ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"}`}
          style={{
            background:
              "linear-gradient(0deg, rgba(236, 240, 164, 0.4) 0%, rgba(220, 218, 173, 0.4) 100%)",
          }}
        >
          <img
            src={LogoIntro}
            alt="Corn close-up"
            className="absolute left-[37px] top-[47px] w-[249px] h-[212px] object-cover"
          />
          <div className="absolute left-[35px] top-[305px] w-[254px] h-px bg-white/40" />
          <p className="absolute left-[60px] top-[319px] w-[203px] font-playfair text-[40px] font-normal leading-[40px] text-center text-light-yellow-3">
            Nông dân vươn mình
          </p>
        </div>
      </div>

      {/* Divider line at bottom */}
      <div className="absolute left-[2px] top-[710px] w-full h-px bg-white/40" />
    </section>
  );
}
