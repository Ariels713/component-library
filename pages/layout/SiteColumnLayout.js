import React, { useState } from "react";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import LibraryIntro from "../../components/welcomIntro/LibraryIntro";
import ListCards from "../../components/list-cards/ListCards";

export default function SiteColumnLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* <!-- Background color split screen for large screens --> */}
      <div
        className="fixed top-0 left-0 w-1/2 h-full bg-white"
        aria-hidden="true"
      ></div>
      {/* <div
        className="fixed top-0 right-0 w-1/2 h-full bg-gray-50"
        aria-hidden="true"
      ></div> */}
      <div className="relative min-h-screen flex flex-col">
        {/* <!-- Navbar --> */}
        <nav className="flex-shrink-0 bg-white">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* <!-- Logo section --> */}
              <div className="flex items-center px-2 lg:px-0 xl:w-64">
                <div className="flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                  >
                    <title>block</title>
                    <g>
                      <path
                        d="M43.879,12.037a.994.994,0,0,0-.413-.422l-19-10a1,1,0,0,0-.932,0l-19,10a1,1,0,0,0-.413.421L24,22.5Z"
                        fill="#ee9f9f"
                      ></path>
                      <path
                        d="M24,22.5v24a1,1,0,0,0,.466-.115l19-10A1,1,0,0,0,44,35.5v-23a.986.986,0,0,0-.121-.463Zm19,13h0Z"
                        fill="#2594d0"
                      ></path>
                      <path
                        d="M4.121,12.036A1,1,0,0,0,4,12.5v23a1,1,0,0,0,.534.885l19,10A1,1,0,0,0,24,46.5v-24Z"
                        fill="#d12594"
                      ></path>
                    </g>
                  </svg>{" "}
                </div>
              </div>

              {/* <!-- Search section --> */}
              <div className="flex-1 flex justify-center lg:justify-end">
                <div className="w-full px-2 lg:px-6">
                  <label htmlFor="search" className="sr-only">
                    Search Components
                  </label>
                  <div className="relative text-[#92c9e8] focus-within:text-[#d12594]">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      {/* <!-- Heroicon name: solid/search --> */}
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full pl-10 pr-3 py-2 border-b-2 border-[#2594D1] rounded-md leading-5 bg-white bg-opacity-25 text-gray-800 placeholder-[#2594D1] focus:outline-none focus:bg-white focus:ring-0 focus:placeholder-gray-400 focus:text-gray-900 sm:text-sm focus:border-[#d12594] "
                      placeholder="Search Components"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                {/* <!-- Mobile menu button --> */}
                <button
                  type="button"
                  className="bg-white inline-flex items-center justify-center p-2 rounded-md text-[#2594D1] hover:text-white hover:bg-[#d12594] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#d12594] focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  {/* <!--
              Icon when menu is closed.

              Heroicon name: outline/menu-alt-1

              Menu open: "hidden", Menu closed: "block"
            --> */}
                  <svg
                    className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
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
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  {/* <!--
              Icon when menu is open.

              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            --> */}
                  <svg
                    className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
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
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </button>
              </div>
              {/* <!-- Links section --> */}
              <div className="hidden lg:block lg:w-80">
                <div className="flex items-center justify-end">
                  <div className="flex -mx-4">
                    <a
                      href="#"
                      className="px-3 py-2 rounded-md text-sm font-medium transform duration-500 ease-in-out "
                    >
                      <span className="text-[#2594d1] transition hover:text-white hover:bg-gradient-to-r from-[#2594D1] to-[#d12594] px-1 py-1 rounded-sm duration-500 ease-in-out ">
                        Documentation
                      </span>
                    </a>
                    <a
                      href="#"
                      className="px-3 py-2 rounded-md text-sm font-medium transform duration-500 ease-in-out "
                    >
                      <span className="text-[#2594d1] transition hover:text-white hover:bg-gradient-to-r from-[#2594D1] to-[#d12594] px-1 py-1 rounded-sm duration-500 ease-in-out ">
                        Support
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          <div
            className={`${!isOpen ? "block" : "hidden"} lg:hidden`}
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-2">
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#d12594] hover:bg-[#ee9f9f]"
              >
                Documentation
              </a>
              <a
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#d12594] hover:bg-[#ee9f9f]"
              >
                Support
              </a>
            </div>
          </div>
        </nav>

        {/* <!-- 3 column wrapper --> */}
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
          {/* <!-- Left sidebar & main wrapper --> */}
          <div className="flex-1 min-w-0 bg-white xl:flex">
            <div className=" xl:flex-shrink-0 xl:w-64  bg-white">
              <div className="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                {/* <!-- Start left column area --> */}
                <div
                  className="h-full relative"
                  style={{ "min-height": "12rem" }}
                >
                  <div className="absolute inset-0 ">
                    <ListCards />
                    <BreadCrumbs />
                  </div>
                </div>
                {/* <!-- End left column area --> */}
              </div>
            </div>

            <div className="bg-white lg:min-w-0 lg:flex-1">
              <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
                {/* <!-- Start main area--> */}

                <div
                  className="relative h-full"
                  style={{ "min-height": "36rem" }}
                >
                  <div className="absolute inset-0 ">
                    <LibraryIntro />
                  </div>
                </div>
                {/* <!-- End main area --> */}
              </div>
            </div>
          </div>

          <div className="bg-white pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0  xl:pr-0">
            <div className="h-full pl-6 py-6 lg:w-80">
              {/* <!-- Start right column area --> */}
              <div
                className="h-full relative"
                style={{ "min-height": "16rem" }}
              >
                <div className="absolute inset-0 "></div>
              </div>
              {/* <!-- End right column area --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
