import React from "react";

export default function Buttons() {
  return (
    <div className="border-gray-500 w-full border-2 rounded-md py-4 px-4 mt-4 flex justify-center space-x-4">
      <button className="border-transparent bg-[#264653] text-white px-2.5 py-1.5 rounded-sm font-semibold text-xs hover:bg-[#4C8BA4] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4C8BA4]">
        Push Me
      </button>
      <button className="border-transparent bg-[#2a9d8f] text-white py-2 px-3 rounded-sm font-semibold text-sm hover:bg-[#86DFD5] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#86DFD5]">
        Push Me
      </button>
      <button className="border-transparent bg-[#E9C46A] text-white py-2.5 px-3.5 rounded-sm font-semibold text-base hover:bg-[#F5E5BC] hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F5E5BC]">
        Push Me
      </button>
      <button className="border-transparent bg-[#F4A261] text-white py-1.5 px-2.5 rounded-sm font-semibold text-md hover:bg-[#F7BC8D] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F7BC8D]">
        Push Me
      </button>
      <button className="border-transparent bg-[#E76F51] text-white py-1.5 px-2.5 rounded-sm font-semibold text-lg hover:bg-[#EF9E8A] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#EF9E8A]">
        Push Me
      </button>
    </div>
  );
}
