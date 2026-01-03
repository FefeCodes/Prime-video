import FirstCircle from "./FirstCircle";
import SecondCircle from "./SecondCircle";
import ThirdCircle from "./ThirdCircle";

export default function ThirdContent() {
  return (
    <div class="flex flex-row justify-between items-start gap-6 px-8 py-4 mt-2">
      <FirstCircle />
      <SecondCircle />
      <ThirdCircle />
    </div>
  );
}
