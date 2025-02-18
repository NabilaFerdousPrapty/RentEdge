import React from "react";

// react icons
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-blue-950 rounded-xl w-full p-6 lg:p-9 ">
      <div className="flex justify-between gap-[30px] flex-wrap w-full">
        <div className="lg:w-[25%]">
          <h3 className="text-[1.2rem] font-semibold text-white mb-2">
            About The Store
          </h3>
          <div className="flex flex-col gap-[8px] text-white">
            <span>
              <a className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                Home
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                Become a customer
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                About us
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                FAQ
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                Return policy
              </a>
            </span>
            <span>
              <a className="text-[0.9rem] hover:text-blue-400 cursor-pointer">
                Contact us
              </a>
            </span>
          </div>
        </div>

        <div className="lg:w-[45%] grid grid-cols-2 gap-[30px]">
          <div className="">
            <h3 className="text-[1.2rem] font-semibold text-[#ffffff] mb-2">
              Services
            </h3>
            <div className="flex text-black flex-col gap-[10px]">
              <p className="text-[0.9rem] text-[#ffffff] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                UI Components
              </p>
              <p className="text-[0.9rem] text-[#ffffff] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Website Templates
              </p>
              <p className="text-[0.9rem] text-[#ffffff] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Icons
              </p>
              <p className="text-[0.9rem] text-[#ffffff] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Opacity Palette
              </p>
              <p className="text-[0.9rem] text-[#ffffff] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Blocks
              </p>
            </div>
          </div>
          <div className="">
            <h3 className="text-[1.2rem] font-semibold text-[#ffffff] mb-2">
              Services
            </h3>
            <div className="flex text-black flex-col gap-[10px]">
              <p className="text-[0.9rem] text-[#ffffff] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                UI Components
              </p>
              <p className="text-[0.9rem] text-[#ffffff] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Website Templates
              </p>
              <p className="text-[0.9rem] text-[#ffffff] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Icons
              </p>
              <p className="text-[0.9rem] text-[#ffffff] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Opacity Palette
              </p>
              <p className="text-[0.9rem] text-[#ffffff] hover:text-[#3B9DF8] cursor-pointer transition-all duration-200">
                Blocks
              </p>
            </div>
          </div>
        </div>

        <div className="lg:w-[20%]">
          <h3 className="text-[1.2rem] font-semibold text-white mb-2">
            Get in touch
          </h3>
          <div className="flex gap-[7px] text-white">
            <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
              <CgFacebook />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
              <BsTwitter />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
              <BsInstagram />
            </a>
            <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full hover:bg-blue-400">
              <BsLinkedin />
            </a>
          </div>
        </div>
      </div>
      <p className="text-[0.8rem] sm:text-[0.9rem] text-white  text-center mt-8">
        © 2024 RentEdge. All Rights Reserved.{" "}
      </p>
      <div className="sm:flex-row flex-col flex sm:items-center gap-[15px] w-full justify-center mt-8">
        <a className="text-gray-400 cursor-pointer text-[0.8rem]">
          Terms of purchase
        </a>
        <a className="text-gray-400 cursor-pointer text-[0.8rem]">
          Security and privacy
        </a>
        <a className="text-gray-400 cursor-pointer text-[0.8rem]">Newsletter</a>
      </div>
    </footer>
  );
};

export default Footer;
