import React from 'react';
import image from "../assets/image.png";
import image_2 from "../assets/Group1171277977.png"
import { useRef, useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Home.css"
import vetorLogo from "../assets/vectorlogo.svg"
import Profile from "../assets/6720923c03aff1b12526b66db1ccde15.jpeg"
import img_12 from "../assets/image2.png"
import img1 from "../assets/img1.png"
import img_11 from "../assets/Group1171277409.svg"
import back from "../assets/b487b3891c8ec22ec989c2fa2828464e.jpeg"
import img3 from "../assets/img3.png"
import image_4 from "../assets/Group_1171277398.png"
import image_5 from "../assets/Group_1171277395.png"
import { RiStarSFill } from "react-icons/ri";
import image_9 from "../assets/Rectangle34624693.png"
import { GoArrowUpRight } from "react-icons/go";
import image_8 from "../assets/img.png"
import img6 from "../assets/img6.png"
import frame from "../assets/Frame.png"
import img8 from "../assets/Vector.svg"
import img4 from "../assets/img4.png"
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';
// content
const services = [
  {
    img: image_4
  },

  {
    img: image_5
  },

  {
    img: image_5

  },
  {
    img: image_4

  },
  {
    img: image_5

  },
  {
    img: image_4

  },
];
const Services = [
  {
    title: "Air Conditioning",
    heading: "Service and Repair",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, obcaecati nostrum impedit voluptatibus sed asperiores?"

  },
  {
    title: "Electrical Panel",
    heading: "Service and Repair",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, obcaecati nostrum impedit voluptatibus sed asperiores?"
  },
  {
    title: "Electrical Panel",
    heading: "Service and Repair",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, obcaecati nostrum impedit voluptatibus sed asperiores?"
  },
  {
    title: "Security System",
    heading: "Service and Repair",

    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, obcaecati nostrum impedit voluptatibus sed asperiores?"
  },
];
const reviews = [
  {
    name: "Rajesh M",
    designation: "Cooprate client",
    description:
      " Star Electrician Services transformed our office with their exceptional lighting and power solutions. Their team was professional, and the results exceeded our expectations!",
  },
  {
    name: "Sunita P",
    designation: "Homeowner",
    description:
      " We trust Star Electrician Services for all our electrical needs. Their attention to detail and timely completion of projects makes them our go-to partner",

  },
  {
    name: "Rajesh M",
    designation: "Cooprate client",
    description:
      " Star Electrician Services transformed our office with their exceptional lighting and power solutions. Their team was professional, and the results exceeded our expectations!",

  },
  {
    name: "Sunita P",
    designation: "Homeowner",
    description:
      " We trust Star Electrician Services for all our electrical needs. Their attention to detail and timely completion of projects makes them our go-to partner",

  },
]


export default function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 420, behavior: "smooth" });
  };
  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);

  const scrollLeft2 = () => {
    carouselRef2.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight2 = () => {
    carouselRef2.current.scrollBy({ left: 420, behavior: "smooth" });
  };
  const scrollLeft3 = () => {
    carouselRef3.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight3 = () => {
    carouselRef3.current.scrollBy({ left: 420, behavior: "smooth" });
  };
  const [isLoading, setIsLoading] = useState(true);

  return (

    <>
      {/* Hero section */}
      <div className="relative overflow-hidden sm:m-6 m-2" style={{ "borderRadius": "30px" }}>
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white rounded-lg">
            <div className="animate-pulse h-full w-full flex justify-center items-center">
              <div className="bg-slate-500 h-full w-full"></div>
            </div>
          </div>
        )}
        <img src={image} alt="" onLoad={() => setIsLoading(false)}

          className={`w-full h-auto rounded-lg ${isLoading ? 'hidden' : 'block'}`}
        />

        <div
          className="absolute inset-0 rounded-lg" // Keep it rounded
          style={{
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.75) 0%, rgba(9, 9, 9, 0.75) 100%)',
            opacity: 0.8, // Adjust opacity for a darker effect
          }}
        ></div>
        {/* Text over the image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white sm:text-4xl font-bold">About Us</h1>
        </div>
      </div>

      {/* About Us */}
      <div className="relative flex flex-col md:flex-row mt-4 gap-5 p-4 py-6 overflow-hidden">
        {/* Content Layer */}
        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row flex-wrap gap-5">
            {/* Left: Image Block with responsive size adjustments */}
            <div className="min-w-[40%] md:min-w-[30%] lg:min-w-[25%] flex-shrink-0">
              <img src={image_2} alt="About Us Image"
                className="w-full h-auto object-cover sm:h-60 md:h-72 lg:h-96" />
            </div>

            {/* Right: Text Block */}
            <div className="flex-1 relative m-4 pt-2">
              <h1 className="text-black text-lg md:text-xl flex items-center gap-x-2">
                <span>
                  <img src={img8} alt="Logo" className="w-5 h-5" />
                </span>
                About Us
              </h1>
              <h1 className="font-bold text-black text-2xl md:text-3xl mt-2">
                Trusted Electrical Experts Since 1994
              </h1>
              <p className="mt-4 text-black text-md sm:text-lg md:text-base pb-6">
                For over 30 years, Star Electrician Services has set the standard for excellence in the electrical industry. Our work goes beyond wires and circuits; we create environments that function seamlessly. Whether its lighting a home or powering an industrial complex, our solutions are tailored for those who expect nothing but the best. Trusted, tested, and built to last.
              </p>
              <div className='mb-3'>
                <img
                  src={img4}
                  alt=""
                  className="hidden sm:block absolute right-0 h-9 md:h-14 sm:h-20"
                />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* carousel */}
      <div className="relative">
        {/* Background Image with Linear Gradient covering the entire carousel */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 43, 92, 0.7), rgba(0, 43, 92, 0.7)), url(${back})`, // Reduced opacity to 0.7
            zIndex: -1, // Ensure the background is behind content
          }}
        ></div>

        <div className='sm:flex justify-center mt-5 items-center flex-col relative z-10'>
          <div className='sm:flex items-center justify-center flex-col'>
            <div className="flex justify-center">
              <h4 className="flex items-center text-yellow-600 text-lg font-semibold my-5 text-center">
                <span className="mr-2">
                  <img className="h-5" src={vetorLogo} alt="Image" />
                </span>
                Our Services
              </h4>
            </div>
            <div className="absolute sm:left-5 left-2 ">
              <img className="h-5 sm:h-28 md:h-20" src={frame} alt="" />
            </div>
            <h1 className='text-center sm:text-4xl text-2xl text-white font-bold'>Our Services We Offer</h1>
            <div className='sm:mx-7 sm:max-w-[65%] flex flex-col sm:flex-row items-start sm:items-center justify-between m-2'>
              <div className='w-full'>
                <p className='sm:p-7 m-2 text-center py-4 sm:text-md text-white '>
                  Take a look at some of our completed projects which show our dedication to quality and excellence. Every project is a reflection of our commitment to quality, precision, and innovation.
                </p>
              </div>
            </div>

            {/* Button container for arrows */}
            <div className="flex absolute right-5 sm:bottom-0  justify-center items-center sm:mt-0 sm:ml-auto sm:justify-end flex-row sm:gap-2 ">
              <button
                onClick={scrollLeft}
                className="z-10 p-2 hover:text-white hover:bg-yellow-600 text-white border rounded-full mx-1"
              >
                <FaArrowLeft /> {/* Left Arrow */}
              </button>
              <button
                onClick={scrollRight}
                className="z-10 p-2 hover:text-white hover:bg-yellow-600 text-white border rounded-full mx-1"
              >
                <FaArrowRight /> {/* Right Arrow */}
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center py-8">
          <div ref={carouselRef} className="flex overflow-x-auto no-scrollbar space-x-6">
            {Services.map((service, index) => (
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
                  <h5 className='text-yellow-600 text-sm pb-3'>{service.heading}</h5>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-blue-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                </div>
                <div className="mt-auto">
                  <Link to={'/projects'}>
                    <button className="text-yellow-600 font-semibold border border-yellow-600 px-4 py-2 rounded-full">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className='mt-5'>
        <div className='sm:flex  justify-center items-center flex-col '>
          <div className='sm:flex items-center justify-center relative flex-col'>
            <div className="flex  justify-center">
              <h4 className="flex items-center text-yellow-600 text-lg font-semibold my-5 text-center">
                <span className="mr-2">
                  <img className="h-5" src={img3} alt="Image" />
                </span>
                Our Projects
              </h4>
            </div>
            <div className='absolute sm:left-5 left-3'>
              <img src={img6} className='sm:h-28 h-10' alt="Image" />
            </div>
            <h1 className='text-center sm:text-4xl text-2xl text-blue-900 font-bold'>Our Recent Work</h1>
            <div className='sm:mx-7 sm:max-w-[65%] flex flex-col sm:flex-row items-start sm:items-center justify-between'>
              <div className=''>
                <p className='sm:p-7 text-center  sm:text-md m-3'>
                  Take a look at some of our completed projects which shows our dedication to quality and excellence. Every project is a reflection of our commitment to quality, precision, and innovation.
                </p>
                <div className='text-center'>
                  <button className='ml-2 hover:bg-yellow-600 hover:text-white rounded-full px-3 py-1 text-black border'>Commercial</button>
                  <button className='ml-2 hover:bg-yellow-600 hover:text-white rounded-full px-3 py-1 text-black border'>Residential</button>
                  <button className='ml-2 hover:bg-yellow-600 hover:text-white rounded-full px-3 py-1 text-black border'>Industrial</button>
                </div>
              </div>
            </div>

            {/* Button container for arrows */}
            <div className="flex absolute right-9 sm:bottom-0 justify-center items-center mt-1 sm:mt-0 sm:ml-auto sm:justify-end flex-row sm:gap-2">
              <button
                onClick={scrollLeft2}
                className="z-10 p-2 hover:text-white hover:bg-yellow-600 text-black border rounded-full mx-1"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={scrollRight2}
                className="z-10 p-2 hover:text-white hover:bg-yellow-600 text-black border rounded-full mx-1"
              >
                <FaArrowRight />
              </button>
            </div>

          </div>
        </div>

        <div className="relative flex items-center justify-center py-8">
          <div ref={carouselRef2} className="flex overflow-x-auto no-scrollbar space-x-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="sm:max-w-[45%] w-[90%] m-2 min-h-[11rem] my-3 flex-shrink-0 relative bg-white p-4 rounded-lg shadow-lg border-gray-400 flex flex-col justify-between"
              >
                <Link to={'/projects'}>

                  <div className="relative">
                    <img src={service.img} alt="Image" className="w-full h-auto rounded-lg" />

                    {/* Responsive arrow positioned at the edge of the top right corner */}
                    <p className="text-white absolute sm:right-6 right-2 sm:top-6 top-2 bg-yellow-600 rounded-full flex items-center justify-center sm:p-4 md:p-2 p-2 md:right-4 md:top-4 "
                      style={{
                        transform: 'translate(50%, -50%)',
                      }}>
                      <GoArrowUpRight className="text-lg sm:text-xl md:text-2xl" />
                    </p>
                  </div>

                  <div className="absolute text-white bottom-8 m-3 px-3">
                    <h1 className="sm:text-2xl text-lg font-bold">heading</h1>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, non ullam? Et, cum id! Aut libero, persp
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className='sm:flex justify-center mt-5 items-center flex-col relative overflow-hidden'>
        {/* Background image with gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundColor: 'rgba(0, 5, 15, 0.85)',
            backgroundImage: `url(${back})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
          }}
        ></div>

        {/* Content on top of background */}
        <div className='sm:flex w-full items-center justify-center relative z-10 flex-col'>
          {/* Heading section */}
          <div className="flex justify-center m-2">
            <h1 className=" text-white text-lg md:text-xl flex items-center gap-x-2"><span><img src={img8} alt="Logo" /></span>Testimonial</h1>
          </div>
          <div>
            <h1 className='text-center sm:text-4xl text-2xl text-white font-bold'>
              What Our Client Says
            </h1>
          </div>

          {/* Arrow navigation */}
          <div className="flex sm:absolute sm:right-5 sm:bottom-0 my-2 justify-center items-center mt-4 sm:mt-0 sm:ml-auto sm:justify-end flex-row gap-2 z-50">
            <button
              onClick={scrollLeft3}
              className="z-50 p-2 hover:text-white hover:bg-yellow-600 text-white border rounded-full mx-1"
            >
              <FaArrowLeft /> {/* Left Arrow */}
            </button>
            <button
              onClick={scrollRight3}
              className="z-50 p-2 hover:text-white hover:bg-yellow-600 text-white border rounded-full mx-1"
            >
              <FaArrowRight /> {/* Right Arrow */}
            </button>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative flex items-center justify-center py-8 z-10  w-full overflow-hidden">
          <div ref={carouselRef3} className="flex overflow-x-scroll no-scrollbar space-x-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="sm:max-w-[40%] w-[95%] m-2 min-h-11 my-3 flex-shrink-0 relative bg-white p-6 rounded-lg shadow-lg border flex flex-col justify-between"
                style={{ borderRadius: "20px" }}
              >
                {/* Card content */}
                <div className="flex w-full justify-between items-center">
                  <div className='flex items-center gap-3'>
                    <img src={Profile} alt="Profile" className='rounded-full h-11 sm:h-16 md:h-14' />
                    <div>
                      <h1 className='text-black font-bold text-xl'>{review.name}</h1>
                      <p className='text-sm text-black'>{review.designation}</p>
                    </div>
                  </div>
                  <img src={img_11} className='h-9 sm:h-16 md:h-12' alt="" />
                </div>
                {/* Star Ratings */}
                <div className='flex m-3 text-yellow-600'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
                {/* Service Description */}
                <div>
                  <p className="text-gray-700 mb-4">{review.description}</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>

      {/* Why choose Us */}
      <div className="relative flex flex-col md:flex-row mt-4 gap-5 p-4 py-6">
        {/* Content Container */}
        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row gap-5 ">
            {/* Image Section */}
            <div className="md:w-1/3">
              <img src={image_9} alt="Why Choose Us" className="w-full h-auto object-cover" />
            </div>
            {/* Text Section */}
            <div className="flex-1 m-5 ">
              <h1 className="text-lg md:text-xl text-yellow-600 sm:text-left text-center">
                <span>
                  <img src={img3} className='h-4 inline-block mx-2 align-middle' alt="Icon" />
                </span>
                Why Choose Us
              </h1>
              <h1 className="font-bold text-2xl md:text-3xl mt-2 sm:text-left text-center">
                Why You Choose Our Services
              </h1>
              <p className="mt-4 text-md md:text-lg pb-6 sm:text-left text-center">
                It has survived not only five centuries, but also the leap into type setting, remaining essentially unchanged. It was popularised.
              </p>
              {/* Grid Layout for Features */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-3'>
                {[...Array(4)].map((_, index) => (
                  <div key={index} className='flex items-center shadow-md p-3'>
                    <div className='mr-3'>
                      <img className='h-16' src={image_8} alt="Logo" />
                    </div>
                    <div>
                      <h1 className='text-lg sm:text-xl'>Certified Expert Worker</h1>
                    </div>
                  </div>
                ))}
              </div>
              <div>
                <img src={img_12} alt="" className='absolute top-0 right-0 h-10 sm:h-20 md:h-20  ' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <Contact />
    </>

  );
}
