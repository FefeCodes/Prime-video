import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function FourthContent() {
  return (
    <div class="flex flex-row justify-between items-center px-4 py-2">
      <LeftContent />
      <RightContent />
    </div>
  );
}
