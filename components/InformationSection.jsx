import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { RxMinusCircled } from "react-icons/rx";
import { AiOutlinePlusCircle } from "react-icons/ai";

const InformationSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-14 poppins">
      <h2 className="font-semibold text-3xl md:text-5xl text-center my-2 text-[#000000]">
        Frequently Asked Question
      </h2>

      <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-8 my-2 mt-6">
        <div className="col-span-4 space-y-2">
          <div className="flex gap-x-5 p-4 rounded-lg border border-[#3380DD] bg-[#0098FF]">
            <FaRegCircle
              size={24}
              className="text-[#808080] bg-[#808080] rounded-full"
            />
            <div className="text-[#FFFFFF] flex flex-col">
              <h2 className="font-semibold text-2xl">General Inqueries</h2>
              <p className="font-normal text-base">
                I will need your Business Manager
              </p>
            </div>
          </div>

          <div className="flex gap-5 p-4 rounded-lg border border-[#3380DD] bg-[#FFFFFF]">
            <FaRegCircle
              size={24}
              className="text-[#808080] bg-[#808080] rounded-full"
            />
            <div className="text-[#000000] flex flex-col gap-y-1">
              <h2 className="font-semibold text-2xl">General Inqueries</h2>
              <p className="font-normal text-base text-[#000000]">
                I will need your Business Manager
              </p>
            </div>
          </div>

          <div className="flex gap-5 p-4 rounded-lg border border-[#3380DD] bg-[#FFFFFF]">
            <FaRegCircle
              size={24}
              className="text-[#808080] bg-[#808080] rounded-full"
            />
            <div className="text-[#000000] flex flex-col gap-y-1">
              <h2 className="font-semibold text-2xl">General Inqueries</h2>
              <p className="font-normal text-base text-[#000000]">
                I will need your Business Manager
              </p>
            </div>
          </div>

          <div className="flex gap-5 p-4 rounded-lg border border-[#3380DD] bg-[#FFFFFF]">
            <FaRegCircle
              size={24}
              className="text-[#808080] bg-[#808080] rounded-full"
            />
            <div className="text-[#000000] flex flex-col gap-y-1">
              <h2 className="font-semibold text-2xl">General Inqueries</h2>
              <p className="font-normal text-base text-[#000000]">
                I will need your Business Manager
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-8 p-4 border border-[#3380DD] rounded-2xl">
          <div className="flex gap-5 p-4 rounded-lg  bg-[#FFFFFF]">
            <FaRegCircle
              size={24}
              className="text-[#808080] bg-[#808080] rounded-full"
            />
            <div className="text-[#000000] flex flex-col gap-y-4">
              <h2 className="font-semibold text-2xl">General Inqueries</h2>
              <p className="font-normal text-base text-[#000000]">
                I will need your Business Manager
              </p>
            </div>
          </div>

          <div className="flex justify-between w-full gap-5 p-4 rounded-lg bg-[#FFFFFF]">
            <div className=" flex flex-col gap-y-4">
              <h2 className="font-semibold text-2xl text-[#3380DD]">
                What you need from me to get start the order?
              </h2>
              <p className="font-normal text-base text-[#4D4D4D]">
                I will need your Business Manager Full access and Store access
                .I will need your Business Manager Full access and Store access
                .
              </p>
            </div>
            <RxMinusCircled size={24} className="text-[#000000]" />
          </div>
          <hr className=" mx-auto border-[#197ADB]" />

          <div className="flex justify-between w-full gap-5 p-4 rounded-lg bg-[#FFFFFF]">
            <div className=" flex flex-col gap-y-4">
              <h2 className="font-semibold text-2xl text-[#3380DD]">
                What you need from me to get start the order?
              </h2>
            </div>
            <AiOutlinePlusCircle size={24} className="text-[#000000]" />
          </div>
          <hr className=" mx-auto border-[#197ADB]" />

          <div className="flex justify-between w-full gap-5 p-4 rounded-lg bg-[#FFFFFF]">
            <div className=" flex flex-col gap-y-4">
              <h2 className="font-semibold text-2xl text-[#3380DD]">
                What you need from me to get start the order?
              </h2>
            </div>
            <AiOutlinePlusCircle size={24} className="text-[#000000]" />
          </div>
          <hr className=" mx-auto border-[#197ADB]" />

          <div className="flex justify-between w-full gap-5 p-4 rounded-lg bg-[#FFFFFF]">
            <div className=" flex flex-col gap-y-4">
              <h2 className="font-semibold text-2xl text-[#3380DD]">
                What you need from me to get start the order?
              </h2>
            </div>
            <AiOutlinePlusCircle size={24} className="text-[#000000]" />
          </div>
          <hr className=" mx-auto border-[#197ADB]" />
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
