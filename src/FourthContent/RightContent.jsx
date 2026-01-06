import image from "../assets/images/img3.JPG";

export default function RightContent() {
  return (
    <div className="w-full md:w-1/2 rounded-2xl overflow-hidden order-1 md:order-2">
      <img
        src={image}
        alt="Right content image"
        className="w-full h-auto object-cover"
      />
    </div>
  );
}
