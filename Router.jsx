import React from "react";
import { Routes, Route } from "react-router";
import MainLayout from "./src/layouts/main/MainLayout";
import Home from "./src/pages/Home/Home";
import DashboardLayout from "./src/layouts/dashboard/DashboardLayout";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* Add other routes here */}
      </Route>
      <Route path="dashboard" element={<DashboardLayout />}>
        {/* renders into the outlet in <Dashboard> at "/dashboard" */}
      </Route>
    </Routes>
  );
};

export default Router;
