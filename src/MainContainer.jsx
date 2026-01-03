import Footer from "./LastContent/Footer";
import FourthContent from "./FourthContent/FourthContent";
import Header from "./Header/Header";
import HeroSection from "./HeroSection/HeroSection";
import SecondContent from "./SecondContent/SecondContent";
import ThirdContent from "./ThirdContent/ThirdContent";

export default function MainContainer() {
  return (
    <div class="bg-black text-white flex flex-col gap-2">
      <Header />
      <HeroSection />
      <SecondContent />
      <ThirdContent />
      <FourthContent />
      <Footer />
    </div>
  );
}
