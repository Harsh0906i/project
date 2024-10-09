import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"
import img4 from "../assets/img4.png"

const services = [
  {
    title: "Residential Electrical Solutions",
    description:
      "From lighting installations to full-home rewiring, we offer comprehensive services that ensure your home is safe, efficient, and powered for comfort.",
    features: [
      "Electrical Safety Inspections",
      "Lighting Design & Installation",
      "Wiring and Rewiring Services",
      "Future-Ready Smart Home Integration",
    ],
  },
  {
    title: "Commercial Electrical Solutions",
    description:
      "We provide reliable electrical infrastructure for commercial spaces, ensuring businesses run smoothly with minimal downtime.",
    features: [
      "Electrical Installations for Offices and Retail Spaces",
      "Energy-Efficient Lighting Solutions",
      "Emergency Power Solutions",
      "Routine Electrical Maintenance",
    ],
  },
  {
    title: "Industrial Electrical Services",
    description:
      "Our team handles large-scale industrial electrical projects with precision and compliance with safety standards.",
    features: [
      "Heavy-Duty Electrical Installations",
      "Power Distribution Systems",
      "Machinery and Equipment Wiring",
      "Electrical Maintenance and Troubleshooting",
    ],
  },
  {
    title: "Industrial Electrical Services",
    description:
      "Our team handles large-scale industrial electrical projects with precision and compliance with safety standards.",
    features: [
      "Heavy-Duty Electrical Installations",
      "Power Distribution Systems",
      "Machinery and Equipment Wiring",
      "Electrical Maintenance and Troubleshooting",
    ],
  },
  {
    title: "Industrial Electrical Services",
    description:
      "Our team handles large-scale industrial electrical projects with precision and compliance with safety standards.",
    features: [
      "Heavy-Duty Electrical Installations",
      "Power Distribution Systems",
      "Machinery and Equipment Wiring",
      "Electrical Maintenance and Troubleshooting",
    ],
  },
  {
    title: "Industrial Electrical Services",
    description:
      "Our team handles large-scale industrial electrical projects with precision and compliance with safety standards.",
    features: [
      "Heavy-Duty Electrical Installations",
      "Power Distribution Systems",
      "Machinery and Equipment Wiring",
      "Electrical Maintenance and Troubleshooting",
    ],
  },
];

const Carousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 420, behavior: "smooth" });
  };

  return (
    <>
      <div className='sm:flex  justify-center mt-5 items-center flex-col'>
        <div className='sm:flex items-center justify-center relative flex-col'>
          <div className="flex justify-center">
            <h4 className="flex items-center text-yellow-600 text-lg font-semibold my-5 text-center">
              <span className="mr-2">
                <img className="h-5" src={img3} alt="Image" />
              </span>
              Our Services
            </h4>
          </div>
          <div className="absolute sm:left-5 left-2 ">
            <img className="sm:h-28 h-7 " src={img4} alt="" />
          </div>
          <h1 className='text-center sm:text-4xl text-2xl text-blue-900 font-bold'>Our Electrical Services</h1>
          <div className='sm:mx-7 sm:max-w-[65%] flex flex-col sm:flex-row items-start sm:items-center justify-between m-2'>
            <div className=' w-full'>
              <p className='sm:p-7 m-2 text-center py-4 sm:text-md '>
                Take a look at some of our completed projects which shows our dedication to quality and excellence. Every project is a reflection of our commitment to quality, precision, and innovation.
              </p>

            </div>
          </div>
          
          {/* Button container for arrows */}
          <div className="flex absolute right-5 bottom-0 justify-center items-center mt-4 sm:mt-0 sm:ml-auto sm:justify-end flex-row sm:gap-2">
            <button
              onClick={scrollLeft}
              className="z-10 p-2 hover:text-white hover:bg-yellow-600 text-black border rounded-full mx-1"
            >
              <FaArrowLeft /> {/* Left Arrow */}
            </button>
            <button
              onClick={scrollRight}
              className="z-10 p-2 hover:text-white hover:bg-yellow-600 text-black border rounded-full mx-1"
            >
              <FaArrowRight /> {/* Right Arrow */}
            </button>
          </div>

        </div>
      </div>

      <div className="relative flex items-center justify-center py-8">
        <div ref={carouselRef} className="flex overflow-x-auto no-scrollbar space-x-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-[90%] sm:w-[45%] md:w-[30%] lg:w-[25%] m-2 min-h-[11rem] my-3 flex-shrink-0 relative bg-white p-6 rounded-lg shadow-lg border flex flex-col justify-between"
              style={{ borderRadius: "20px" }}
            >
              <div className="flex w-full justify-between items-center">
                <img src={img1} className="h-14 mb-2" alt="Img" />
                <h3 className="text-gray-300 font-bold text-4xl mb-2">0{index + 1}</h3>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-blue-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="list-disc list-inside mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-600">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-auto">
                <button className="text-yellow-600 font-semibold border border-yellow-600 px-4 py-2 rounded-full">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
