import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router";
import MainLayout from "./layouts/main/MainLayout";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <MainLayout />
    </StrictMode>
  </BrowserRouter>
);
