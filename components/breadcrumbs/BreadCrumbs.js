import React from "react";

export default function BreadCrumbs() {
  return (
    <>
      <div className="pb-5">
        <h3 className="text-sm leading-6 font-medium text-gray-900 mb-2">
          Breadcrumbs
        </h3>
        <ul className="text-gray-600 space-y-2 text-sm font-medium">
          <li>
            <a href="#">
              <span className="transition hover:text-white hover:bg-gradient-to-r from-[#2594D1] to-[#d12594] rounded-sm duration-500 ease-in-out px-1 -mx-1">
                Classic
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
