import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import CodeSnippedDropDown from "../../components/CodeSnippedDropDown";
import {
  snesButtonCode,
  duckHuntButton,
} from "../../codeSnippets/nesCollection/codeSnippets";
import NESButtons from "../../components/nes-collection/NESButtons";
import DuckHuntButton from "../../components/nes-collection/DuckHuntButton";

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
              <NESButtons />
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
              <DuckHuntButton />
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
            <div className="h-full flex justify-start ">
              <h3>Variations:</h3>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
