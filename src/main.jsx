import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router";

import Router from "../Router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StrictMode>
      <Router />
    </StrictMode>
  </BrowserRouter>
);
