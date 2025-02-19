import React, { useState } from "react";

// react icons
import { MdOutlineDone } from "react-icons/md";

const Pricing = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <section className="w-full rounded-xl p-[20px]">
      <h1 className="text-[30px] font-[500] leading-[40px]">Plans & Pricing</h1>
      <div className="w-full sm:flex-row flex-col gap-[30px] flex  items-center justify-between">
        <p className="text-[18px] font-[400] text-gray-400 w-full sm:w-[50%] mt-2">
          Whether your time-saving automation needs are large or small, we’re
          here to help you scale.
        </p>

        <div className="flex items-center bg-white rounded-full w-max">
          <button
            className={`${
              toggle
                ? "bg-[#BB6BD9] text-white"
                : "bg-transparent text-[#424242]"
            } px-4 py-2.5 rounded-full transition-all duration-300`}
            onClick={() => setToggle(true)}
          >
            monthly
          </button>
          <button
            className={`${
              !toggle
                ? "bg-[#BB6BD9] text-white"
                : "bg-transparent text-[#424242]"
            } px-4 py-2.5 transition-all duration-300 rounded-full`}
            onClick={() => setToggle(false)}
          >
            Yearly
          </button>
        </div>
      </div>

      {/*  pricing cards  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 bg-white toastshadow py-[30px] gap-[50px] px-[20px] sm:px-[40px] rounded-xl mt-10">
        <div className="w-full flex flex-col justify-between h-full">
          <div>
            <div className="flex items-end gap-[8px]">
              <h3 className="text-[1.8rem] font-[800]">
                {toggle ? " ৳19" : " ৳199"}
              </h3>
              <span className="text-[1rem] text-gray-400 mb-2">
                {toggle ? "/month" : "/year"}
              </span>
            </div>

            <h3 className="text-[1.5rem] font-[500] mt-3">Starter</h3>
            <p className="text-[1rem] text-gray-500">
              Unleash the power of automation.
            </p>

            <div className="flex flex-col gap-[10px] mt-5">
              <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                Multi-step Zaps
              </p>
              <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                3 Premium Apps
              </p>
              <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                2 Users team
              </p>
            </div>
          </div>

          <button className="py-2.5 px-4 w-full bg-[#857d9c] text-white rounded-full mt-16">
            Choose plan
          </button>
        </div>

        <div className="w-full flex flex-col justify-between h-full">
          <div>
            <div className="flex items-end gap-[8px]">
              <h3 className="text-[1.8rem] font-[800]">
                {toggle ? " ৳49" : " ৳499"}
              </h3>
              <span className="text-[1rem] text-gray-400 mb-2">
                {toggle ? "/month" : "/year"}
              </span>
            </div>

            <h3 className="text-[1.5rem] font-[500] mt-3">Professional</h3>
            <p className="text-[1rem] text-gray-500">
              Advanced tools to take your work to the next level.
            </p>

            <div className="flex flex-col gap-[10px] mt-5">
              <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                Multi-step Zaps
              </p>
              <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                Unlimited Premium
              </p>
              <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                50 Users team
              </p>
              <p className="text-[1rem] text-gray-500 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.3rem] p-1 rounded-full bg-[#dacfe2] text-[#BB6BD9]" />
                Shared Workspace
              </p>
            </div>
          </div>

          <button className="py-2.5 px-4 w-full bg-[#857d9c] text-white rounded-full mt-16">
            Choose plan
          </button>
        </div>

        <div className="w-full flex flex-col justify-between h-full bg-blue-950 text-white p-[25px] rounded-xl">
          <div>
            <div className="bg-[#393360] rounded-full px-4 py-[5px] mb-6 text-[0.8rem] text-[#BB6BD9] w-max ml-auto">
              Most Popular
            </div>

            <div className="flex items-end gap-[8px]">
              <h3 className="text-[1.8rem] font-[800]">
                {toggle ? "$99" : " ৳999"}
              </h3>
              <span className="text-[1rem] text-gray-300 mb-2">
                {toggle ? "/month" : "/year"}
              </span>
            </div>

            <h3 className="text-[1.5rem] font-[500] mt-3">Company</h3>
            <p className="text-[1rem] text-gray-300">
              Automation plus enterprise-grade features.
            </p>

            <div className="flex flex-col gap-[10px] mt-5">
              <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.3rem] p-1 rounded-full bg-[#393360] text-[#fff]" />
                Multi-step Zaps
              </p>
              <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.3rem] p-1 rounded-full bg-[#393360] text-[#fff]" />
                Unlimited Premium
              </p>
              <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.3rem] p-1 rounded-full bg-[#393360] text-[#fff]" />
                Unlimited Users Team
              </p>
              <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.3rem] p-1 rounded-full bg-[#393360] text-[#fff]" />
                Advanced Admin
              </p>
              <p className="text-[1rem] text-gray-200 flex items-center gap-[10px]">
                <MdOutlineDone className="text-[1.3rem] p-1 rounded-full bg-[#393360] text-[#fff]" />
                Custom Data Retention
              </p>
            </div>
          </div>

          <button className="py-2.5 px-4 w-full bg-[#BB6BD9] text-white rounded-full mt-16">
            Choose plan
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
