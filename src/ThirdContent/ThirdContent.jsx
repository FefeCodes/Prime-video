import FirstCircle from "./FirstCircle";
import SecondCircle from "./SecondCircle";
import ThirdCircle from "./ThirdCircle";

export default function ThirdContent() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-6 px-4 md:px-8 py-12 mt-2 bg-black">
      <FirstCircle />
      <SecondCircle />
      <ThirdCircle />
    </div>
  );
}
