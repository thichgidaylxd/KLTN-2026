import { ArrowUpRightIcon } from "lucide-react";
import CornBackground from "../../assets/Corn-Background.png";
import Water from "../../assets/Water.png";
import LogoIntro from "../../assets/Logo-intro.png";
import paddyintro from "../../assets/paddy-intro.png";
export function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh+100px)]">
      {/* Background vẫn clip bình thường */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={CornBackground} className="w-full h-full object-cover" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full">
        {/* Main Hero Text Block */}
        <div className="absolute left-[93px] top-[194px]">
          {/* AI + Vertical Line + MÙA VỤ / KHỞI SẮC */}
          <div className="flex items-start">
            {/* AI Text with corn drop */}
            <div className="relative">
              <span className="font-playfair text-[280px] font-semibold leading-none text-light-yellow-2 block mr-[30px]">
                AI
              </span>
              {/* Corn drop image positioned near the top of 'I' */}
              <img
                src={Water}
                alt="Corn drop"
                className="absolute top-[-2px] left-[208px] w-[41px] h-[60px] object-contain"
              />
            </div>

            {/* Vertical white line separator */}
            <div className="w-[2px] bg-white h-[327px] mt-[28px] mx-[-24px]  " />

            {/* MÙA VỤ / KHỞI SẮC */}
            <div className="mt-[67px] ml-[40px]">
              <h1 className="font-playfair text-[100px] font-semibold leading-none text-light-yellow-3">
                MÙA VỤ
              </h1>
              <h1 className="font-playfair text-[100px] font-semibold leading-none text-light-yellow-3 mt-2">
                KHỞI SẮC
              </h1>
            </div>
          </div>
        </div>

        {/* Seedling Icon */}
        <img
          src={paddyintro}
          alt="Seedling"
          className="absolute left-[307px] top-[565px] w-12 h-12"
        />

        {/* CTA Button */}
        <a
          href="#"
          className="absolute left-[93px] top-[610px] flex items-center justify-center gap-2 w-[268px] h-[64px] rounded-2xl bg-cta-yellow hover:bg-yellow-300 transition-colors duration-200 group"
        >
          <span className="font-roboto text-[18px] font-medium text-black">
            Tạo mùa vụ ngay
          </span>
          <ArrowUpRightIcon className="w-6 h-6 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
        </a>

        {/* Glassmorphism Card - Right Side */}
        <div
          className="absolute right-[121px] top-[253px] w-[323px] h-[451px] rounded-[40px] overflow-hidden backdrop-blur-[8px]"
          style={{
            background:
              "linear-gradient(0deg, rgba(236, 240, 164, 0.4) 0%, rgba(220, 218, 173, 0.4) 100%)",
          }}
        >
          {/* Corn Image */}
          <img
            src={LogoIntro}
            alt="Corn close-up"
            className="absolute left-[37px] top-[47px] w-[249px] h-[212px] object-cover"
          />

          {/* Divider Line */}
          <div className="absolute left-[35px] top-[305px] w-[254px] h-px bg-white/50" />

          {/* Text */}
          <p className="absolute left-[60px] top-[319px] w-[203px] font-playfair text-[40px] font-normal leading-[40px] text-center text-light-yellow-3">
            Nông dân vươn mình
          </p>
        </div>


      </div>
    </section>
  );
}
