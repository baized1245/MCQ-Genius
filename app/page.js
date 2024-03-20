import Banner from "@/components/Banner";
import BlogSection from "@/components/BlogSection";
import CourseCategory from "@/components/CourseCategory";
import OurServices from "@/components/OurServices";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Banner />
      <OurServices />
      <CourseCategory />
      <BlogSection />
    </div>
  );
};

export default page;
