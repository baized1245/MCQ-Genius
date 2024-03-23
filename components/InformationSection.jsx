import React from "react";
import { FaRegCircle } from "react-icons/fa";
import { RxMinusCircled } from "react-icons/rx";
import { AiOutlinePlusCircle } from "react-icons/ai";

const InformationSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-14 poppins">
      <h2 className="font-semibold text-3xl md:text-5xl text-center my-2 text-black">
        Frequently Asked Question
      </h2>

      <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-8 my-2 mt-6">
        <div className="col-span-4 space-y-2">
          <div className="flex gap-x-5 p-4 rounded-lg border border-primary bg-primary-light">
            <FaRegCircle
              size={24}
              className="text-black-light bg-black-light rounded-full"
            />
            <div className="text-white flex flex-col">
              <h2 className="font-semibold text-2xl">General Inqueries</h2>
              <p className="font-normal text-base">
                I will need your Business Manager
              </p>
            </div>
          </div>

          <div className="flex gap-5 p-4 rounded-lg border border-primary bg-white">
            <FaRegCircle
              size={24}
              className="text-black-light bg-black-light rounded-full"
            />
            <div className="text-black flex flex-col gap-y-1">
              <h2 className="font-semibold text-2xl">General Inqueries</h2>
              <p className="font-normal text-base text-black">
                I will need your Business Manager
              </p>
            </div>
          </div>

          <div className="flex gap-5 p-4 rounded-lg border border-primary bg-white">
            <FaRegCircle
              size={24}
              className="text-black-light bg-black-light rounded-full"
            />
            <div className="text-black flex flex-col gap-y-1">
              <h2 className="font-semibold text-2xl">General Inqueries</h2>
              <p className="font-normal text-base text-black">
                I will need your Business Manager
              </p>
            </div>
          </div>

          <div className="flex gap-5 p-4 rounded-lg border border-primary bg-white">
            <FaRegCircle
              size={24}
              className="text-black-light bg-black-light rounded-full"
            />
            <div className="text-black flex flex-col gap-y-1">
              <h2 className="font-semibold text-2xl">General Inqueries</h2>
              <p className="font-normal text-base text-black">
                I will need your Business Manager
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-8 p-4 border border-primary rounded-2xl">
          <div className="flex gap-5 p-4 rounded-lg  bg-white">
            <FaRegCircle
              size={24}
              className="text-black-light bg-black-light rounded-full"
            />
            <div className="text-black flex flex-col gap-y-4">
              <h2 className="font-semibold text-2xl">General Inqueries</h2>
              <p className="font-normal text-base text-black">
                I will need your Business Manager
              </p>
            </div>
          </div>

          <div className="flex justify-between w-full gap-5 p-4 rounded-lg bg-white">
            <div className=" flex flex-col gap-y-4">
              <h2 className="font-semibold text-2xl text-primary">
                What you need from me to get start the order?
              </h2>
              <p className="font-normal text-base text-black-light">
                I will need your Business Manager Full access and Store access
                .I will need your Business Manager Full access and Store access
                .
              </p>
            </div>
            <RxMinusCircled size={24} className="text-black" />
          </div>
          <hr className=" mx-auto border-primary" />

          <div className="flex justify-between w-full gap-5 p-4 rounded-lg bg-white">
            <div className=" flex flex-col gap-y-4">
              <h2 className="font-semibold text-2xl text-primary">
                What you need from me to get start the order?
              </h2>
            </div>
            <AiOutlinePlusCircle size={24} className="text-black" />
          </div>
          <hr className=" mx-auto border-primary" />

          <div className="flex justify-between w-full gap-5 p-4 rounded-lg bg-white">
            <div className=" flex flex-col gap-y-4">
              <h2 className="font-semibold text-2xl text-primary">
                What you need from me to get start the order?
              </h2>
            </div>
            <AiOutlinePlusCircle size={24} className="text-black" />
          </div>
          <hr className=" mx-auto border-primary" />

          <div className="flex justify-between w-full gap-5 p-4 rounded-lg bg-white">
            <div className=" flex flex-col gap-y-4">
              <h2 className="font-semibold text-2xl text-primary">
                What you need from me to get start the order?
              </h2>
            </div>
            <AiOutlinePlusCircle size={24} className="text-black" />
          </div>
          <hr className=" mx-auto border-primary" />
        </div>
      </div>
    </div>
  );
};

export default InformationSection;
