import React from "react";

export default function Loader() {
  return (
    <div className="absolute inset-0 bg-slate-300/20 backdrop-blur-sm flex items-center justify-center h-dvh z-10">
      <div className="loader"></div>
    </div>
  );
}
