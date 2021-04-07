import React from "react";
import RegistrationFormDark from "../../components/forms/RegistrationFormDark";
import CodeSnippedDropDown from "../../components/CodeSnippedDropDown";
import { registrationFormDark } from "../../codeSnippets/forms/RegistrationFormDark";
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
                <h1 className="text-4xl font-black">Forms </h1>
                <p className="">
                  The{" "}
                  <span className="font-black text-lg text-[#d12594]">
                    Forms
                  </span>{" "}
                  below are all functioning as a working form. Keep in mind you
                  will need to add state to any form in order to get it working
                  properly.
                </p>
              </div>
              <RegistrationFormDark />
              <CodeSnippedDropDown
                codeSnippet={registrationFormDark}
                buttonTitle={"2 Column Registration Form"}
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
        {/* <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 pr-8">
          <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div className="h-full flex justify-start ">
              <p>Components</p>
            </div>
          </div>
        </aside> */}
      </div>
    </>
  );
}
