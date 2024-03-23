import Image from "next/image";
import content from "../public/svg/content.svg";

const OurServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 md:px-4 py-4 md:py-14 OurServices-gradient hover:border border-primary-dark">
      <h2 className="font-bold text-2xl md:text-5xl text-center p-2 noto">
        MCQ Genius প্রোগ্রামে কী কী পাচ্ছো?
      </h2>
      <div>
        <Image src={content} alt="" className="w-auto h-auto" />
      </div>
    </div>
  );
};

export default OurServices;
