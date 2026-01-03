import image from "../assets/images/picture3.png";

export default function ThirdCircle() {
  return (
    <div class="flex flex-col justify-center items-center gap-4 w-3/10">
      <img class="w-3/5" src={image} alt="Data Saver" />
      <h3 class="text-3xl font-semibold">Data Saver</h3>
      <p class="text-lg font-medium">
        Control data usage while downloading and watching videos on select
        phones or tablets
      </p>
    </div>
  );
}
