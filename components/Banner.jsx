import Image from "next/image";
import anime from "../public/svg/anime.svg";
import questions from "../public/svg/questions.svg";
import students from "../public/svg/students.svg";
import subjects from "../public/svg/subjects.svg";
import users from "../public/svg/users.svg";

const Banner = () => {
  return (
    <div className="max-w-6xl mx-auto my-6 md:my-20 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-10 figtree bg-[#FFFFFF]">
      <div className="mr-5">
        <Image
          src={anime}
          alt="Anime"
          className="object-cover w-[500px] h-[500px]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-5">
        <div className="bg-[#E3FDF2] w-full rounded-xl border-l-8 border-[#46AD81] flex items-center justify-center gap-6 p-10 shadow-2xl shadow-[box-shadow: 2px 2px 8px 0px #00000040]">
          <h3 className="text-[#000000] text-2xl font-semibold">
            10000+ <br />
            <span>Questions</span>
          </h3>
          <Image
            src={questions}
            alt=""
            className="object-cover w-[90px] h-[90px]"
          />
        </div>

        <div className="bg-[#FDF8E5] w-full rounded-xl border-l-8 border-[#BAAA6B] flex items-center justify-center gap-6 p-10 shadow-2xl shadow-[box-shadow: 2px 2px 8px 0px #00000040]">
          <h3 className="text-[#000000] text-2xl font-semibold">
            10000+ <br />
            <span>Questions</span>
          </h3>
          <Image
            src={subjects}
            alt=""
            className="object-cover w-[90px] h-[90px]"
          />
        </div>

        <div className="bg-[#FDF8E5] w-full rounded-xl border-l-8 border-[#BAAA6B] flex items-center justify-center gap-6 p-10 shadow-2xl shadow-[box-shadow: 2px 2px 8px 0px #00000040]">
          <h3 className="text-[#000000] text-2xl font-semibold">
            10000+ <br />
            <span>Questions</span>
          </h3>
          <Image
            src={students}
            alt=""
            className="object-cover w-[90px] h-[90px]"
          />
        </div>

        <div className="bg-[#E3FDF2] w-full rounded-xl border-l-8 border-[#46AD81] flex items-center justify-center gap-6 p-10 shadow-2xl shadow-[box-shadow: 2px 2px 8px 0px #00000040]">
          <h3 className="text-[#000000] text-2xl font-semibold">
            10000+ <br />
            <span>Questions</span>
          </h3>
          <Image
            src={users}
            alt=""
            className="object-cover w-[90px] h-[90px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
