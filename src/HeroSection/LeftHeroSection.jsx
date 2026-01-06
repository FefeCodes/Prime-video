export default function LeftHeroSection() {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-6 md:pl-8 text-start md:text-left px-4 md:px-14">
      <h1 className="text-3xl md:text-4xl font-bold leading-tight">
        Welcome to Prime Video
      </h1>
      <p className="text-base md:text-lg font-medium text-gray-300">
        Enjoy exclusive Amazon Originals as well as popular movies and TV shows
        for NGN 2,300/month. Watch now, cancel anytime.
      </p>
      <div className="flex flex-col gap-4 items-center md:items-start w-full">
        <button className="w-full md:w-3/5 bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold cursor-pointer hover:bg-gray-200 transition">
          Prime Video Member? Sign in
        </button>
        <div className="flex flex-row items-center gap-2 w-full md:w-3/5">
          <hr className="w-full border-white" />
          <p className="text-sm">or</p>
          <hr className="w-full border-white" />
        </div>
        <button className="w-full md:w-3/5 bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold cursor-pointer hover:bg-gray-200 transition">
          Start your 7-day free trial*
        </button>
      </div>

      <p className="text-sm md:text-lg font-regular text-white">
        *Cancel your trial at any time
      </p>
    </div>
  );
}
