import Image from "next/image";
import group from "../public/assets/Group 18210.png";
import { RxCrossCircled } from "react-icons/rx";

const Header = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto custom-gradient p-20 flex items-center justify-center g">
        <div className="p-7">
          <h2 className="text-[#000000] font-bold text-6xl noto">
            Get Ready For Exam
          </h2>
          <p className="noto font-medium text-2xl text-[#767676] py-2">
            Stay Ahead in Competitive School and Job Exams like Never Before.
          </p>

          <button className="montserrat py-4 px-10 font-medium bg-[#489CE9] rounded-md text-2xl">
            Join Today
          </button>
        </div>

        <div className="p-6">
          <Image src={group} alt="Group Image" width={424} height={272} />
        </div>
      </div>
      <div className="max-w-5xl mx-auto rounded-lg -mt-8 poppins bg-[#FCD3D3] border border-dashed border-[#8B0E11]">
        <div className="px-6 py-2 flex items-center justify-between">
          <h3 className="font-normal text-xs text-[#000000]">
            আগামীকাল শেষ হবে Product Management ক্যারিয়ার ট্র্যাকের নতুন ব্যাচের
            ভর্তি।
          </h3>
          <div className="flex items-center justify-center gap-3 text-center">
            <h3 className="font-normal text-xs text-[#000000]">সময় বাকি</h3>
            <div className=" border-[#000000] border-[0.5px] ">
              <h5 className="font-semibold text-xs py-1 px-3 bg-[#FFFFFF]">
                ১
              </h5>
              <h5 className="font-normal text-[10px] py-1 px-2 bg-[#000000] text-[#FFFFFF]">
                দিন
              </h5>
            </div>
            <div className=" border-[#000000] border-[0.5px] ">
              <h5 className="font-semibold text-xs py-1 px-3 bg-[#FFFFFF]">
                ১
              </h5>
              <h5 className="font-normal text-[10px] py-1 px-2 bg-[#000000] text-[#FFFFFF]">
                ঘন্টা
              </h5>
            </div>
            <div className=" border-[#000000] border-[0.5px] ">
              <h5 className="font-semibold text-xs py-1 px-3 bg-[#FFFFFF]">
                ১
              </h5>
              <h5 className="font-normal text-[10px] py-1 px-2 bg-[#000000] text-[#FFFFFF]">
                মিনিট
              </h5>
            </div>
            <div className=" border-[#000000] border-[0.5px] ">
              <h5 className="font-semibold text-xs py-1 px-3 bg-[#FFFFFF]">
                ১
              </h5>
              <h5 className="font-normal text-[10px] py-1 px-2 bg-[#000000] text-[#FFFFFF]">
                সেকেন্ড
              </h5>
            </div>
            <RxCrossCircled size={26} className="text-[#C60000]" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
