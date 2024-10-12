import { FaArrowRight } from "react-icons/fa";
import React from "react";

export default function Button({ text }) {
  return (
    <button className="relative overflow-hidden bg-yellow-600 text-white font-semibold py-0 px-0 pl-4 rounded-full group flex items-center justify-between border-4 border-transparent transition-all duration-300 ease-in-out hover:border-yellow-500">
      <span className="relative z-10 transition-colors text-sm sm:text-md md:text-base duration-300 ease-in-out group-hover:text-black">
        {text}
      </span>

      <span className="relative z-10 bg-white px-3 py-2 sm:py-3 sm:px-4 ml-2 rounded-full transition-transform duration-400 ease-in-out flex items-center justify-center">
        <FaArrowRight className="text-black" />
      </span>

      <span className="absolute top-1/2 right-0 w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12 bg-white rounded-full transform -translate-x-2/4 -translate-y-2/4 transition-transform duration-500 ease-in-out scale-0 group-hover:scale-[10] origin-right"></span>
    </button>
  );
}
