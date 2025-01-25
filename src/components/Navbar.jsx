import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full shadow-xl shadow-white px-3 py-4 bg-slate-600 rounded-sm ">
      <Link to="/">
        <img className=" size-[50%] " src="/images/perago2.webp" alt="LOGO" />
      </Link>

      <div className="flex pr-10 space-x-10 text-lg">
        <div>
          <Link
            to="add-postion"
            className="text-white no-underline font-semibold"
          >
            add postion{" "}
          </Link>
        </div>
        <div>
          <Link to="form" className="text-white no-underline font-semibold">
            add pepole
          </Link>
        </div>
        <div>
          <Link to="treeview" className="text-white no-underline font-semibold">
            Tree
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
