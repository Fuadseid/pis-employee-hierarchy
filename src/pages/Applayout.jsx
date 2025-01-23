import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div className="bg-gray-300 h-screen">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Applayout;
