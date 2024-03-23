import Image from "next/image";
import group from "../public/assets/Group 18210.png";
import questionBank from "../public/svg/question-bank.svg";
import course from "../public/svg/course.svg";
import job from "../public/svg/job.svg";
import exam from "../public/svg/exam.svg";
import lecturer from "../public/svg/lecturer.svg";
import chat from "../public/svg/chat.svg";
import { RxCrossCircled } from "react-icons/rx";

const Header = () => {
  return (
    <header>
      <div className="max-w-7xl mx-auto custom-gradient p-4 md:p-20 flex flex-col md:flex-row items-center justify-center">
        <div className="p-7">
          <h2 className="text-black font-bold text-3xl md:text-6xl noto">
            Get Ready For Exam
          </h2>
          <p className="noto font-medium text-2xl text-[#767676] py-2">
            Stay Ahead in Competitive School and Job Exams like Never Before.
          </p>

          <button className="montserrat py-4 px-10 font-medium bg-primary rounded-md text-2xl transition-all ease-in-out duration-300 hover:bg-primary-dark/70">
            Join Today
          </button>
        </div>

        <div className="p-4 md:p-6">
          <Image src={group} alt="Group Image" width={424} height={272} />
        </div>
      </div>
      <div className="max-w-[95%] md:max-w-6xl mx-auto rounded-lg -mt-8 poppins bg-[#FCD3D3] border border-dashed border-[#8B0E11]">
        <div className="px-2 md:px-6 py-2 flex items-center justify-between">
          <h3 className="font-normal text-xs text-black">
            আগামীকাল শেষ হবে Product Management ক্যারিয়ার ট্র্যাকের নতুন ব্যাচের
            ভর্তি।
          </h3>
          <div className="flex items-center justify-center gap-3 text-center">
            <h3 className="font-normal text-xs text-black">সময় বাকি</h3>
            <div className="border border-black text-center text-wrap overflow-hidden rounded-lg w-11 h-11">
              <h5 className="font-semibold text-xs py-1 px-3 bg-white">১</h5>
              <h5 className="font-normal text-[10px] py-1 px-2 bg-black text-white">
                দিন
              </h5>
            </div>
            <div className=" border border-black text-center text-wrap overflow-hidden rounded-lg w-11 h-11">
              <h5 className="font-semibold text-xs py-1 px-3 bg-white">১</h5>
              <h5 className="font-normal text-[10px] py-1 px-2 bg-black text-white">
                ঘন্টা
              </h5>
            </div>
            <div className=" border border-black text-center text-wrap overflow-hidden rounded-lg w-11 h-11">
              <h5 className="font-semibold text-xs py-1 px-3 bg-white">১</h5>
              <h5 className="font-normal text-[10px] py-1 px-2 bg-black text-white">
                মিনিট
              </h5>
            </div>
            <div className=" border border-black text-center text-wrap overflow-hidden rounded-lg w-11 h-11">
              <h5 className="font-semibold text-xs py-1 px-3 bg-white">১</h5>
              <h5 className="font-normal text-[10px] py-1 px-2 bg-black text-white">
                সেকেন্ড
              </h5>
            </div>
            <RxCrossCircled size={26} className="text-[#C60000]" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
