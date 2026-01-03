import LeftHeroSection from "./LeftHeroSection";
import RightHeroSection from "./RightHeroSection";

export default function HeroSection() {
  return (
    <div className="h-4/5 flex flex-row justify-between items-center px-4 py-2">
      <LeftHeroSection />
      <RightHeroSection />
    </div>
  );
}
