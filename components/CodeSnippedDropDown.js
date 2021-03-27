import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/dracula";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function CodeSnippedDropDown({ codeSnippet, buttonTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  return (
    <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
      <dl className="space-y-6 divide-y divide-gray-200">
        <div className="pt-6 pb-12">
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>
          </dt>
          <div className={`${isOpen ? " mb-10" : "hidden"}`}>
            <dd className="mt-2 " id="faq-0">
              <div className="bg-[#04293A] py-10 px-2 w-full rounded mt-4">
                <div className="relative">
                  <CopyToClipboard text={codeSnippet}>
                    <button onClick={() => setCopied(!copied)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="absolute -top-4 right-6"
                      >
                        <title>document-copy</title>
                        <g strokeWidth="2" fill="#d12594" stroke="#d12594">
                          <path
                            fill="none"
                            stroke="#d12594"
                            strokeLinecap="square"
                            strokeMiterlimit="10"
                            d="M2.66 3.8h16.72v19h-16.72z"
                          ></path>
                          <path
                            fill="none"
                            strokeLinecap="square"
                            strokeMiterlimit="10"
                            d="M4.94 1.52h16.72v19"
                          ></path>
                          <path
                            fill="none"
                            strokeLinecap="square"
                            strokeMiterlimit="10"
                            d="M5.7 8.74h10.64"
                          ></path>
                          <path
                            fill="none"
                            strokeLinecap="square"
                            strokeMiterlimit="10"
                            d="M5.7 11.78h10.64"
                          ></path>
                          <path
                            fill="none"
                            strokeLinecap="square"
                            strokeMiterlimit="10"
                            d="M5.7 14.82h10.64"
                          ></path>
                          <path
                            fill="none"
                            strokeLinecap="square"
                            strokeMiterlimit="10"
                            d="M5.7 17.86h4.18"
                          ></path>
                        </g>
                      </svg>
                    </button>
                  </CopyToClipboard>
                  <span
                    className={`${
                      copied
                        ? "display absolute top-4 right-0 transform -skew-y-12 text-white font-semibold border-2 rounded-sm border-white text-base px-1 py-1"
                        : "hidden"
                    }`}
                  >
                    Copied
                  </span>
                </div>
                <Highlight
                  {...defaultProps}
                  theme={theme}
                  code={codeSnippet}
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
