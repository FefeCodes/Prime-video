import image from "../assets/images/im1.png";

export default function FirstCircle() {
  return (
    <div class="flex flex-col justify-center items-center gap-4 w-3/10">
      <img class="w-3/5" src={image} alt="Watch anywhere" />
      <h3 class="text-3xl font-semibold">Watch anywhere</h3>
      <p class="text-lg font-medium">
        Enjoy from the web or with the prime video app on your phone, tablet, or
        select Smart TVs - on up to 3 devices at once.
      </p>
    </div>
  );
}
