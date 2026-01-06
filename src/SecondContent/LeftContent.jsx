import image from "../assets/images/img2.JPG";

export default function LeftContent() {
  return (
    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden">
      <img
        src={image}
        alt="left content image"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
