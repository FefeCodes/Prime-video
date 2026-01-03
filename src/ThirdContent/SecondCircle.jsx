import image from "../assets/images/im2.png";

export default function SecondCircle() {
  return (
    <div class="flex flex-col justify-center items-center gap-4 w-3/10">
      <img class="w-3/5" src={image} alt="X-Ray for more" />
      <h3 class="text-3xl font-semibold">X-Ray for more</h3>
      <p class="text-lg font-medium">
        Use X-Ray for Movies and TV to identify actors and songs, explore actor
        bios, view trivia, and more.
      </p>
    </div>
  );
}
