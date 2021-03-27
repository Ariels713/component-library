import React, { useState } from "react";
import Link from "next/link";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import LibraryIntro from "../welcomIntro";
import ListCards from "../../components/list-cards/ListCards";
import Footer from "./Footer";
import ButtonList from "../../components/buttons/ButtonList";

export default function SiteColumnLayout() {
  const [intro, setIntro] = useState(true);
  const [nesButton, setNesButton] = useState(false);
  return (
    <>
      {/* <!-- Background color split screen for large screens --> */}

      <div className="relative min-h-screen flex flex-col">
        {/* <!-- 3 column wrapper --> */}
        <div className="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">
          {/* <!-- Left sidebar & main wrapper --> */}
          <div className="flex-1 min-w-0 bg-white xl:flex">
            <div className=" xl:flex-shrink-0 xl:w-64  bg-white">
              <div className="h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0">
                {/* <!-- Start left column area --> */}
                <div className="h-full relative min-h-[12rem]">
                  <div className="absolute inset-0 ">
                    <ListCards />
                    {/* <BreadCrumbs />
                    <ButtonList /> */}
                    <nav>
                      <ul>
                        <li>
                          <h3 className="text-sm leading-6 font-medium text-gray-900">
                            Breadcrumbs
                          </h3>
                          <div>
                            <Link href="/">
                              <a href="#">
                                <span className="transition ml-1 text-xs text-gray-600 font-semibold hover:text-white hover:bg-gradient-to-r from-[#2594D1] to-[#d12594] rounded-sm duration-500 ease-in-out px-1 -mx-1">
                                  Classic
                                </span>
                              </a>
                            </Link>
                          </div>
                        </li>
                        <li>
                          <h3 className="text-sm leading-6 font-medium text-gray-900">
                            Buttons
                          </h3>
                          <div>
                            <Link href="/80sButtons">
                              <a href="#">
                                <span className="transition ml-1 text-xs text-gray-600 font-semibold hover:text-white hover:bg-gradient-to-r from-[#2594D1] to-[#d12594] rounded-sm duration-500 ease-in-out px-1 -mx-1">
                                  NES Collection
                                </span>
                              </a>
                            </Link>
                          </div>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* <!-- End left column area --> */}
              </div>
            </div>

            {/* <div className="bg-white lg:min-w-0 lg:flex-1">
              <div className="h-full py-6 px-4 sm:px-6 lg:px-8"> */}
            {/* <!-- Start main area--> */}

            {/* <div className="relative h-full min-h-[12rem]">
                  <div>
                    <LibraryIntro />
                  </div>
                </div> */}

            {/* <!-- End main area --> */}
            {/* </div>
            </div> */}
          </div>
          <div className="flex-grow ml-[150px] w-[50%] max-w-7xl mx-auto xl:px-8 lg:flex">
            <div className="h-full py-6 px-4 sm:px-6 lg:px-8">
              {/* <!-- Start main area--> */}

              <div className="relative h-full min-h-[12rem]">
                <div>
                  <LibraryIntro />
                </div>
              </div>

              {/* <!-- End main area --> */}
            </div>
          </div>
          <div className="bg-white pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0  xl:pr-0">
            <div className="h-full pl-6 py-6 lg:w-80">
              {/* <!-- Start right column area --> */}
              <div
                className="h-full relative"
                style={{ "min-height": "16rem" }}
              >
                <div className="absolute inset-0 "> PUT STUFF HERE</div>
              </div>
              {/* <!-- End right column area --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
