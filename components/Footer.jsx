import Image from "next/image";
import footerLogo from "../public/svg/footerLogo.svg";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-4 py-10 bg-[#30A2FF] mt-8 my-20 inter">
      <div className="flex justify-between p-12 ">
        <div className="space-y-3">
          <Image
            src={footerLogo}
            alt="Footer Logo"
            className="w-auto h-auto object-cover"
          />
          <div className="space-y-3">
            <h3 className="text-[#FFFFFF] font-semibold text-base">
              Follow Us On
            </h3>
            <div className="flex gap-x-3">
              <AiFillFacebook
                size={24}
                className="text-[#FFFFFF] cursor-pointer"
              />
              <FaInstagram
                size={24}
                className="text-[#FFFFFF] cursor-pointer"
              />
              <FaWhatsapp size={24} className="text-[#FFFFFF] cursor-pointer" />
              <GrLinkedin size={24} className="text-[#FFFFFF] cursor-pointer" />
              <CiYoutube size={24} className="text-[#FFFFFF] cursor-pointer" />
            </div>
          </div>
        </div>

        <div>
          <div className="text-[#FFFFFF] space-y-1">
            <h3 className="font-bold text-xl mb-3">LINKS</h3>
            <p className="font-normal text-base">About Us</p>
            <p className="font-normal text-base">Terms of Use</p>
            <p className="font-normal text-base">Careers</p>
            <p className="font-normal text-base">Newsroom</p>
          </div>
        </div>
        <div>
          <div className="text-[#FFFFFF]">
            <h3 className="font-bold text-xl mb-3">Contact Us</h3>
            <p className="font-semibold text-base"> support@mcqgenius.com</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <button className="font-semibold text-lg bg-[#FFFFFF] text-[#30A2FF] px-10 py-3 rounded-md">
            Register
          </button>
          <button className="font-semibold text-lg bg-transparent text-[#FFFFFF] border border-[#FFFFFF] px-10 py-3 rounded-md">
            Log in
          </button>
        </div>
      </div>

      <hr className=" mx-auto border-[#FFFFFF]" />

      <div className="flex justify-between px-12 py-1 mt-2">
        <span className="font-normal text-sm text-[#FFFFFF]">
          ©2023, MCQ Genius. All Rights Reserved
        </span>
        <div>
          <span className="font-normal text-sm text-[#FFFFFF]">
            Terms & Condition |{" "}
          </span>
          <span className="font-normal text-sm text-[#FFFFFF]">
            Privacy & Policy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
