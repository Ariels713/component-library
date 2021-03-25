import React from "react";

export default function ListCards() {
  return (
    <>
      <div className="container flex flex-col mx-auto w-full items-center justify-center mb-6">
        <ul className="flex flex-col">
          <li className="border-gray-400 flex flex-row mb-2">
            <div className="shadow border select-none cursor-pointer bg-white dark:bg-gray-800 rounded-md flex flex-1 items-center p-4">
              <div className="flex flex-col w-10 h-10 justify-center items-center mr-4">
                <a
                  href="https://arielrodriguez.me/"
                  target="_blank"
                  className="block relative"
                >
                  <img
                    alt="profil"
                    src="/images/elliePapa.svg"
                    className="mx-auto object-cover rounded-full h-10 w-10 "
                  />
                </a>
              </div>
              <div className="flex-1 pl-1 md:mr-16">
                <div className="font-medium dark:text-white">Ariel R.</div>
                <div className="text-gray-600 dark:text-gray-200 text-sm">
                  Creator
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
