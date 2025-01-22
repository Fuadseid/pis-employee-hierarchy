import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
const TreeView = () => {
  const [positions, setPositions] = useState(null);
  const [people, setPeople] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function fetchDatas() {
      try {
        const [positionsData, peopleData] = await Promise.all([
          axios.get(
            "https://6789fbc8dd587da7ac284cc5.mockapi.io/api/v1/position"
          ),
          axios.get(
            "https://6789fbc8dd587da7ac284cc5.mockapi.io/api/v1/people"
          ),
        ]);

        setPositions(positionsData.data);
        setPeople(peopleData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDatas();
  }, [positions, people, setPositions]);
  const hadledelete = async (id) => {
    const data = await axios.delete(
      `https://6789fbc8dd587da7ac284cc5.mockapi.io/api/v1/people/${id}`
    );
    console.log(data);
  };
  const renderTree = (parentId) => {
    return positions
      .filter((position) => position.parentId == parentId)
      .map((position) => (
        <li
          key={position.id}
          className="w-[50%] flex flex-col space-y-1  bg-gray-500 px-5 py-4 rounded-2xl"
        >
          <div className="flex min-w-max font-mono">
            <span className="text-gray-200  text-lg font-bold shadow-lg px-6">
              {position.name == "CEO" ? (
                <span className="">Ⓜ️{position.name}</span>
              ) : (
                <span>{position.name}</span>
              )}{" "}
            </span>
          </div>

          <ul className="list-none">
            {show &&
              people
                .filter(
                  (person) => Number(person.parentId) == Number(position.id)
                )
                .map((person) => (
                  <li key={person.id}>
                    <div className="flex space-x-5 w-max space-y-3">
                      <span className="flex justify-center items-center text-md font-semibold font-mono text-gray-300">
                        {"👨"}
                        {person.name}
                      </span>
                      <button
                        onClick={() => console.log(` ${person.id}`)}
                        className=" bg-green-500 px-3 py-1 rounded-md font-bold text-white border-none cursor-pointer"
                      >
                        update
                      </button>
                      <button
                        onClick={() => hadledelete(person.id)}
                        className=" bg-red-500 px-3 py-1 rounded-md font-bold text-white border-none cursor-pointer"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                ))}

            {renderTree(position.id)}
          </ul>
        </li>
      ));
  };

  if (loading) {
    return <Loader />;
  }

  if (!positions || !people) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <div className=" absolute top-24 left-20 ">
        <span
          onClick={() => setShow(!show)}
          className="bg-black text-white px-3 py-2 rounded-lg cursor-pointer "
        >
          {show ? "hide employe🦯" : "show employes 👁️"}
        </span>
      </div>
      <ul className="flex justify-center items-center h-screen bg-gray-300  ">
        {renderTree(null)}{" "}
      </ul>
    </div>
  );
};

export default TreeView;
