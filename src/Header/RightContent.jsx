import { FaSearch } from "react-icons/fa";
import { FaGripHorizontal } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export default function RightContent() {
  return (
    <div className="flex gap-4 items-center text-medium font-medium">
      <FaSearch className="text-xl" />
      <div>
        <select name="language" id="language-select">
          <option value="volvo">EN</option>
          <option value="saab">FRE</option>
        </select>
      </div>
      <FaGripHorizontal className="text-2xl" />
      <FaUserCircle className="text-2xl text-blue-300" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer text-lg font-medium">
        Join Prime
      </button>
    </div>
  );
}
