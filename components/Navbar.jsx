"use client";

import Image from "next/image";
// import logo from "/logo/logo.png";
import logo from "../public/logo/logo.png";
import Link from "next/link";
import { PiToggleLeftFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between md:justify-between py-4 px-14 inter bg-white border border-[border: 1px solid border-image-source: linear-gradient(90.36deg, #FFFFFF 2.61%, rgba(255, 255, 255, 0.67) 101.77%)]">
      <div className="hidden md:flex">
        <Image src={logo} alt="Logo" height={63} width={156} />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-2 font-medium text-base">
        <Link href={"/"} className="text-primary">
          Home
        </Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/"}>Course</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-center md:justify-center gap-3 md:gap-9">
        <PiToggleLeftFill className="w-16 h-8 text-primary-light" />
        <button className="py-2 px-8 rounded-md font-semibold text-xl text-primary border border-primary transition-all ease-in-out duration-300 hover:bg-primary hover:text-white">
          Join
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
