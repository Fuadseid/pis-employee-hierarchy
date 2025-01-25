import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const Applayout = () => {
  return (
    <div className=" h-screen">
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Applayout;
