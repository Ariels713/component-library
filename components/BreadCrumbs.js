import React from "react";

export default function BreadCrumbs() {
  return (
    <>
      <div className="pb-5 border-b border-gray-200">
        <h3 className="text-base leading-6 font-medium text-gray-900 mb-2">
          Breadcrumbs
        </h3>
        <ul className="text-gray-700 space-y-2 ">
          <li>Classic</li>
          <li>Arcade</li>
          <li>Apocolpyse</li>
        </ul>
      </div>
    </>
  );
}
