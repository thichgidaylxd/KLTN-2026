import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { IntroSection } from "./sections/IntroSection";
import { FarmAISection } from "./sections/FarmAISection";
import { ServicesSection } from "./sections/ServicesSection";
import { ContactSection } from "./sections/ContactSection";

export function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>
      <IntroSection />
      <FarmAISection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}

export default HomePage;
