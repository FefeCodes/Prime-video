export default function LeftHeroSection() {
  return (
    <div class="w-1/2 flex flex-col gap-8 pl-8">
      <h1 class="text-5xl font-bold">Welcome to Prime Video</h1>
      <p class="text-xl font-medium">
        Enjoy exclusive Amazon Originals as well as popular movies and TV shows
        for NGN 2,300/month. Watch now, cancel anytime.
      </p>
      <div class="flex flex-col gap-4">
        <button class="w-1/2 bg-white text-black px-8 py-4 rounded-lg text-xl font-semibold">
          Prime Video Member? Sign in
        </button>
        <div class="flex flex-row items-center gap-4 w-1/2">
          <hr class="w-full" />
          <p>or</p>
          <hr class="w-full" />
        </div>
        <button class="w-1/2 bg-white text-black px-8 py-4 rounded-lg text-xl font-semibold">
          Start your 7-day free trial*
        </button>
      </div>

      <p class="text-lg font-regular">*Cancel your trial at any time</p>
    </div>
  );
}
