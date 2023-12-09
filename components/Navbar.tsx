import { NAV } from "@/consts";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";

const NavBarItem = ({
  title,
  href,
}: {
  title: string;
  classprops?: any;
  href: string;
}) => (
  <Link href={href}>
    <li className={`mx-4 cursor-pointer`}>{title}</li>
  </Link>
);

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="w-full flex md:justify-between items-center p-4 pl-20">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        {/* <BsShieldFillCheck fontSize={21} className="text-white" /> */}
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            width={120}
            height={120}
            alt="total recall"
          />
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {NAV.map((item, index) => (
          <NavBarItem
            key={item.title + index}
            title={item.title}
            href={item.path}
          />
        ))}
      </ul>
      <ConnectButton />
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {NAV.map((item, index) => (
              <NavBarItem
                key={item.title + index}
                title={item.title}
                href={item.path}
                classprops="my-2 text-lg"
              />
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
