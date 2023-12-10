import Image from "next/image";
export const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-white text-left text-xs flex gap-2 justify-between, items-center">
        <Image src={"/logo.png"} width={40} height={40} alt="total recall" />
        <span>total recall</span>
      </p>
      <p className="text-white text-right text-xs">All rights reserved</p>
    </div>
  </div>
);
