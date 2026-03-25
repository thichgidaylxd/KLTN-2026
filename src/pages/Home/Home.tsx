import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { IntroSection } from "./sections/IntroSection";

import { ServicesSection } from "./sections/ServicesSection";
import { ContactSection } from "./sections/ContactSection";
import CornIntro from "../../assets/Corn-intro.png";

export function HomePage() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      <div className="relative pt-[80px]">
        <div className="relative">
          <HeroSection />
        </div>

        <img
          src={CornIntro}
          alt="Corn field"
          className="absolute z-20 pointer-events-none"
          style={{
            bottom: "-5%",
            left: "493px",
            width: "313px",
            height: "359px",
            objectFit: "cover",
            filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.25))",
          }}
        />
      </div>

      <div className="relative bg-white">
        <IntroSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </div>
  );
}

export default HomePage;
