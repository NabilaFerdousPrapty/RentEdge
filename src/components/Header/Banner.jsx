import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-[15px] w-full sm:w-[100%] min-h-[400px] mt-4">
      {/* First Grid Item - Swiper Slider */}
      <div className="col-span-1 lg:col-span-2 overflow-hidden flex justify-between flex-col rounded-sm row-span-1 lg:row-span-2 h-[170px] bg-black lg:h-full py-8 relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          <SwiperSlide>
            <div className="w-full h-full relative">
              <div className="px-8 absolute bottom-8 z-20 w-full lg:w-[70%]">
                <h4 className="text-[1.1rem] font-medium text-white">
                  Smart Car Project Kits
                </h4>
                <p className="text-[0.8rem] mt-3 text-[#FAFAFA] font-[300]">
                  Smart Car Project Kits for kids to learn about robotics.
                </p>
                <button className="w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-3 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b">
                  Shop Now
                </button>
              </div>
              <img
                alt="product/image"
                src="https://i.ibb.co.com/WvGP6vDB/kit1.png"
                className="w-[350px] absolute bottom-0 left-[50%] transform translate-x-[-50%]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full relative">
              <div className="px-8 absolute bottom-8 z-20 w-full lg:w-[70%]">
                <h4 className="text-[1.1rem] font-medium text-white">
                  Quadcopter-drone
                </h4>
                <p className="text-[0.8rem] mt-3 text-[#FAFAFA] font-[300]">
                  Explore the world with the quadcopter-drone.
                </p>
                <button className="w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-3 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b">
                  Shop Now
                </button>
              </div>
              <img
                alt="product/image"
                src="https://i.ibb.co.com/mVB5MZfq/drone-kit-diy-500x500-removebg-preview.png"
                className="w-[250px] absolute bottom-0 left-[50%] transform translate-x-[-50%]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Second Grid Item */}
      <div className="bg-black rounded-sm col-span-1 lg:col-span-2 flex justify-between items-center px-4 overflow-hidden relative min-h-[190px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          {" "}
          <SwiperSlide>
            <div className="">
              <div className="absolute bottom-6 left-6 z-20 w-[70%] lg:w-[50%]">
                <h4 className="text-[1.1rem] font-medium text-white">
                  Women’s Collections
                </h4>
                <p className="text-[0.8rem] mt-3 text-[#FAFAFA] font-[300]">
                  Featured woman collections that give you another vibe.
                </p>
                <button className="w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-3 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b">
                  Shop Now
                </button>
              </div>
              <img
                alt="product/image"
                src="https://i.ibb.co.com/7ghML0N/attractive-woman-wearing-hat-posing-black-background-1.png"
                className="w-[300px] absolute bottom-0 right-0"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="absolute bottom-6 left-6 z-20 w-[70%] lg:w-[50%]">
                <h4 className="text-[1.1rem] font-medium text-white">
                  Men’s Collections
                </h4>
                <p className="text-[0.8rem] mt-3 text-[#FAFAFA] font-[300]">
                  Featured to give you a new look and style.
                </p>
                <button className="w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-3 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b">
                  Shop Now
                </button>
              </div>
              <img
                alt="product/image"
                src="https://i.ibb.co.com/1Y1HXCGV/man-with-suit-winking-eye-1194-1006-removebg-preview.png"
                className="w-[180px] absolute bottom-0 right-5"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Third Grid Item */}
      <div className="bg-black rounded-sm col-span-1 flex justify-between items-center px-4 overflow-hidden relative min-h-[180px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          {" "}
          <SwiperSlide>
            <div className="">
              <div className="absolute bottom-4 z-20 w-[90%]">
                <h4 className="text-[1.1rem] font-medium text-white">
                  Mountain Bicycles
                </h4>
                <p className="text-[0.8rem] mt-0.5 text-[#FAFAFA] font-[300]">
                  Waiting to start your best adventure with mountain bicycles.
                </p>
                <button className="w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-2 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b">
                  Shop Now
                </button>
              </div>
              <img
                alt="product/image"
                src="https://i.ibb.co.com/h19KXFhJ/Mountain-Bike-Santa-Cruz-Bronson-m-removebg-preview.png"
                className="w-[250px] absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-40%]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="absolute bottom-4 z-20 w-[90%]">
                <h4 className="text-[1.1rem] font-medium text-white">
                  Electric Bicycles
                </h4>
                <p className="text-[0.8rem] mt-0.5 text-[#FAFAFA] font-[300]">
                  Explore the city with electric bicycles.
                </p>
                <button className="w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-2 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b">
                  Shop Now
                </button>
              </div>
              <img
                alt="product/image"
                src="https://i.ibb.co.com/PsW13k1v/images-removebg-preview.png"
                className="w-[250px] absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-40%]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Fourth Grid Item */}
      <div className="bg-black rounded-sm col-span-1 flex justify-between items-center px-4 overflow-hidden relative min-h-[180px]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper w-full h-full"
        >
          {" "}
          <SwiperSlide>
            <div className="">
              <div className="absolute bottom-4 z-20 w-[90%]">
                <h4 className="text-[1.1rem] font-medium text-white">
                  Perfume
                </h4>
                <p className="text-[0.8rem] mt-0.5 text-[#FAFAFA] font-[300]">
                  GUCCI INTENSE OUD EDP
                </p>
                <button className="w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-2 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b">
                  Shop Now
                </button>
              </div>
              <img
                alt="product/image"
                src="https://i.ibb.co.com/WxYLjFy/652e82cd70aa6522dd785109a455904c.png"
                className="w-[130px] absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="">
              <div className="absolute bottom-4 z-20 w-[90%]">
                <h4 className="text-[1.1rem] font-medium text-white">
                  Cosmetics
                </h4>
                <p className="text-[0.8rem] mt-0.5 text-[#FAFAFA] font-[300]">
                  Explore the best cosmetics for your skin.
                </p>
                <button className="w-max text-[#FAFAFA] font-[300] hover:text-[#0FABCA] hover:border-[#0FABCA] mt-2 transition-all duration-300 border-[#FAFAFA] text-[0.8rem] group border-b">
                  Shop Now
                </button>
              </div>
              <img
                alt="product/image"
                src="https://i.ibb.co.com/VcKPnbJG/Pngtree-set-of-cosmetic-products-cream-5313015.png"
                className="w-[180px] absolute top-[50%] left-[50%] transform translate-y-[-50%] translate-x-[-50%]"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
