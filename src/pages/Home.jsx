import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-green-100 via-lime-200 to-green-300 min-h-screen flex flex-col items-center justify-center p-6">
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        src="/images/perago2.webp"
        alt="LOGO"
        className="w-40 mb-6"
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-8"
      >
        Welcome to Your Management Portal
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-lg md:text-xl text-gray-700 text-center mb-10"
      >
        Effortlessly manage positions, employees, and hierarchical data with a
        user-friendly interface.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-500 hover:shadow-xl"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Add Position
          </h3>
          <p className="text-gray-600 mb-4">
            Create and manage organizational positions seamlessly.
          </p>
          <Link
            to="/add-postion"
            className="text-lime-700 font-semibold hover:text-lime-900"
          >
            Go to Add Position
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-500 hover:shadow-xl"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Employee Registration
          </h3>
          <p className="text-gray-600 mb-4">
            Register new employees and assign them to positions.
          </p>
          <Link
            to="/form"
            className="text-lime-700 font-semibold hover:text-lime-900"
          >
            Go to Employee Form
          </Link>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white shadow-lg rounded-lg p-6 text-center transform transition duration-500 hover:shadow-xl"
        >
          <h3 className="text-xl font-semibold text-green-700 mb-2">
            Tree View
          </h3>
          <p className="text-gray-600 mb-4">
            Explore the organizational structure in a tree hierarchy.
          </p>
          <Link
            to="/treeview"
            className="text-lime-700 font-semibold hover:text-lime-900"
          >
            Go to Tree View
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-16 text-center"
      >
        <p className="text-gray-500 text-sm">
          Need help? Visit our support page or contact us for assistance.
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
