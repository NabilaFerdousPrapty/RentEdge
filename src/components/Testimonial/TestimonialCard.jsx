import React from "react";

// react icons
import { FaQuoteRight } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const { image, title, message, name, designation } = testimonial;
  return (
    <div className="max-w-7xl overflow-hidden mx-auto">
      <div className="w-full lg:p-4 p-1 bg-white shadow-2xl rounded-lg relative flex flex-col md:flex-row items-start justify-between gap-6">
        <div className="relative w-full md:w-[50%]">
          <img
            src={image}
            alt="demo/image"
            className="w-full h-full object-cover"
          />
          <FaQuoteRight className="absolute -top-5 right-[-5%] text-[3rem] text-[#ffffff] bg-[#3B9DF8] p-3 rounded-full" />
        </div>
        <div className="w-full md:w-[45%] text-center flex-col my-auto">
          <div className="">
            <h3 className="text-[1.5rem] font-[500] capitalize">{title}</h3>
            <p className="text-[#424242] text-[0.8rem] mt-2 text-justify">
              {message}
            </p>

            <div className="mt-4 ">
              <h2 className="text-[1rem] font-[500]">{name}</h2>
              <p className="text-[0.9rem] text-[#727272]">{designation}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
