import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function Header() {
  return (
    <div class="flex flex-row justify-between items-center px-14 py-3">
      <LeftContent />
      <RightContent />
    </div>
  );
}
