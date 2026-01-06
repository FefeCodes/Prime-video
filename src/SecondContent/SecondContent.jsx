import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

export default function SecondContent() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center py-8 md:py-12 gap-8 md:gap-0">
      <LeftContent />
      <RightContent />
    </div>
  );
}
