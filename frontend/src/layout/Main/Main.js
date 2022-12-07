import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.js";

const Main = () => {
  return (
    <div className="px-10">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Main;
