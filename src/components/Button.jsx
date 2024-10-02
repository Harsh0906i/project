import { FaArrowRight } from "react-icons/fa";
import React from "react";

export default function Button() {
  return (
    <button className="relative overflow-hidden bg-yellow-500 text-white font-semibold py-1 px-4 rounded-full group flex items-center justify-between border-4 border-transparent transition-all duration-300 ease-in-out hover:border-yellow-500">
      {/* Button Text */}
      <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">
        Get Quote
      </span>

      {/* Arrow with circular background */}
      <span className="relative z-10 bg-white p-4 rounded-full transition-transform duration-400 ease-in-out flex items-center justify-center">
        <FaArrowRight className="text-black" />
      </span>

      {/* Expanding circular background from the arrow */}
      <span className="absolute top-1/2 right-0 w-12 h-12 bg-white rounded-full transform -translate-x-2/4 -translate-y-2/4 transition-transform duration-500 ease-in-out scale-0 group-hover:scale-[10]"></span>
    </button>
  );
}
