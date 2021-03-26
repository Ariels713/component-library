import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import CodeSnippedDropDown from "../../CodeSnippedDropDown";

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
      <div className="mt-4 w-full h-36 bg-gray-300 flex items-center justify-center rounded-sm  ">
        <div>
          <button className=" border-4 border-[#754c9a] bg-[#8558ad] py-3 px-6 rounded-sm shadow-md  hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8558ad] transform hover:-translate-y-8 transition duration-200">
            {" "}
            <span className="border-2 border-[#754c9a] border-opacity-50 rounded-full py-2 px-8 text-gray-200 font-semibold text-xl shadow-inner bg-[#8f65b3]">
              Power
            </span>{" "}
          </button>
        </div>
      </div>
      <CodeSnippedDropDown
        codeSnippet={buttonCode}
        buttonTitle={"SNES Button Code Snippet"}
      />
    </>
  );
}
