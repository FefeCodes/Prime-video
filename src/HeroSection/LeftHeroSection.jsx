export default function LeftHeroSection() {
  return (
    <div className="w-1/2 flex flex-col gap-6 pl-8">
      <h1 className="text-4xl font-bold">Welcome to Prime Video</h1>
      <p className="text-lg font-medium">
        Enjoy exclusive Amazon Originals as well as popular movies and TV shows
        for NGN 2,300/month. Watch now, cancel anytime.
      </p>
      <div className="flex flex-col gap-4">
        <button className="w-3/5 bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold">
          Prime Video Member? Sign in
        </button>
        <div className="flex flex-row items-center gap-2 w-1/2">
          <hr className="w-full" />
          <p>or</p>
          <hr className="w-full" />
        </div>
        <button className="w-3/5 bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold">
          Start your 7-day free trial*
        </button>
      </div>

      <p className="text-lg font-regular">*Cancel your trial at any time</p>
    </div>
  );
}
