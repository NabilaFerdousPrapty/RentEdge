import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="mt-7 lg:mx-1">
      <div className="max-w-7xl mx-auto my-4">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
