import Image from "next/image";
import content from "../public/svg/content.svg";

const OurServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-14 noto OurServices-gradient hover:border border-[#4C6ED7]">
      <h2 className="font-bold text-5xl text-center p-2">
        MCQ Genius প্রোগ্রামে কী কী পাচ্ছো?
      </h2>
      <div>
        <Image src={content} alt="" />
      </div>
    </div>
  );
};

export default OurServices;
