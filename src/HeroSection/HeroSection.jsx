import LeftHeroSection from "./LeftHeroSection";
import RightHeroSection from "./RightHeroSection";

export default function HeroSection() {
  return (
    <div className="h-auto md:h-4/5 flex flex-col-reverse md:flex-row justify-between items-center py-8 md:py-2 pl-10 gap-8 md:gap-0">
      <LeftHeroSection />
      <RightHeroSection />
    </div>
  );
}
