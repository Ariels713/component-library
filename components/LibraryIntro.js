import React, { useState } from "react";

export default function LibraryIntro() {
  const [snes, setSnes] = useState(false);
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
          Below are some sample elements, some use instructions, and the element
          itself. If you like it, copy and paste the code over to your project,
          it's that simple.
        </p>
      </div>
      <div className="space-y-4 mt-8 text-gray-900 border-t-2 ">
        <h1 className="text-4xl font-black mt-8 -mb-4">80's Buttons</h1>
        <p className="text-gray-500 text-base">
          You know how to push my buttons.{" "}
        </p>
      </div>
      <div className="space-y-4 mt-4 text-gray-900 ">
        <p className="font-semibold text-xl">The NES Collection</p>
        <div className="flex items-center justify-start">
          <div className=" absolute bottom-[125px] bg-gray-800 opacity-10   rounded-sm shadow-lg w-[180px] h-[30px]"></div>
          <button className=" border-4 border-[#754c9a] bg-[#8558ad] py-3 px-6 rounded-sm shadow-md  hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8558ad] transform hover:-translate-y-8 transition duration-200 ">
            {" "}
            <span className="border-2 border-[#754c9a] border-opacity-50 rounded-full py-2 px-8 text-gray-200 font-semibold text-xl shadow-inner bg-[#8f65b3]">
              Power
            </span>{" "}
          </button>
        </div>
      </div>
      <div className="bg-[#04293A] w-full h-96 rounded mt-4">
        <pre class="overflow-x-auto p-6 m-0 font-mono text-sm leading-snug text-white whitespace-pre bg-black">
          <code class="text-base leading-5 whitespace-pre">
            <span class="text-sm text-purple-400">
              <span class="whitespace-pre">
                <span class="text-blue-200">&lt;</span>div
              </span>{" "}
              <span class="text-teal-400">class</span>
              <span class="text-yellow-400">
                <span class="text-blue-200">=</span>
                <span class="text-blue-200">"</span>
                <span class="py-px px-1 my-0 -mx-1 whitespace-pre bg-teal-100 rounded-sm">
                  select-none
                </span>{" "}
                ...<span class="text-blue-200">"</span>
              </span>
              <span class="text-blue-200">&gt;</span>
            </span>
            This text is not selectable
            <span class="text-sm text-purple-400">
              <span class="whitespace-pre">
                <span class="text-blue-200">&lt;/</span>div
              </span>
              <span class="text-blue-200">&gt;</span>
            </span>
          </code>
        </pre>
      </div>
    </>
  );
}

// transition hover:text-white hover:bg-gradient-to-r from-[#2594D1] to-[]
