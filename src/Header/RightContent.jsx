import { FaSearch } from "react-icons/fa";
import { FaGripHorizontal } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

export default function RightContent() {
  return (
    <div className="flex gap-4 items-center text-sm md:text-base font-medium w-fit md:w-auto justify-end">
      <FaSearch className="text-lg md:text-xl cursor-pointer" />
      <div className="">
        <select
          name="language"
          id="language-select"
          className="bg-transparent text-white border-none outline-none cursor-pointer"
        >
          <option value="en" className="text-black">
            EN
          </option>
          <option value="fre" className="text-black">
            FRE
          </option>
        </select>
      </div>
      <FaGripHorizontal className="text-xl md:text-2xl cursor-pointer hidden md:flex" />
      <FaUserCircle className="text-3xl md:text-2xl text-blue-300 cursor-pointer" />
      <button className="bg-blue-600 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-md cursor-pointer text-sm md:text-lg font-medium hover:bg-blue-700 transition hidden md:flex">
        Join Prime
      </button>
    </div>
  );
}
