import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import CodeSnippedDropDown from "../../components/CodeSnippedDropDown";
import {
  snesButtonCode,
  duckHuntButton,
} from "../../codeSnippets/codeSnippets";

export default function SnesButton() {
  const [snes, setSnes] = useState(false);
  return (
    <>
      <div className="flex-1 relative z-0 flex overflow-hidden ml-16 mt-6">
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="h-full">
              <div className="space-y-4 mt-8 text-gray-900">
                <h1 className="text-4xl font-black">The NES Collection </h1>
                <p className="">
                  The{" "}
                  <span className="font-black text-lg text-[#d12594]">NES</span>{" "}
                  Collection was built for a 8bit Video store I created for a
                  games rental page .{" "}
                </p>
              </div>
              <div className="mt-4 max-w-2xl h-36 bg-gray-300 flex items-center justify-center rounded-sm relative ">
                {/* <div className="bg-[#8558ad] opacity-75 w-[180px] h-[66px] absolute top-11 left-[180px]  shadow-inner"></div> */}
                <button className=" border-4 border-[#754c9a] bg-[#8558ad] py-3 px-6 rounded-sm shadow-md  hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8558ad] transform hover:-translate-y-8 transition duration-200">
                  {" "}
                  <span className="border-2 border-[#754c9a] border-opacity-50 rounded-full py-2 px-8 text-gray-200 font-semibold text-xl shadow-inner bg-[#8f65b3]">
                    Power
                  </span>{" "}
                </button>
              </div>
              <CodeSnippedDropDown
                codeSnippet={snesButtonCode}
                buttonTitle={"SNES Power Button Snippet"}
              />
            </div>
          </div>
          <div className=" px-4 sm:px-6 lg:px-8">
            <div className="h-full">
              <div className="space-y-4 mt-8 text-gray-900">
                <p className="">
                  The{" "}
                  <span className="font-black text-lg text-[#d12594]">
                    DuckHunt
                  </span>{" "}
                  was used for a "Rent Now" button for dynamically loaded pages
                  on Next Js.{" "}
                </p>
              </div>
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
              <CodeSnippedDropDown
                codeSnippet={duckHuntButton}
                buttonTitle={"Duckhunt Button"}
              />
            </div>
          </div>
        </main>
        <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 -">
          {/* <!-- Start secondary column (hidden on smaller screens) --> */}
          <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div className="h-full ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              laboriosam quis tempore nobis voluptas accusantium quod nisi
              repellat rem, maiores soluta debitis necessitatibus. Sint
              voluptates dolores nam quod, doloremque labore!
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
