import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/Header/Navbar";

const MainLayout = () => {
  return (
    <div className="my-7">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
