import React from "react";
const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-2xl text-red-500">Oops! Page not found.</p>
        <a
          href="/"
          className="mt-4 inline-block px-4 py-2 text-white bg-slate-600 hover:bg-slate-60000 no-underline rounded-md"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
