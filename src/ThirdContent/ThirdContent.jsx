import FirstCircle from "./FirstCircle";
import SecondCircle from "./SecondCircle";
import ThirdCircle from "./ThirdCircle";

export default function ThirdContent() {
  return (
    <div className=" w-fit flex flex-col md:flex-row justify-evenly items-start gap-12 md:gap-0 px-4 md:px-10 py-12 mt-2 bg-black">
      <FirstCircle />
      <SecondCircle />
      <ThirdCircle />
    </div>
  );
}
