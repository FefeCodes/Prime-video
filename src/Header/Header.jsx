import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function Header() {
  return (
    <div className="flex justify-center sticky top-0 z-50">
      <div className="w-19/20 flex flex-row md:flex-row justify-between items-center h-18 rounded-2xl px-4 md:px-14 py-3 gap-4 md:gap-0 bg-black">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
}
