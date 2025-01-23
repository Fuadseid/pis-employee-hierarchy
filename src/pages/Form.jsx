import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

function Form() {
  const [positions, setPositions] = useState([]);
  const [selectedPositionId, setSelectedPositionId] = useState(null);
  const Person_Url = "https://6789fbc8dd587da7ac284cc5.mockapi.io/api/v1/people";
  const Position_Url = "https://6789fbc8dd587da7ac284cc5.mockapi.io/api/v1/position";

  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    axios.post(Person_Url, {
      name: data.name,
      description: data.description,
      parentId: selectedPositionId,
    })
    .then((response) => {
      console.log("Person added:", response.data);
    })
    .catch((err) => {
      console.error("Error adding person:", err);
    });
    reset();
    setSelectedPositionId(null);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(Position_Url);
        const datas = await res.json();
        setPositions(datas);
      } catch (err) {
        console.error("Error fetching positions:", err);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <img
        className="w-30 h-10 mx-auto mt-[5%] md:mt-[3%]"
        src="/images/perago2.webp"
        alt="LOGO"
      />

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
          className="p-6 bg-[#e4f5e0] rounded-lg shadow-lg w-[50%] max-w-lg mt-10 md:mt-0 md:mr-20"
        >
          <h1 className="text-center font-light text-xl mb-6">Employee Registration</h1>

          <div className="mb-6">
            <input
              type="text"
              {...register("name", {
                required: "This UserName is Required",
                minLength: 4,
              })}
              placeholder="Full Name"
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">Please insert your full name</p>
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
              className={`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600 ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.description && (
              <p className="text-red-600 text-sm mt-1">Please insert a description</p>
            )}
          </div>

          <div className="mb-6">
            <select
              {...register("option", { required: true })}
              className="w-full p-2 border uppercase rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600"
              onChange={(e) => setSelectedPositionId(e.target.value)}
            >
              <option value="" disabled selected>
                Select a Position
              </option>
              {positions.map((position) => (
                <option key={position.id} value={position.id}>
                  {position.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-lime-700 w-full hover:bg-lime-900 transform hover:scale-110 transition duration-500 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
          >
            Submit
          </button>
        </motion.form>
      </div>
    </>
  );
}

export default Form;
