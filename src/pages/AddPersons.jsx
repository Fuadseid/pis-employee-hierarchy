import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setPositions,
  setSelectedPositionId,
} from "../redux/slices/postionSlice";
import { addperson, fetchpersonandpeople } from "../services/api";

function AddPersons() {
  const dispatch = useDispatch();
  const { positions, selectedPositionId } = useSelector(
    (state) => state.postion
  );

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const datas = await addperson(data, selectedPositionId);
      console.log(datas);
      reset();
      dispatch(setSelectedPositionId(null));
    } catch (err) {
      throw new Error(err);
    }
  };

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
    <>
      <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-16">
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src="/images/employee.jpg"
          className="hidden md:block w-[50%] md:w-[30%] lg:w-[20%] h-auto md:mr-10"
          alt="Employee"
        />

        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="p-6 bg-green-200 rounded-lg shadow-lg w-[50%] max-w-lg mt-10 md:mt-0 md:mr-20"
        >
          <h1 className="text-center font-black text-2xl mb-6">
            Employee Registration
          </h1>

          <div className="mb-6">
            <input
              type="text"
              {...register("name", {
                required: "This UserName is Required",
                minLength: 4,
              })}
              placeholder="Full Name"
              className={`w-full p-3 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">
                Please insert your full name
              </p>
            )}
          </div>

          <div className="mb-6">
            <textarea
              placeholder="Description"
              id="description"
              {...register("description", {
                required: "This is Required",
                minLength: 4,
                maxLength: 200,
              })}
              className={`w-full p-3 border-none rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600 ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="text-red-600 text-sm mt-1">
                Please insert a description
              </p>
            )}
          </div>

          <div className="mb-6">
            <select
              {...register("option", { required: true })}
              className="w-full p-2 border-none uppercase  rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600"
              onChange={(e) => dispatch(setSelectedPositionId(e.target.value))}
            >
              <option defaultValue={true} disabled selected>
                Select a Position
              </option>
              {positions.map((position) => (
                <option
                  key={position.id}
                  value={position.id}
                  className="font-semibold"
                >
                  {position.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-green-500 w-full border-none cursor-pointer hover:bg-green-400 transform hover:scale-110 transition duration-500 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </>
  );
}

export default AddPersons;
