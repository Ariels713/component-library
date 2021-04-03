import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import CodeSnippedDropDown from "../../components/CodeSnippedDropDown";
// import LibraryIntro from "../welcomIntro";

const buttonCode = `
<div className="flex items-center justify-start">
  <button className="border-4 border-[#754c9a] 
    bg-[#8558ad] py-3 px-6 rounded-sm shadow-md  
    hover:shadow-2xl focus:outline-none focus:ring-2 
    focus:ring-offset-2 focus:ring-[#8558ad] transform 
    hover:-translate-y-8 transition duration-200">
  {" "}
  <span className="border-2 border-[#754c9a] 
    border-opacity-50 rounded-full py-2 px-8 
    text-gray-200 font-semibold text-xl shadow-inner 
    bg-[#8f65b3]">
      Power
  </span>{" "}
  </button>
</div>
`.trim();

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
                <h1 className="text-4xl font-black">The NES Collection.</h1>
                <p className="">
                  <span className="font-black text-lg text-[#d12594]">EM</span>{" "}
                  is simple to use. Take a look at the left column, you'll find
                  a list of elements I've built and used on many projects. Some
                  elements may have a variety of styles, and some may have one.{" "}
                </p>
                <p>
                  Below is a sample elements. Some elements require javascript
                  and or state (Look for a JS or State label) most don't. To use
                  the Element, click the icon on the top right of the code
                  block, and it'll be added to your clipboard (copied) for you.
                  Once you've copied it, add it to your code!
                </p>
              </div>
              <div className="mt-4 max-w-2xl h-36 bg-gray-300 flex items-center justify-center rounded-sm  ">
                <div>
                  <button className=" border-4 border-[#754c9a] bg-[#8558ad] py-3 px-6 rounded-sm shadow-md  hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8558ad] transform hover:-translate-y-8 transition duration-200">
                    {" "}
                    <span className="border-2 border-[#754c9a] border-opacity-50 rounded-full py-2 px-8 text-gray-200 font-semibold text-xl shadow-inner bg-[#8f65b3]">
                      Power UP
                    </span>{" "}
                  </button>
                </div>
              </div>
              <CodeSnippedDropDown
                codeSnippet={buttonCode}
                buttonTitle={"SNES Button Code Snippet"}
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
