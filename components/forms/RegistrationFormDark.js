import React, { useState } from "react";

export default function RegistrationFormDark() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [org, setOrg] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  return (
    <div className="flex items-center justify-center bg-gray-900 rounded-md mt-4 max-w-2xl mx-auto">
      <div className="flex-1 mx-auto">
        <div className="grid grid-cols-8">
          {/* Left Column, will have form data supplied from state as the user fills out the form */}
          <div className=" h-96 w-full col-span-3 ">
            <div className="flex flex-col space-y-2 my-8 px-4   ">
              <h2 className="text-white font-extralight text-2xl mx-auto tracking-wide uppercase">
                Welcome Aboard!
              </h2>
              <p className="text-[10px] text-white font-light">
                Tell us a few things about you, we are looking forward to
                welcoming you into our community.
              </p>
            </div>
            <div className="flex flex-col py-4 px-4  justify-start items-start mx-auto">
              <h3 className="text-[#F3A712] font-medium text-xl">{name}</h3>
              <p className="inline text-white font-light text-xs">{title}</p>
              <p className="text-xs text-white font-semibold uppercase">
                {org}
              </p>
            </div>
          </div>
          <div className=" h-96 w-full col-span-5 bg-gray-800">
            <div className="flex justify-center items-center h-full  ">
              <div className="w-10/12">
                <form>
                  <div className="grid grid-cols-6 gap-2">
                    <div className="col-span-6 ">
                      <label
                        htmlFor="first_name"
                        className="block text-xs font-light text-gray-200"
                      >
                        First name <span className="inline">&#8902;</span>
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        id="first_name"
                        className="bg-gray-700 border-transparent mt-1 block w-full rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm text-[#F3A712] "
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 ">
                      <label
                        htmlFor="title"
                        className="block text-xs font-light text-gray-200"
                      >
                        Title <span className="inline">&#8902;</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        className="bg-gray-700 border-transparent mt-1 block w-full rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm text-[#F3A712]"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6 ">
                      <label
                        htmlFor="organization"
                        className="block text-xs font-light text-gray-200"
                      >
                        Organization <span className="inline">&#8902;</span>
                      </label>
                      <input
                        type="text"
                        name="organization"
                        id="organization"
                        className="bg-gray-700 border-transparent mt-1 block w-full rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm text-[#F3A712]"
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                      />
                    </div>
                    <div className="col-span-3 ">
                      <label
                        htmlFor="city"
                        className="block text-xs font-light text-gray-200"
                      >
                        City <span className="inline">&#8902;</span>
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className="bg-gray-700 border-transparent mt-1 block w-full rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm text-[#F3A712]"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </div>
                    <div className="col-span-3 ">
                      <label
                        htmlFor="Country"
                        className="block text-xs font-light text-gray-200"
                      >
                        Country <span className="inline">&#8902;</span>
                      </label>
                      <input
                        type="text"
                        name="Country"
                        id="Country"
                        className="bg-gray-700 border-transparent mt-1 block w-full rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm text-[#F3A712]"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </div>
                    <div className="col-span-6">
                      <button
                        type="submit"
                        className="bg-[#F3A712] border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-[#F6BF51] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 w-full mt-3"
                        disabled
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
