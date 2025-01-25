import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchpersonandpeople } from "../services/api";
import { setPositions } from "../redux/slices/postionSlice";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchData() {
      try {
        const [positionsData] = await fetchpersonandpeople();
        dispatch(setPositions(positionsData.data));
      } catch (err) {
        console.error("Error fetching positions:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="bg-gradient-to-br from-green-50 via-lime-100 to-green-200 min-h-screen flex flex-col items-center justify-center p-6">
      {/* Logo Section */}
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        src="/images/perago2.webp"
        alt="LOGO"
        className="w-36 mb-6 rounded-full shadow-md border border-green-300"
      />

      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-green-700 text-center mb-8"
      >
        Welcome to Your Management Portal
      </motion.h1>

      {/* Subtitle Section */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-lg md:text-xl text-gray-700 text-center mb-10 max-w-3xl bg-white p-4 rounded-lg shadow-sm border border-gray-200"
      >
        Effortlessly manage positions, employees, and organizational data with a
        user-friendly interface designed for simplicity and power.
      </motion.p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {/* Add Position Card */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white shadow-lg rounded-xl p-10 text-center transform transition duration-500 hover:shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-green-800 mb-4">
            Add Position
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Create and manage organizational positions seamlessly.
          </p>
          <Link
            to="/add-postion"
            className="inline-block bg-green-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300 no-underline"
          >
            Go to Add Position
          </Link>
        </motion.div>

        {/* Employee Registration Card */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white shadow-lg rounded-xl p-10 text-center transform transition duration-500 hover:shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-green-800 mb-4">
            Employee Registration
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Register new employees and assign them to positions.
          </p>
          <Link
            to="/form"
            className="inline-block bg-green-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300 no-underline"
          >
            Go to Employee Form
          </Link>
        </motion.div>

        {/* Tree View Card */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white shadow-lg rounded-xl p-10 text-center transform transition duration-500 hover:shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-green-800 mb-4">Tree View</h3>
          <p className="text-gray-600 mb-6 text-lg">
            Explore the organizational structure in a tree hierarchy.
          </p>
          <Link
            to="/treeview"
            className="inline-block bg-green-500 text-white font-semibold px-8 py-3 rounded-lg shadow hover:bg-green-600 transition duration-300 no-underline"
          >
            Go to Tree View
          </Link>
        </motion.div>
      </div>

      {/* Footer Section */}
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
