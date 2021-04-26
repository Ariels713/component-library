import React from "react";
import Buttons from "../../components/ buttons/Buttons";

export default function index() {
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
                <h1 className="text-4xl font-black">The Button Collection </h1>
                <p className="">
                  Here are some{" "}
                  <span className="font-black text-lg text-[#d12594]">
                    Classic
                  </span>{" "}
                  buttons, these are easily customized can fit most case uses.
                </p>
              </div>
              <Buttons />
              {/* <CodeSnippedDropDown
                  codeSnippet={butons3DCodeSnippet}
                  buttonTitle={"Josh Comeau's Button"}
                />  */}
            </div>
          </div>
          <div className=" px-4 sm:px-6 lg:px-8">
            <div className="h-full">
              <div className="space-y-4 mt-8 text-gray-900">
                <p className="">
                  The{" "}
                  <span className="font-black text-lg text-[#d12594]">
                    Classic
                  </span>{" "}
                  button styles are my go to buttons when I'm building or
                  prototyping. Enjoy{" "}
                </p>
              </div>
              {/* <DuckHuntButton />
            <CodeSnippedDropDown
              codeSnippet={duckHuntButton}
              buttonTitle={"Duckhunt Button"}
            /> */}
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
