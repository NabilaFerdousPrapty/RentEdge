import React from "react";
import Banner from "./../../components/Header/Banner";
import Features from "./../../components/Features/Features";
import Contact from "../../components/contact/Contact";
import Testimonial from "../../components/Testimonial/Testimonial";
import FAQ from "../../components/faq/FAQ";
import Pricing from "../../components/Pricing/Pricing";

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Products />
      <FAQ />
      <Pricing />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
