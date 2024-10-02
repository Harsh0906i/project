import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import image_1 from "../assets/Group_1171278049.png";

export default function Home() {
  return (
    <div className='flex flex-col relative sm:flex-row'>
      {/* Centering the image */}
      <div className='flex flex-grow items-center justify-center w-full'>
        <img src={image_1} className='w-full h-auto' alt="" />
      </div>

      {/* Text container positioned at the bottom for small screens */}
      <div className='flex flex-col justify-end sm:absolute sm:top-0 sm:w-full sm:justify-start'>
        <h1 className='font-bold sm:text-4xl text-xl sm:px-9 sm:py-9 py-9 pl-3 sm:relative absolute top-0 sm:top-0'>
          <span className='text-yellow-600'>30 Years</span> of Expertise <br /> in Premium Electrical <br /> Solutions
        </h1>
        <div>
          <h3 className='px-9 sm:text-lg'>
            Providing top-tier electrical services for residential, commercial and <br />
            industrial clients in Mumbai. Let us power your spaces with <br /> precision and trust.
          </h3>
        </div>
        <div className='px-9 py-5'>
          <button className="relative overflow-hidden bg-yellow-500 text-white font-semibold py-0 px-0 pl-4 rounded-full group flex items-center justify-between border-4 border-transparent transition-all duration-300 ease-in-out hover:border-yellow-500">
            {/* Button Text */}
            <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">
              Get Quote
            </span>

            {/* Arrow with circular background */}
            <span className="relative z-10 bg-white px-4 py-3 ml-2 rounded-full transition-transform duration-400 ease-in-out flex items-center justify-center">
              <FaArrowRight className="text-black" />
            </span>

            {/* Expanding circular background from the arrow */}
            <span className="absolute top-1/2 right-0 w-12 h-12 bg-white rounded-full transform -translate-x-2/4 -translate-y-2/4 transition-transform duration-500 ease-in-out scale-0 group-hover:scale-[10] origin-right"></span>
          </button>

        </div>
      </div>
    </div>
  );
}
