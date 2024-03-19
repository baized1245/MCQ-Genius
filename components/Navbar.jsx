"use client";

import Image from "next/image";
// import logo from "/logo/logo.png";
import logo from "../public/logo/logo.png";
import Link from "next/link";
import { PiToggleLeftFill } from "react-icons/pi";

const Navbar = () => {
  return (
    <nav className="max-w-7xl mx-auto flex items-center justify-between py-4 px-14 inter bg-[#FFFFFF] border border-[border: 1px solid border-image-source: linear-gradient(90.36deg, #FFFFFF 2.61%, rgba(255, 255, 255, 0.67) 101.77%)]">
      <div>
        <Image src={logo} alt="Logo" height={63} width={156} />
      </div>
      <div className="flex items-center justify-center gap-2 font-medium text-base">
        <Link href={"/"} className="text-[#0098FF]">
          Home
        </Link>
        <Link href={"/"}>About Us</Link>
        <Link href={"/"}>Course</Link>
        <Link href={"/"}>Blog</Link>
        <Link href={"/"}>Contact</Link>
      </div>
      <div className="flex items-center justify-center gap-9">
        <PiToggleLeftFill className="w-[68px] h-[32px] text-[#4AB6FF]" />
        <button className="py-2 px-8 rounded-md font-semibold text-xl text-[#0098FF] border border-[#0098FF]">
          Join
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
