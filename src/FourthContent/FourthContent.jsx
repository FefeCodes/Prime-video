import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function FourthContent() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-8 md:py-12 pl-10 gap-8 md:gap-0">
      <LeftContent />
      <RightContent />
    </div>
  );
}
