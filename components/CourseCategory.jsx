import Image from "next/image";
import book from "../public/svg/book.svg";
import book2 from "../public/svg/book2.svg";

const CourseCategory = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-14 noto">
      <h2 className="text-center font-semibold text-5xl my-2">
        কোর্স ক্যাটাগরি
      </h2>

      <div className="grid grid-cols-3 gap-6 p-2 my-4">
        <div>
          <Image
            src={book2}
            alt="Book Image"
            height={300}
            width={400}
            className="object-contain w-auto h-auto"
          />
        </div>
        <div>
          <Image
            src={book2}
            alt="Book Image"
            height={200}
            width={400}
            className="object-cover w-auto h-auto"
          />
        </div>
        <div>
          <Image
            src={book2}
            alt="Book Image"
            height={200}
            width={400}
            className="object-cover w-auto h-auto"
          />
        </div>
        <div>
          <Image
            src={book2}
            alt="Book Image"
            height={200}
            width={400}
            className="object-cover w-auto h-auto"
          />
        </div>
        <div>
          <Image
            src={book2}
            alt="Book Image"
            height={200}
            width={400}
            className="object-cover w-auto h-auto"
          />
        </div>
        <div>
          <Image
            src={book2}
            alt="Book Image"
            height={200}
            width={400}
            className="object-cover w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCategory;
