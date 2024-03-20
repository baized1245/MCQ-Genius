import Image from "next/image";
import blog from "../public/svg/blog.svg";
import blank from "../public/svg/blank.svg";
import { MdOutlineCalendarToday } from "react-icons/md";
import { LuClock } from "react-icons/lu";

const BlogSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14 ">
      <h2 className="text-center font-bold text-5xl my-2 noto">
        Learn More Form Blogs
      </h2>
      <div className="py-5 flex gap-x-8">
        <div className="col-span-5 border border-[#489CE9] rounded-2xl">
          <Image src={blog} alt="Blog Page Image" />
          <div className="p-">
            <div className="flex mx-auto gap-x-3 items-center poppins my-4 p-3">
              <span className="flex items-center gap-x-2">
                <MdOutlineCalendarToday
                  size={16}
                  className=" text-[#3380DD] font-semibold"
                />
                <h5>Novembar 20, 2023</h5>
              </span>
              <span className="flex items-center gap-x-2">
                <LuClock
                  size={16}
                  className=" text-[#3380DD] font-semibold text-[20px]"
                />
                <h5>9 min read</h5>
              </span>
            </div>
            <div className="my-5 poppins text-wrap overflow-hidden w-[387px] h-[188px] p-3">
              <h2 className="text-[#0D0D0D] font-semibold">
                Unlocking the Power of Inclusive Design: A Guide to Accessible
                Marketing
              </h2>
              <p className="text-wrap my-3 text-sm font-normal text-[#363636]">
                Discover the impact of inclusive design on marketing, and learn
                strategies to create accessible content that resonates with
                diverse audiences....
              </p>
              <span className="cursor-pointer font-medium text-sm text-[#363636]">
                Read more
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-7 w-full">
          <div className="border border-[#489CE9] rounded-2xl flex items-center gap-x-5 p-4">
            <div>
              <Image src={blank} alt="" />
            </div>
            <div className="w-[437px] h-[169px] noto">
              <h2 className="text-[#0D0D0D] font-semibold text-xl">
                Unlocking the Power of Inclusive Design: A Guide to Accessible
                Marketing
              </h2>
              <p className="text-sm font-normal text-[#363636] my-1">
                Discover the impact of inclusive design on marketing, and learn
                strategies to create accessible content that resonates with
                diverse audiences....
              </p>
              <span className="text-sm font-medium text-[#363636] my-1 underline cursor-pointer">
                Read more
              </span>
            </div>
          </div>
          {/*  */}
          <div className="border border-[#489CE9] bg-[#30A2FF] rounded-2xl flex items-center gap-x-5 p-4 my-8">
            <div>
              <Image src={blank} alt="" />
            </div>
            <div className="w-[437px] h-[169px] noto">
              <h2 className="text-[#FFFFFF] font-semibold text-xl">
                Unlocking the Power of Inclusive Design: A Guide to Accessible
                Marketing
              </h2>
              <p className="text-sm font-normal text-[#FFFFFF] my-1">
                Discover the impact of inclusive design on marketing, and learn
                strategies to create accessible content that resonates with
                diverse audiences....
              </p>
              <span className="text-sm font-medium text-[#FFFFFF] my-1 underline cursor-pointer">
                Read more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
