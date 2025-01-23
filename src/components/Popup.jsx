import React from "react";

const Popup = ({ hadleclose, hadleupdate, selecteduser, setselecteduser }) => {
  return (
    <div className="w-full h-screen absolute top-0 right-0 backdrop-blur-2xl  flex justify-center items-center  ">
      <div className="bg-gray-300  max-w-[50%] h-[60%] flex flex-col justify-evenly items-center rounded-lg p-5 sm:w-[40%] shadow-xl">
        <form className="flex flex-col w-[80%] space-y-7 justify-center h-[80%]">
          <div>
            <label className="text-md font-bold">Name</label>
            <input
              type="text"
              className="w-full px-2 py-2 rounded-md border-none mt-3 "
              placeholder="please enter the name"
              value={selecteduser.name}
              onChange={(e) =>
                setselecteduser({ ...selecteduser, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="text-md font-bold">description</label>
            <input
              type="text"
              className="w-full px-2 py-2 rounded-md border-none mt-3"
              placeholder="please enter the description"
              value={selecteduser.description}
              onChange={(e) =>
                setselecteduser({
                  ...selecteduser,
                  description: e.target.value,
                })
              }
            />
          </div>

          <button
            className="w-[100%] self-center bg-black px-3 py-3 border-none text-white rounded-md mt-3"
            onClick={(e) => hadleupdate(e)}
          >
            update
          </button>
        </form>
        <button
          onClick={() => hadleclose(null)}
          className="bg-green-500 px-5 py-2 self-end  font-bold border-none rounded-md cursor-pointer text-white"
        >
          close
        </button>
      </div>
    </div>
  );
};

export default Popup;
