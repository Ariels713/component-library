import React from "react";
import BreadCrumbs from "../../components/breadcrumbs/BreadCrumbs";
import LibraryIntro from "../../components/welcomIntro/LibraryIntro";
import ListCards from "../../components/list-cards/ListCards";
import Footer from "./Footer";
import ButtonList from "../../components/buttons/ButtonList";

export default function SiteColumnLayout() {
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
                <div
                  className="h-full relative"
                  style={{ "min-height": "12rem" }}
                >
                  <div className="absolute inset-0 ">
                    <ListCards />
                    <BreadCrumbs />
                    <ButtonList />
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
                  <div>
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
