import React, { useEffect, useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
  EffectFlip,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/testimonials.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  return (
    <div className="">
      <div className="text-center my-2">
        <h1 className="lg:text-5xl text-primary my-5 md:text-3xl text-2xl font-play">
          Hear
          <span className="text-blue-950 font-bold pacifico-regular">
            {" "}
            Our Customers{" "}
          </span>
        </h1>
        <p className="lg:text-lg md:text-base text-primary text-sm"></p>
      </div>
      <div className="max-w-7xl mx-auto overflow-hidden">
        <Swiper
          effect={"flip"}
          grabCursor={true}
          pagination={true}
          navigation={true}
          modules={[EffectFlip, Pagination, Navigation]}
          className="mySwiper "
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
