export default function RightContent() {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 md:pr-8 md:pl-12 text-start md:text-left px-4 md:px-14">
      <h2 className="text-2xl md:text-3xl font-bold">Great Entertainment</h2>
      <p className="text-base md:text-lg font-medium text-gray-300">
        Watch Tom Clancy's Jack Ryan, award-winning Amazon Originals such as The
        Boys and The Marvelous Mrs. Maisel, as well as popular movies and TV
        shows, with all titles available to download
      </p>
      <div className="flex justify-center md:justify-start">
        <button className="w-full md:w-fit bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold cursor-pointer hover:bg-gray-200 transition">
          Start your free trial
        </button>
      </div>
    </div>
  );
}
