import React from "react";
import Buttons3D from "../../components/3DButtons/Buttons3D";
import CodeSnippedDropDown from "../../components/CodeSnippedDropDown";
import { butons3DCodeSnippet } from "../../codeSnippets/3dButtons/butons3DCodeSnippet";
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
                <h1 className="text-4xl font-black">The 3D Collection </h1>
                <p className="">
                  The{" "}
                  <span className="font-black text-lg text-[#d12594]">3D</span>{" "}
                  Collection was inspired by Josh Comeau{" "}
                  <span>
                    <a
                      className="text-[#d12594] underline"
                      href="https://www.joshwcomeau.com/animation/3d-button/"
                      target="_blank"
                    >
                      blog post
                    </a>
                    . The Magical 3D button has some pretty elegent solutions to
                    accomplish the soft push feel.{" "}
                  </span>{" "}
                </p>
              </div>
              <Buttons3D />
              <CodeSnippedDropDown
                codeSnippet={butons3DCodeSnippet}
                buttonTitle={"Josh Comeau's Button"}
              />
            </div>
          </div>
          <div className=" px-4 sm:px-6 lg:px-8">
            <div className="h-full">
              <div className="space-y-4 mt-8 text-gray-900">
                <p className="">
                  The{" "}
                  <span className="font-black text-lg text-[#d12594]">
                    Josh Comeau
                  </span>{" "}
                  Magical 3D button has some pretty elegent solutions to
                  accomplish the soft push feel.{" "}
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
