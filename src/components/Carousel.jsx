import React, { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <>
      <div className='sm:flex justify-center items-center flex-col'>
        <h4 className="text-center text-yellow-600 text-lg font-semibold my-5">Our Services</h4>
        <h1 className='text-center sm:text-4xl text-2xl text-blue-900 font-bold'>Our Electrical Services</h1>

        {/* Flex container for paragraph and buttons */}
        <div className='sm:mx-7 sm:max-w-[65%] flex flex-col sm:flex-row items-start sm:items-center justify-between'>
          <p className='sm:p-7 py-4 sm:text-md pl-5'>
            We specialize in a wide range of electrical services to suit every need. Our expert electrical services are crafted for those who expect nothing less than the highest standards of safety, reliability, and precision.
          </p>

          {/* Button container for arrows */}
          <div className="flex justify-center items-center mt-4 sm:mt-0 sm:ml-4 sm:mr-0 sm:justify-end sm:flex-row sm:gap-2">
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
        <div
          ref={carouselRef}
          className="flex overflow-x-auto no-scrollbar space-x-6"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="sm:max-w-[25%] w-[100%] m-2 min-h-11 my-3 flex-shrink-0 relative bg-white p-6 rounded-lg shadow-lg border-gray-400 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-blue-900 mb-3">
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
