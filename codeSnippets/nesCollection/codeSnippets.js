const snesButtonCode = `
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

const duckHuntButton = `
<div className="mt-4 max-w-2xl h-48 bg-gray-900 flex 
    items-center justify-center rounded-sm relative ">
<div className="bg-gray-900 transform -skew-y-12 
    hover:border-b-2 border-red-500">
  <button className="flex flex-col border-2 border-[#E5E977]
     rounded-sm py-1 px-1">
    <span className=" text-[#F21327] border-2 border-[#f21327]
        rounded-full py-1 px-2 text-xs ">
      Nintendo
    </span>
    <span className="block text-[#F64E00] font-bold uppercase
        text-3xl">
      DuckHunt
    </span>
    <div className="flex w-full justify-between">
      <div className="flex flex-col align-middle">
        <span className="block text-[#E5E977] font-bold 
            uppercase text-xs">
          Entertainment
        </span>
        <span className="block text-[#E5E977] font-bold 
            uppercase text-xs">
          system
        </span>
      </div>
      <span className="block text-white text-xl font-bold 
        uppercase shadow-lg">
        $3.00
      </span>
    </div>
  </button>
</div>
</div>

`;

export { snesButtonCode, duckHuntButton };
