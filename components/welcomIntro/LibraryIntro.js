import React from "react";
import SnesButton from "../buttons/80sButtons/SnesButton";
export default function LibraryIntro() {
  return (
    <>
      <h1 className="mx-0 mt-0 mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900">
        Getting start with <span className="text-[#d12594]">EM</span> Coponent
        Library
      </h1>
      <p className="mx-0 mt-0 mb-2 text-2xl tracking-tight leading-8 text-gray-600">
        All EM components are built using Taillwind CSS v 2.0+
      </p>
      <div className="border border-[#2594D1] rounded-md  bg-[#2594D1] bg-opacity-20  ">
        <p className="text-base mx-2 my-2 text-[#2594D1]">
          The EM Component library's intended uses are for React and Next JS.{" "}
        </p>
      </div>
      <div className="space-y-4 mt-8 text-gray-900">
        <h1 className="text-4xl font-black">Getting Started</h1>
        <p className="">
          <span className="font-black text-lg text-[#d12594]">EM</span> is
          simple to use. Take a look at the left column, you'll find a list of
          elements I've built and used on many projects. Some elements may have
          a variety of styles, and some may have one.{" "}
        </p>
        <p>
          Below is a sample elements. Some elements require javascript and or
          state (Look for a JS or State label) most don't. To use the Element,
          click the icon on the top right of the code block, and it'll be added
          to your clipboard (copied) for you. Once you've copied it, add it to
          your code!
        </p>
      </div>
      <div className="space-y-4 mt-8 text-gray-900 border-t-2 ">
        <h1 className="text-4xl font-black mt-8 -mb-4">80's Buttons</h1>
        <p className="text-gray-500 text-base">
          You know how to push my buttons.{" "}
        </p>
      </div>
      <div className="mt-2">
        <p className="font-semibold text-xl">The NES Collection</p>
      </div>
      <SnesButton />
    </>
  );
}

// transition hover:text-white hover:bg-gradient-to-r from-[#2594D1] to-[]
