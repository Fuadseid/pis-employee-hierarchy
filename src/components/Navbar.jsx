import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbLayoutNavbar } from "react-icons/tb";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full shadow-2xl  px-3 py-4 bg-slate-600 rounded-sm ">
      <Link to="/">
        <img
          className="size-[30%] sm:size-[40%] bg-white rounded-lg shadow-lg "
          src="/images/perago2.webp"
          alt="LOGO"
        />
      </Link>

      {
        <div className="hidden sm:block">
          <div className="flex pr-10 space-x-10 text-md">
            <div>
              <Link
                to="add-postion"
                className="text-white no-underline font-semibold"
              >
                Add postion{" "}
              </Link>
            </div>
            <div>
              <Link to="form" className="text-white no-underline font-semibold">
                Add pepole
              </Link>
            </div>
            <div>
              <Link
                to="treeview"
                className="text-white no-underline font-semibold"
              >
                Tree
              </Link>
            </div>
          </div>
        </div>
      }

      {
        <div className="block sm:hidden">
          <div className="flex flex-row space-x-3 text-xs">
            <div>
              <Link
                to="add-postion"
                className="text-white no-underline font-semibold"
              >
                Add postion{" "}
              </Link>
            </div>
            <div>
              <Link to="form" className="text-white no-underline font-semibold">
                Add pepole
              </Link>
            </div>
            <div>
              <Link
                to="treeview"
                className="text-white no-underline font-semibold"
              >
                Tree
              </Link>
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default Navbar;
