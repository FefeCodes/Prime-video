import image from "../assets/images/picture1.png";

export default function FirstCircle() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-3/10">
      <img className="w-3/5" src={image} alt="Watch anywhere" />
      <h3 className="text-2xl font-semibold">Watch anywhere</h3>
      <p className="text-medium font-medium">
        Enjoy from the web or with the prime video app on your phone, tablet, or
        select Smart TVs - on up to 3 devices at once.
      </p>
    </div>
  );
}
