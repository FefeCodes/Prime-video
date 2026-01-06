import image from "../assets/images/picture1.png";

export default function FirstCircle() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full md:w-3/10 text-center">
      <img className="w-3/4 md:w-3/5" src={image} alt="Watch anywhere" />
      <h3 className="text-xl md:text-2xl font-semibold">Watch anywhere</h3>
      <p className="text-sm md:text-base text-start font-medium text-gray-300">
        Enjoy from the web or with the prime video app on your phone, tablet, or
        select Smart TVs - on up to 3 devices at once.
      </p>
    </div>
  );
}
