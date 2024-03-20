import leftArrow from "../public/svg/leftArrow.svg";
import righttArrow from "../public/svg/rightArrow.svg";
import Image from "next/image";

const Reviews = () => {
  return (
    <div className="bg-[#FFFFFF] max-w-7xl mx-auto px-4 py-6 md:py-14 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center montserrat md:p-8 flex flex-col my-2 gap-2 md:gap-5 montserrat">
          <h2 className="text-[#000000] font-bold text-3xl md:text-5xl ">
            Our Students Reviews
          </h2>
          <h3 className="text-[#000000] font-bold text-xl md:text-3xl">
            কেন আমরাই শিক্ষার্থীর প্রথম পছন্দ?
          </h3>
        </div>

        {/* container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 poppins px-8">
          <div className="border border-[#0098FF] rounded-2xl text-center py-8 px-2 flex flex-col gap-2 ">
            <p className="font-normal text-[#000000] text-base">
              কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ করে,
              “Reading” এবং “Writing” সেকশন এতটাই informative ছিল যা আমার জন্য
              Mock Test এবং Real Exam কে সহজ করে তুলেছিল। আমার সবচেয়ে ভালো
              লেগেছে “Writing Part”।
            </p>
            <h2 className="font-medium text-[#000000] text-xl mt-6">
              Tahiya Faiza
            </h2>
            <p className="font-normal text-[#000000] text-base">
              Teaching Assistant, Brac University
            </p>
          </div>

          <div className="bg-[#E3FDF2] rounded-2xl text-center py-8 px-2 flex flex-col gap-2">
            <p className="font-normal text-[#000000] text-base">
              কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ করে,
              “Reading” এবং “Writing” সেকশন এতটাই informative ছিল যা আমার জন্য
              Mock Test এবং Real Exam কে সহজ করে তুলেছিল। আমার সবচেয়ে ভালো
              লেগেছে “Writing Part”।
            </p>
            <h2 className="font-medium text-[#000000] text-xl mt-6">
              Tahiya Faiza
            </h2>
            <p className="font-normal text-[#000000] text-base">
              Teaching Assistant, Brac University
            </p>
          </div>

          <div className="border border-[#0098FF] rounded-2xl text-center py-8 px-2 flex flex-col gap-2 ">
            <p className="font-normal text-[#000000] text-base">
              কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ করে,
              “Reading” এবং “Writing” সেকশন এতটাই informative ছিল যা আমার জন্য
              Mock Test এবং Real Exam কে সহজ করে তুলেছিল। আমার সবচেয়ে ভালো
              লেগেছে “Writing Part”।
            </p>
            <h2 className="font-medium text-[#000000] text-xl mt-6">
              Tahiya Faiza
            </h2>
            <p className="font-normal text-[#000000] text-base">
              Teaching Assistant, Brac University
            </p>
          </div>
        </div>
      </div>
      <div className="hidden md:flex gap-x-[1130px] absolute bottom-40">
        <Image
          src={leftArrow}
          alt="Blog Page Image"
          className="cursor-pointer"
        />
        <Image
          src={righttArrow}
          alt="Blog Page Image"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Reviews;
