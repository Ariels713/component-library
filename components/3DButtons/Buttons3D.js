import React from "react";

export default function Buttons3D() {
  return (
    <div className="mt-4 max-w-2xl h-48 bg-gray-900 flex items-center justify-center rounded-sm relative ">
      <button className="bg-[#a30036] rounded-lg border-none p-0 cursor-pointer ">
        <span className=" tracking-wide text-white font-extrabold text-lg bg-[#ed003b] py-3 px-10 rounded-lg transition transform -translate-y-6 focus:border-current ">
          Push Me
        </span>
      </button>
    </div>
  );
}
