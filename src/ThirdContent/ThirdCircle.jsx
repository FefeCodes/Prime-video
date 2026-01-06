import image from "../assets/images/picture3.png";

export default function ThirdCircle() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-full md:w-3/10 text-center">
      <img className="w-3/4 md:w-3/5" src={image} alt="Data Saver" />
      <h3 className="text-xl md:text-2xl font-semibold">Data Saver</h3>
      <p className="text-sm md:text-base text-start font-medium text-gray-300">
        Control data usage while downloading and watching videos on select
        phones or tablets
      </p>
    </div>
  );
}
