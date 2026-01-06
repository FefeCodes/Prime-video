import image from "../assets/images/picture2.png";

export default function SecondCircle() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full md:w-3/10 text-center">
      <img className="w-3/4 md:w-3/5" src={image} alt="X-Ray for more" />
      <h3 className="text-xl md:text-2xl font-semibold">X-Ray for more</h3>
      <p className="text-sm md:text-base text-start font-medium text-gray-300">
        Use X-Ray for Movies and TV to identify actors and songs, explore actor
        bios, view trivia, and more.
      </p>
    </div>
  );
}
