import Image from "next/image";
import footerLogo from "../public/svg/footerlogo.svg";
import { AiFillFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { GrLinkedin } from "react-icons/gr";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-1 md:px-4 py-4 md:py-10 bg-primary mt-8 my-20 inter">
      <div className="grid grid-cols-2 gap-5 md:flex justify-between p-4 md:p-12 ">
        <div className="space-y-3">
          <Image
            src={footerLogo}
            alt="Footer Logo"
            className="w-auto h-auto object-cover"
          />
          <div className="space-y-3">
            <h3 className="text-white font-semibold text-base">Follow Us On</h3>
            <div className="flex gap-x-3">
              <AiFillFacebook size={24} className="text-white cursor-pointer" />
              <FaInstagram size={24} className="text-white cursor-pointer" />
              <FaWhatsapp size={24} className="text-white cursor-pointer" />
              <GrLinkedin size={24} className="text-white cursor-pointer" />
              <CiYoutube size={24} className="text-white cursor-pointer" />
            </div>
          </div>
        </div>

        <div>
          <div className="text-white space-y-1">
            <h3 className="font-bold text-xl mb-3">LINKS</h3>
            <p className="font-normal text-base">About Us</p>
            <p className="font-normal text-base">Terms of Use</p>
            <p className="font-normal text-base">Careers</p>
            <p className="font-normal text-base">Newsroom</p>
          </div>
        </div>
        <div>
          <div className="text-white">
            <h3 className="font-bold text-xl mb-3">Contact Us</h3>
            <p className="font-semibold text-base"> support@mcqgenius.com</p>
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <button className="font-semibold text-lg bg-white text-primary px-10 py-3 rounded-md transition-all ease-in-out duration-300 hover:bg-transparent hover:text-white hover:border border-white">
            Register
          </button>
          <button className="font-semibold text-lg bg-transparent text-white border border-white px-10 py-3 rounded-md transition-all ease-in-out duration-300 hover:bg-slate-50 hover:text-primary">
            Log in
          </button>
        </div>
      </div>

      <hr className=" mx-auto border-white" />

      <div className="flex justify-between px-4 md:px-12 py-1 mt-2">
        <span className="font-normal text-sm text-white">
          ©2023, MCQ Genius. All Rights Reserved
        </span>
        <div>
          <span className="font-normal text-sm text-white">
            Terms & Condition |{" "}
          </span>
          <span className="font-normal text-sm text-white">
            Privacy & Policy
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
