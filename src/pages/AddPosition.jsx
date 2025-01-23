import React, { useState, useEffect } from "react";

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
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold mb-6 text-green-700">
        Add Position
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="name"
            className="block text-gray-800 text-lg font-medium mb-1"
          >
            Position Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 p-2"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="description"
            className="block text-gray-800 text-lg font-medium mb-1"
          >
            Description:
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 p-2"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="parentId"
            className="block text-gray-800 text-lg font-medium mb-1"
          >
            Parent Position:
          </label>
          <select
            id="parentId"
            value={parentId}
            onChange={(e) => setParentId(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 p-2"
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
          className="w-full bg-green-600 text-white font-bold py-3 rounded hover:bg-green-700 transition duration-200"
        >
          Add Position
        </button>
      </form>
    </div>
  );
};

export default AddPosition;
