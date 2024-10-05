import React from 'react'
// import { FaArrowRight } from "react-icons/fa";
import image_1 from "../assets/Group_1171278049.png";
import Carousel from "../components/Carousel"
import image_2 from "../assets/Group1171277977.png"
import img_3 from "../assets/image_3.png"
import { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Home.css"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import img3 from "../assets/img3.png"
import { MdLocationPin } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import image_4 from "../assets/Group_1171277398.png"
import { FaTags } from "react-icons/fa";
import image_5 from "../assets/Group_1171277395.png"
import image_6 from "../assets/apartment-with-doorways-before-after-renovation4.png"
import image_7 from "../assets/apartment-with-doorways-before-after-renovation2-1.png"
import image_9 from "../assets/Rectangle34624693.png"
import image_10 from "../assets/Group1171278047.png"
import { GoArrowUpRight } from "react-icons/go";
import image_8 from "../assets/img.png"

export default function Services() {
  return (
    <div>{/* Blog */}
      <div>
        <div className='sm:flex justify-between items-center mx-8 pt-8'>
          {/* Heading Section */}
          <div className="sm:text-left text-center sm:max-w-[65%]">
            <h4 className="text-yellow-600 text-lg font-semibold my-2 sm:my-0">Blog & Articles</h4>
            <h1 className='text-2xl sm:text-4xl text-blue-900 font-bold'>Every Single Update</h1>
          </div>

          {/* Arrows Section */}
          <div className="flex justify-center sm:justify-end items-center gap-2 mt-4 sm:mt-0">
            <button
              onClick={scrollLeft}
              className="z-10 p-2 hover:text-white hover:bg-yellow-600 text-black border rounded-full"
            >
              <FaArrowLeft /> {/* Left Arrow */}
            </button>
            <button
              onClick={scrollRight}
              className="z-10 p-2 hover:text-white hover:bg-yellow-600 text-black border rounded-full"
            >
              <FaArrowRight /> {/* Right Arrow */}
            </button>
          </div>
        </div>


        <div className="relative flex items-center justify-center py-8">
          <div
            ref={carouselRef1}
            className="flex overflow-x-auto no-scrollbar space-x-6"
          >
            {image.map((service, index) => (
              <div
                key={index}
                className="sm:max-w-[30%] w-[100%] m-2 min-h-11  flex-shrink-0 relative bg-white p-4 rounded-lg shadow-lg border-gray-400 flex flex-col justify-between"
              >
                <div className='relative'>
                  <img src={service.img} alt="Image" />
                </div>
                <div className=' relative text-black bottom-8 m-3 px-3'>
                  <p className='absolute top-0 right-0 bg-yellow-500 rounded-full py-2 px-2 text-white'>15 Jan, 2024</p>

                  <p className='text-sm text-yellow-600 flex my-3 items-center'><IoPerson /> <span className='text-black pl-2'>By Rakar |</span><p className='pl-3 flex items-center'><FaTags /><span className='text-black pl-2'>Repair</span></p></p>

                  <h1 className='text-xl font-semibold my-2 text-gray-900'> Distinctio, non ullam? Et, cum id! Aut libero, persp</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia deserunt dolorum molestias error</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div></div>
  )
}
