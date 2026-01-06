export default function LeftContent() {
  return (
    <div className="flex gap-2 md:gap-10 text-white font-medium text-sm md:text-base overflow-x-auto w-full md:w-auto items-center no-scrollbar">
      <a className="font-bold text-lg cursor-pointer shrink-0">Prime Video</a>
      <a className="cursor-pointer hover:text-gray-300 shrink-0 hidden md:flex">
        Home
      </a>
      <a className="cursor-pointer hover:text-gray-300 shrink-0 hidden md:flex">
        Movies
      </a>
      <a className="cursor-pointer hover:text-gray-300 shrink-0 hidden md:flex">
        TV shows
      </a>
      <div className="bg-transparent hover:bg-white p-3 text-white border-none outline-none cursor-pointer hover:text-black hover:rounded-lg shrink-0 md:hidden display-block">
        <label for="menu">Menu</label>
        {/*<select name="links" id="link-select">
          <option value="Home" className="text-black">
            Home
          </option>
          <option value="Movies" className="text-black">
            Movies
          </option>
          <option value="TV Shows" className="text-black">
            TV Shows
          </option>
        </select>*/}
      </div>
    </div>
  );
}
