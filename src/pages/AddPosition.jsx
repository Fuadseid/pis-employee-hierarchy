import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  setDescription,
  setName,
  setParentId,
} from "../redux/slices/postionSlice";
import { addPostion, fetchpersonandpeople } from "../services/api";

const AddPosition = () => {
  const dispatch = useDispatch();
  const { positions, parentId, description, name } = useSelector(
    (state) => state.postion
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const exists = positions.some(
      (position) => position.name.toLowerCase() === name.toLowerCase()
    );

    if (exists) {
      alert("This position already exists.");
      return;
    }

    const positionData = {
      name,
      description,
      parentId: parentId ? parentId : null,
    };

    try {
      const response = await addPostion(positionData);

      if (response.ok) {
        const result = await response.json();
        console.log("Position added:", result);
        alert("Position added successfully!");
        dispatch(setName(""));
        dispatch(setDescription(""));
        dispatch(setParentId(""));
      } else {
        alert("Failed to add position.");
        return console.error("Error adding position:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding position.");
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-16 consistent-styling">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="/images/employee.jpg"
          className="hidden md:block w-[50%] md:w-[30%] lg:w-[20%] h-auto md:mr-10 consistent-styling"
          alt="Employee"
        />

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="p-6 bg-[#e4f5e0] rounded-lg shadow-lg w-[50%] max-w-lg mt-10 md:mt-0 md:mr-20 consistent-styling"
        >
          <h1 className="text-center font-light text-xl mb-6 consistent-styling">
            Add Position
          </h1>

          <div className="mb-6 consistent-styling">
            <input
              type="text"
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
              placeholder="Position Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600 consistent-styling"
              required
            />
          </div>

          <div className="mb-6 consistent-styling">
            <textarea
              value={description}
              onChange={(e) => dispatch(setDescription(e.target.value))}
              placeholder="Description"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600 consistent-styling"
              required
            />
          </div>

          <div className="mb-6 consistent-styling">
            <select
              value={parentId}
              onChange={(e) => dispatch(setParentId(e.target.value))}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600 consistent-styling"
            >
              <option defaultValue={true}>Select Parent Position</option>
              {positions.map((position) => (
                <option key={position.id} value={position.id}>
                  {position.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-lime-700 w-full hover:bg-lime-900 transform hover:scale-110 transition duration-500 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500 consistent-styling"
          >
            Add Position
          </button>
        </motion.form>
      </div>
    </>
  );
};

export default AddPosition;
