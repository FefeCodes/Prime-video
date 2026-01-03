import image from "../assets/images/picture2.png";

export default function SecondCircle() {
  return (
    <div class="flex flex-col justify-center items-center gap-4 w-3/10">
      <img className="w-3/5" src={image} alt="X-Ray for more" />
      <h3 className="text-2xl font-semibold">X-Ray for more</h3>
      <p className="text-medium font-medium">
        Use X-Ray for Movies and TV to identify actors and songs, explore actor
        bios, view trivia, and more.
      </p>
    </div>
  );
}
