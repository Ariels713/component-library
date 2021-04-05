import React from "react";

export default function nesButtons() {
  return (
    <div className="mt-4 max-w-2xl h-36 bg-gray-300 flex items-center justify-center rounded-sm relative ">
      {/* <div className="bg-[#8558ad] opacity-75 w-[180px] h-[66px] absolute top-11 left-[180px]  shadow-inner"></div> */}
      <button className=" border-4 border-[#754c9a] bg-[#8558ad] py-3 px-6 rounded-sm shadow-md  hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8558ad] transform hover:-translate-y-8 transition duration-200">
        {" "}
        <span className="border-2 border-[#754c9a] border-opacity-50 rounded-full py-2 px-8 text-gray-200 font-semibold text-xl shadow-inner bg-[#8f65b3]">
          Power
        </span>{" "}
      </button>
    </div>
  );
}
