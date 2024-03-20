import Banner from "@/components/Banner";
import BlogSection from "@/components/BlogSection";
import CourseCategory from "@/components/CourseCategory";
import InformationSection from "@/components/InformationSection";
import OurServices from "@/components/OurServices";
import Reviews from "@/components/Reviews";
import React from "react";

const page = () => {
  return (
    <div className="">
      <Banner />
      <OurServices />
      <CourseCategory />
      <BlogSection />
      <Reviews />
      <InformationSection />
    </div>
  );
};

export default page;
