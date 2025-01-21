import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors)
  const onSubmit = (data) =>  console.log(data);
  



return (
    <>
    <img className="w-30 h-10 ml-[45%] mt-[5%]" src="/images/perago2.webp" alt="LOGO" />
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-8 bg-[#e4f5e0] rounded-lg shadow-lg max-w-lg mt-[6%] mx-auto"
    >
      <h className='ml-[25%] font-light text-xl'>Employee Registration</h>
      <div className="mb-6 mt-6">
        <input
          type="text"
          {...register("name",{required:'This UserName Requiered',minLength:4})}
          placeholder="Full Name"
          className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600 ${errors.name?'border-red-500':'border-gray-300 '}`}
        />
        {errors.name&&<p className="text-red-600">Please Insert Full name</p>}
      </div>

      <div className="mb-6">
        <textarea
        placeholder="Description"
          id="description"
          {...register("description",{required:'This is Requiered',minLength:4,maxLength:200})}
          className={`w-full  p-3 border  ${errors.description?'border-red-500':'border-gray-300 '} border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-600`}
        />
                {errors.description&&<p className="text-red-600">Please insert Description</p>}

        <select {...register("option",{required:true})} className="mt-2 p-2 rounded-md w-44 ">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-lime-700 w-[100%]   hover:bg-lime-900  transform hover:scale-110 transition duration-500 text-white font-semibold py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
      >
        Submit
      </button>
    </form>
    </>
  );
}

export default Form;
