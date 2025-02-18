import React from "react";
import { Routes, Route } from "react-router";
import MainLayout from "./src/layouts/main/MainLayout";
import Home from "./src/pages/Home/Home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* Add other routes here */}
      </Route>
    </Routes>
  );
};

export default Router;
