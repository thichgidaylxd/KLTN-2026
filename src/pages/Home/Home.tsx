import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/layout/HeroSection";


export function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with Navbar overlay */}
      <div className="relative">
        <Navbar />
        <HeroSection />
      </div>

    </div>
  );
}

export default HomePage;
