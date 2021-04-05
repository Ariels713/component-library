import React from "react";
import Andriod from "../../components/chatBoxes/Andriod";
import CodeSnippedDropDown from "../../components/CodeSnippedDropDown";
import { andriodCodeSnippet } from "../../codeSnippets/chatboxes/andriod";
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
                <h1 className="text-4xl font-black">Chat Boxes </h1>
                <p className="">
                  You can animate these{" "}
                  <span className="font-black text-lg text-[#d12594]">
                    Chatboxes
                  </span>{" "}
                  in multiple different ways to simulate a live chat.
                </p>
              </div>
              <Andriod />
              <CodeSnippedDropDown
                codeSnippet={andriodCodeSnippet}
                buttonTitle={"Chat Box. Dark Mode"}
              />{" "}
            </div>
          </div>
          <div className=" px-4 sm:px-6 lg:px-8">
            {/* <div className="h-full">
              <div className="space-y-4 mt-8 text-gray-900">
                <p className="">
                  The{" "}
                  <span className="font-black text-lg text-[#d12594]">
                    DuckHunt
                  </span>{" "}
                  was used for a "Rent Now" button for dynamically loaded pages
                  on Next Js.{" "}
                </p>
              </div> */}
            {/* <DuckHuntButton />
              <CodeSnippedDropDown
                codeSnippet={duckHuntButton}
                buttonTitle={"Duckhunt Button"}
              /> */}
            {/* </div> */}
          </div>
        </main>
        <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 pr-8">
          {/* <!-- Start secondary column (hidden on smaller screens) --> */}
          <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div className="h-full flex justify-start ">
              <p>Components</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
