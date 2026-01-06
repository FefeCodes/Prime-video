import image from "../assets/images/img1.JPG";

export default function RightHeroSection() {
  return (
    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden shadow-lg mt-0 md:mt-0">
      <img
        src={image}
        alt="hero section image"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
