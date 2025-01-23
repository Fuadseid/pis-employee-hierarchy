import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AddPosition = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [parentId, setParentId] = useState("");
  const [positions, setPositions] = useState([]);

  // Fetch existing positions
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch(
          "https://6789fbc8dd587da7ac284cc5.mockapi.io/api/v1/position"
        );
        const data = await response.json();
        setPositions(data);
      } catch (error) {
        console.error("Error fetching positions:", error);
      }
    };

    fetchPositions();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const positionData = {
      name,
      description,
      parentId: parentId ? parentId : null,
    };

    try {
      const response = await fetch(
        "https://6789fbc8dd587da7ac284cc5.mockapi.io/api/v1/position",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(positionData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Position added:", result);
        alert("Position added successfully!");
        // Reset form fields
        setName("");
        setDescription("");
        setParentId("");
      } else {
        console.error("Error adding position:", response.statusText);
        alert("Failed to add position.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while adding position.");
    }
  };

  return (
    <>
      <img
        className="w-30 h-10 mx-auto mt-[5%] md:mt-[3%] consistent-styling"
        src="/images/perago2.webp"
        alt="LOGO"
      />

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
              onChange={(e) => setName(e.target.value)}
              placeholder="Position Name"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600 consistent-styling"
              required
            />
          </div>

          <div className="mb-6 consistent-styling">
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600 consistent-styling"
              required
            />
          </div>

          <div className="mb-6 consistent-styling">
            <select
              value={parentId}
              onChange={(e) => setParentId(e.target.value)}
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600 consistent-styling"
            >
              <option value="">Select Parent Position</option>
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
