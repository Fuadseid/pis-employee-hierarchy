import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Popup from "../components/Popup";
import {
  DeletePerson,
  deletePerson,
  fetchPerson,
  fetchpersonandpeople,
} from "../services/api";

import {
  addpeoples,
  selectPerson,
  setLoading,
  setOpen,
  setShow,
} from "../redux/slices/peopleSlice";
import { addpostion } from "../redux/slices/postionSlice";

const TreeView = () => {
  const { people, show, isopen, loading } = useSelector(
    (state) => state.people
  );
  const selecteduser = useSelector((state) => state.people.selectedPerson);
  const { postion } = useSelector((state) => state.postion);
  const dispatch = useDispatch();
  const [triger, setTriger] = useState(false);

  const hadledelete = async (id) => {
    try {
      const res = await deletePerson(id);
      setTriger((triger) => !triger);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const startupdate = async (id) => {
    try {
      dispatch(setOpen());
      if (!id) return;
      const data = await fetchPerson(id);
      dispatch(selectPerson(data.data));
    } catch (err) {
      console.log(err);
    }
  };

  const hadleupdate = async (e) => {
    e.preventDefault();
    try {
      const data = await DeletePerson(selecteduser.id, selecteduser);
      console.log(data);
      setTriger((triger) => !triger);
      dispatch(setOpen());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    async function fetchDatas() {
      try {
        const [positionsData, peopleData] = await fetchpersonandpeople();
        dispatch(addpostion(positionsData.data));
        dispatch(addpeoples(peopleData.data));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        dispatch(setLoading());
      }
    }

    fetchDatas();
  }, [triger]);

  const renderTree = (parentId) => {
    return postion
      .filter((position) => position.parentId == parentId)
      .map((position) => (
        <li
          key={position.id}
          className=" sm:w-[50%] flex flex-col space-y-1  bg-gray-500  px-5 py-4 rounded-2xl "
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
                .filter((person) => person.parentId == position.id)
                .map((person) => (
                  <li key={person.id}>
                    <div className="flex space-x-5 w-max space-y-2 pl-5">
                      <span className="flex justify-center items-center text-md font-semibold font-mono text-gray-300">
                        {"👨"}
                        {person.name}
                      </span>
                      <button
                        onClick={() => {
                          startupdate(person.id);
                        }}
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

  if (!postion || !people) {
    return <div>Error loading data</div>;
  }

  return (
    <div>
      <div className=" absolute top-24 left-20 ">
        <span
          onClick={() => dispatch(setShow())}
          className="bg-black text-white px-3 py-2 rounded-lg cursor-pointer "
        >
          {show ? "hide employe" : "show employes 👁️"}
        </span>
      </div>
      <ul className="flex justify-center items-center min-h-max pt-20    ">
        {renderTree(null)}{" "}
      </ul>
      {isopen && (
        <Popup
          isopen={isopen}
          hadleclose={startupdate}
          hadleupdate={hadleupdate}
        />
      )}
    </div>
  );
};

export default TreeView;
