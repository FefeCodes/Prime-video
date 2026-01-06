export default function LeftContent() {
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 md:pl-8 text-center md:text-left order-2 md:order-1 px-4 md:px-14">
      <h2 className="text-2xl md:text-3xl font-bold">Download and go</h2>
      <p className="text-base md:text-lg font-medium text-gray-300 text-start">
        Watch offline on the Prime Video app when you download title to your
        iPhone, iPad, Tablet, or Android device.
      </p>
      <div className="flex justify-center md:justify-start">
        <button className="w-full md:w-fit bg-white text-black px-6 py-3 rounded-lg text-lg font-semibold cursor-pointer hover:bg-gray-200 transition">
          Start your free trial
        </button>
      </div>
    </div>
  );
}
