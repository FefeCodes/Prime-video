import { FaSearch } from "react-icons/fa";
import { FaGripHorizontal } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export default function RightContent() {
  return (
    <div class="flex gap-4 items-center text-xl font-medium">
      <FaSearch class="text-xl" />
      <div>
        <select name="language" id="language-select">
          <option value="volvo">EN</option>
          <option value="saab">FRE</option>
        </select>
      </div>
      <FaGripHorizontal class="text-2xl" />
      <FaUserCircle class="text-4xl text-blue-300" />
      <button class="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer text-lg font-medium">
        Join Prime
      </button>
    </div>
  );
}
