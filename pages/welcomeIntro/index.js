import React from "react";
import CreatorCard from "../../components/creatorCard/CreatorCard";
import NesDemo from "../../components/nesDemo";

export default function LibraryIntro() {
  return (
    <>
      <div className="flex-1 relative z-0 flex overflow-hidden ml-16 mt-6">
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabIndex="0"
        >
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="h-full">
              <div>
                <div>
                  <h1 className="mx-0 mt-0 mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900">
                    Getting start with{" "}
                    <span className="text-[#d12594]">EM</span> Coponent Library
                  </h1>
                  <p className="mx-0 mt-0 mb-2 text-2xl tracking-tight leading-8 text-gray-600">
                    All EM components are built using Taillwind CSS v 2.0+
                  </p>
                  <div className="border border-[#2594D1] rounded-md  bg-[#2594D1] bg-opacity-20  ">
                    <p className="text-base mx-2 my-2 text-[#2594D1]">
                      The EM Component library's intended uses are for React and
                      Next JS.{" "}
                    </p>
                  </div>
                  <div className="space-y-4 mt-8 text-gray-900">
                    <h1 className="text-4xl font-black">Getting Started</h1>
                    <p className="">
                      <span className="font-black text-lg text-[#d12594]">
                        EM
                      </span>{" "}
                      is simple to use. Take a look at the left column, you'll
                      find a list of elements I've built and used on many
                      projects. Some elements may have a variety of styles, and
                      some may have one.{" "}
                    </p>
                    <p>
                      Below is a sample elements. Some elements require
                      javascript and or state (Look for a JS or State label)
                      most don't. To use the Element, click the icon on the top
                      right of the code block, and it'll be added to your
                      clipboard (copied) for you. Once you've copied it, add it
                      to your code!
                    </p>
                  </div>
                  <div className="space-y-4 mt-8 text-gray-900 border-t-2 ">
                    <h1 className="text-4xl font-black mt-8 -mb-4">
                      80's Buttons
                    </h1>
                    <p className="text-gray-500 text-base">
                      You know how to push my buttons.{" "}
                    </p>
                  </div>
                  <div className="mt-2">
                    <p className="font-semibold text-xl">The NES Collection</p>
                  </div>
                  <NesDemo />
                </div>
              </div>
            </div>
          </div>
        </main>
        <aside className="hidden relative xl:flex xl:flex-col flex-shrink-0 w-96 -">
          {/* <!-- Start secondary column (hidden on smaller screens) --> */}
          <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
            <div className="h-full ">Put Content here</div>
          </div>
        </aside>
      </div>
    </>
  );
}
