import FooterImage from "../assets/images/logo.png";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 bg-gray-900 py-6 px-4 text-xs md:text-sm text-center">
      <img className="w-1/4 md:w-1/12" src={FooterImage} alt="footer logo" />
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-blue-400">
        <a className="cursor-pointer hover:underline">
          Terms and Privacy Notice
        </a>
        <a className="cursor-pointer hover:underline">Send us feedback</a>
        <a className="cursor-pointer hover:underline">Help</a>
      </div>
      <p className="text-gray-400">
        © 1996-2024, Amazon.com, Inc. or its affiliates
      </p>
    </div>
  );
}
