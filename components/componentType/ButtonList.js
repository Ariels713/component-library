import React from "react";

export default function ButtonList() {
  return (
    <div className="pb-5 border-gray-200 ">
      <h3 className="text-sm leading-6 font-medium text-gray-900 mb-2">
        Buttons
      </h3>
      <ul className="text-gray-600 space-y-2 text-sm font-medium">
        <li>
          <a href="#">
            <span className="transition hover:text-white hover:bg-gradient-to-r from-[#2594D1] to-[#d12594] rounded-sm duration-500 ease-in-out px-1 -mx-1">
              Classic
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="transition hover:text-white hover:bg-gradient-to-r from-[#2594D1] to-[#d12594] rounded-sm duration-500 ease-in-out px-1 -mx-1">
              80'x
            </span>
          </a>
        </li>
        <li>
          <a href="#">
            <span className="transition hover:text-white hover:bg-gradient-to-r from-[#2594D1] to-[#d12594] rounded-sm duration-500 ease-in-out px-1 -mx-1">
              Nike
            </span>
          </a>
        </li>
      </ul>
    </div>
  );
}
