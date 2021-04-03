import React, { useState, useRef } from "react";
import Link from "next/link";
import CreatorCard from "../../components/creatorCard/CreatorCard";
import { BreadCrumbs, ButtonList } from "../../components/componentType";
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
            <div>
              <h3 className="text-gray-900 font-semibold -ml-2  text-base">
                Buttons
              </h3>
              <ul>
                <li>
                  <Link href="/nesButtons">
                    <a className="text-sm text-gray-600 font-semibold" href="#">
                      NES Collection
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
