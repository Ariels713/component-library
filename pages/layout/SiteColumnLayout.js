import React, { useState, useRef } from "react";
import Link from "next/link";
import CreatorCard from "../../components/creatorCard/CreatorCard";

import LibraryIntro from "../welcomeIntro";

export default function SiteColumnLayout() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="relative min-h-screen flex flex-col flex-grow max-w-7xl mx-auto mt-8 px-10">
        <div className="mt-5 flex-grow  flex flex-col">
          <nav className="w-56 space-y-2 max-h-screen">
            <div href="https://arielrodriguez.me/" target="_blank">
              <CreatorCard />
            </div>

            <div>
              <span> </span>
            </div>
            <div className="-mr-6">
              <h5 className="px-3 mx-0 mt-0 mb-3 text-sm font-semibold tracking-wide leading-5 text-left text-gray-900 uppercase lg:text-xs lg:leading-4 lg:mb-3 -ml-6">
                Components
              </h5>

              <h5 className="px-3 mx-0 mt-0 mb-3 text-sm font-semibold tracking-wide leading-5 text-left text-gray-900 uppercase lg:text-xs lg:leading-4 lg:mb-1 -ml-6">
                Buttons
              </h5>

              <ul className="text-gray-600 text-sm -ml-3">
                <li>
                  <Link href="/3Dbuttons">
                    <a
                      className="text-left  cursor-pointer hover:text-gray-900 transition delay-150"
                      href="#"
                    >
                      3D Buttons
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/nesButtons">
                    <a
                      className="text-left  cursor-pointer hover:text-gray-900 transition delay-150"
                      href="#"
                    >
                      NES Collection
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="-mr-6">
              <h5 className="px-3 mx-0 mt-0 mb-3 text-sm font-semibold tracking-wide leading-5 text-left text-gray-900 uppercase lg:text-xs lg:leading-4 lg:mb-1 -ml-6">
                Chat Boxes
              </h5>

              <ul className="text-gray-600 text-sm -ml-3">
                <li>
                  <Link href="/chatBoxes">
                    <a
                      className="text-left  cursor-pointer hover:text-gray-900 transition delay-150"
                      href="#"
                    >
                      Andriod{" "}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="-mr-6">
              <h5 className="px-3 mx-0 mt-0 mb-3 text-sm font-semibold tracking-wide leading-5 text-left text-gray-900 uppercase lg:text-xs lg:leading-4 lg:mb-1 -ml-6">
                Forms
              </h5>

              <ul className="text-gray-600 text-sm -ml-3">
                <li>
                  <Link href="/forms">
                    <a
                      className="text-left  cursor-pointer hover:text-gray-900 transition delay-150"
                      href="#"
                    >
                      Registration Form
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        {/* <div className="max-w-2xl flex-grow w-full xl:px-12 lg:flex">
          <LibraryIntro />
        </div> */}
      </div>
    </>
  );
}
