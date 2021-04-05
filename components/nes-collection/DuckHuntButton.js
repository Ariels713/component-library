import React from "react";

export default function DuckHuntButton() {
  return (
    <div className="mt-4 max-w-2xl h-48 bg-gray-900 flex items-center justify-center rounded-sm relative ">
      <div className="bg-gray-900 transform -skew-y-12 hover:border-b-2 border-red-500  ">
        <button className="flex flex-col border-2 border-[#E5E977] rounded-sm py-1 px-1">
          <span className=" text-[#F21327] border-2 border-[#f21327] rounded-full py-1 px-2 text-xs ">
            Nintendo
          </span>
          {/* Variation inline-Block */}
          <span className="block text-[#F64E00] font-bold uppercase text-3xl">
            DuckHunt
          </span>
          <div className="flex w-full justify-between">
            <div className="flex flex-col align-middle">
              <span className="block text-[#E5E977] font-bold uppercase text-xs">
                Entertainment
              </span>
              <span className="block text-[#E5E977] font-bold uppercase text-xs">
                system
              </span>
            </div>
            <span className="block text-white text-xl font-bold uppercase shadow-lg">
              $3.00
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
