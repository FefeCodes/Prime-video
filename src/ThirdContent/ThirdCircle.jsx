import image from "../assets/images/picture3.png";

export default function ThirdCircle() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 w-3/10">
      <img className="w-3/5" src={image} alt="Data Saver" />
      <h3 className="text-2xl font-semibold">Data Saver</h3>
      <p className="text-medium font-medium">
        Control data usage while downloading and watching videos on select
        phones or tablets
      </p>
    </div>
  );
}
