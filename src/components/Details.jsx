import React from "react";
import { BiEqualizer,BiChevronRight } from "react-icons/bi";
function Details() {
  return (
    <div className="absolute flex flex-col items-start top-0 right-0 w-[20%] h-[50%] mr-24 mt-[12%] animate-slide-in-right">
      <div className="w-10 h-10 bg-white rounded-md hover:scale-110 ">
        <BiEqualizer size={40} className="w-full h-full" />
      </div>
      <div className="mt-10 text-2xl font-thin text-gray-400 space-y-2">
        <p>Offline Voice</p>
        <p>Assistant</p>
      </div>

      <div className="mt-10 text-sm text-gray-400">
        <p>7 days Typical use</p>
      </div>
        
        <hr className="h-1 w-10  mt-10 border-0 rounded-lg bg-gradient-to-r from-orange-300 to-orange-700"/>



        <span className="mt-5 flex flex-row items-center justify-center text-gray-400 ">
        <button>Get Info </button>
        <BiChevronRight/>
        </span>

    </div>
  );
}

export default Details;
