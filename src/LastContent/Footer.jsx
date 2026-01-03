import FooterImage from "../assets/images/logo.png";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 bg-gray-900 py-4 text-xs">
      <img className="w-1/12" src={FooterImage} alt="footer logo" />
      <div className="flex flex-row justify-center items-center gap-8 mb-1 text-blue-400">
        <a>Terms and Privacy Notice</a>
        <a>Send us feedback</a>
        <a>Help</a>
      </div>
      <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
    </div>
  );
}
