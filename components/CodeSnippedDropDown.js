import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";
export default function CodeSnippedDropDown({ codeSnippen, buttonTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
      <dl className="space-y-6 divide-y divide-gray-200">
        <div className="pt-6">
          <dt className="text-lg">
            {/* <!-- Expand/collapse question button --> */}
            <button
              type="button"
              className="text-left w-full flex justify-between items-start text-gray-400"
              aria-controls="faq-0"
              aria-expanded="false"
            >
              <span className="font-medium text-gray-900">{buttonTitle}</span>
              <span className="ml-6 h-7 flex items-center">
                {/* <!--
                  Expand/collapse icon, toggle classes based on question open state.

                  Heroicon name: outline/chevron-down

                  Open: "-rotate-180", Closed: "rotate-0"
                --> */}
                <svg
                  className={`${
                    isOpen ? "-rotate-180" : "rotate-0"
                  } h-6 w-6 transform`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
          </dt>
          <div className={`${isOpen ? "" : "hidden"}`}>
            <dd className="mt-2 " id="faq-0">
              <div className="bg-[#04293A] py-10 px-2 w-full rounded mt-4 relative">
                <Highlight
                  {...defaultProps}
                  theme={theme}
                  code={codeSnippen}
                  language="jsx"
                >
                  {({
                    className,
                    style,
                    tokens,
                    getLineProps,
                    getTokenProps,
                  }) => (
                    <pre>
                      {tokens.map((line, i) => (
                        <div {...getLineProps({ line, key: i })}>
                          {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                          ))}
                        </div>
                      ))}
                    </pre>
                  )}
                </Highlight>
              </div>
            </dd>
          </div>
        </div>
      </dl>
    </div>
  );
}
