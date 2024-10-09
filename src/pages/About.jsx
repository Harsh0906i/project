import React from 'react';
import image from "../assets/image.png";
import image_2 from "../assets/Group1171277977.png"
import { useRef } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Home.css"
import vetorLogo from "../assets/vectorlogo.svg"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import img1 from "../assets/img1.png"
import back from "../assets/b487b3891c8ec22ec989c2fa2828464e.jpeg"
import img3 from "../assets/img3.png"
import image_4 from "../assets/Group_1171277398.png"
import image_5 from "../assets/Group_1171277395.png"
import { RiStarSFill } from "react-icons/ri";
import image_9 from "../assets/Rectangle34624693.png"
import { GoArrowUpRight } from "react-icons/go";
import image_8 from "../assets/img.png"
import img5 from "../assets/img5.png"
import img6 from "../assets/img6.png"
import frame from "../assets/Frame.png"
import img8 from "../assets/Vector.svg"
import img4 from "../assets/img4.png"

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


export default function About() {

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
  return (

    <>
      {/* Hero section */}
      <div className="relative overflow-hidden sm:m-6 m-2" style={{ "borderRadius": "30px" }}>
        <img src={image} alt="" className="w-full h-auto rounded-lg" /> {/* Ensure the image also has rounded corners */}
        {/* Darker Gradient Overlay */}
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
      <div className="relative flex flex-col md:flex-row mt-4 gap-5 p-4 py-6">

        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="min-w-[30%] md:min-w-[30%] flex-shrink-0">
              <img src={image_2} alt="" className="w-full h-auto" />
            </div>
            <div className="flex-1 m-4 pt-9">
              <h1 className="text-yellow-600 text-lg md:text-xl flex items-center gap-x-2">
                <span>
                  <img src={img8} alt="Logo" />
                </span>
                About Us
              </h1>
              <h1 className="font-bold text-blue-900 text-2xl md:text-4xl mt-2">
                Trusted Electrical Experts Since 1994
              </h1>
              <div className='relative'>
                <p className="mt-4  text-black sm:text-lg text-sm md:text-md pb-6 ">
                  For over 30 years, Star Electrician Services has set the standard for excellence in the electrical industry. Our work goes beyond wires and circuits; we create environments that function seamlessly. Whether its lighting a home or powering an industrial complex, our solutions are tailored for those who expect nothing but the best. Trusted, tested, and built to last.
                </p>
              </div>
              <div>
                <img src={img4} alt="" className='sm:h-20 h-7 absolute sm:right-20 right-3' />
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
                  <button className="text-yellow-600 font-semibold border border-yellow-600 px-4 py-2 rounded-full">
                    Learn More
                  </button>
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
                <FaArrowLeft /> {/* Left Arrow */}
              </button>
              <button
                onClick={scrollRight2}
                className="z-10 p-2 hover:text-white hover:bg-yellow-600 text-black border rounded-full mx-1"
              >
                <FaArrowRight /> {/* Right Arrow */}
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
                <div className="relative">
                  <img src={service.img} alt="Image" className="w-full h-auto rounded-lg" />

                  {/* Responsive arrow positioned at the edge of the top right corner */}
                  <p className="text-white absolute right-5 top-5 bg-yellow-600 rounded-full flex items-center justify-center"
                    style={{
                      transform: 'translate(50%, -50%)',
                      padding: '0.5rem', // Base padding
                      width: '2rem', // Base size
                      height: '2rem' // Base size
                    }}>
                    <GoArrowUpRight className="text-lg sm:text-xl md:text-2xl" /> {/* Responsive arrow size */}
                  </p>
                </div>

                <div className="absolute text-white bottom-8 m-3 px-3">
                  <h1 className="sm:text-2xl text-lg font-bold">heading</h1>
                  <p className="text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, non ullam? Et, cum id! Aut libero, persp
                  </p>
                </div>
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
            backgroundImage: `url(${back}), linear-gradient(180deg, rgba(0, 43, 92, 0.8) 0%, #002B5C 43.05%, #002B5C 100%)`
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
            {Services.map((service, index) => (
              <div
                key={index}
                className="sm:max-w-[40%] w-[95%] m-2 min-h-11 my-3 flex-shrink-0 relative bg-white p-6 rounded-lg shadow-lg border flex flex-col justify-between"
                style={{ borderRadius: "20px" }}
              >
                {/* Card content */}
                <div className="flex w-full justify-between items-center">
                  <div className='flex items-center gap-3'>
                    <IoPerson className='h-8 w-8' />
                    <div>
                      <h1 className='text-gray-400 font-bold text-xl'>Name</h1>
                      <p className='text-sm text-gray-300'>Description</p>
                    </div>
                  </div>
                  <h3 className="text-gray-300 font-bold text-4xl mb-2">Logo</h3>
                </div>
                {/* Star Ratings */}
                <div className='flex m-3'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
                {/* Service Description */}
                <div>
                  <p className="text-gray-700 mb-4">{service.description}</p>
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
          <div className="flex flex-col md:flex-row gap-5">
            {/* Image Section */}
            <div className="md:w-1/3">
              <img src={image_9} alt="Why Choose Us" className="w-full h-auto object-cover" />
            </div>
            {/* Text Section */}
            <div className="flex-1 m-5">
              <h1 className="text-lg md:text-xl text-yellow-600 sm:text-left text-center">
                <span>
                  <img src={img3} className='h-4 inline-block mx-2 align-middle' alt="Icon" />
                </span>
                Why Choose Us
              </h1>
              <h1 className="font-bold text-2xl md:text-3xl mt-2 sm:text-left text-center">
                Why You Choose Our Services
              </h1>
              <p className="mt-4 text-sm md:text-md pb-6 sm:text-left text-center">
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
            </div>
          </div>
        </div>
      </div>
      {/* form */}
      <div className='flex flex-col sm:flex-row bg-gray-100 sm:m-5 sm:mx-7 p-4 rounded-[20px] overflow-hidden shadow-lg'>
        {/* Left Section */}
        <div className='flex-1 relative sm:mr-4 mb-6 sm:mb-0 p-4'>
          <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left mb-2">Get In Touch With Us!</h1>
          <p className="text-sm md:text-base text-center sm:text-left mb-2">
            Need Electrical Services or have a project in mind? We are here to help! Reach out to us for a free consultation and let us bring your electrical vision to life.
          </p>
          <div className="flex flex-col items-center sm:items-start space-y-2 mb-4">
            <p className="flex items-center space-x-2 text-yellow-700"><MdEmail /><span className='text-black'>email@example.com</span></p>
            <p className="flex items-center space-x-2 text-yellow-700"><FaPhoneAlt /><span className='text-black'>+1234567890</span></p>
            <p className="flex items-center space-x-2 text-yellow-700"><MdLocationPin /><span className='text-black'>123 Main St, City</span></p>
          </div>

          {/* Image at the bottom */}
          <div className='lg:block hidden'>
            <img src={img5} alt="Image" className='lg:h-32 h-0 rounded-full bg-transparent mt-2' /> {/* Reduced margin-top for spacing */}
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className='flex-1 mt-4 sm:mt-0 w-full sm:max-w-lg p-4'>
          <form className='relative rounded-md p-4 w-full'> {/* Reduced padding for the form */}
            <div className='mb-2'>
              <label className="block font-medium mb-1">How Can We Help You?</label>
              <input type="text" style={{ borderRadius: "10px" }} placeholder='Enter...' className='w-full p-2 bg-white rounded-md outline-none' />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'> {/* Reduced gap for inputs */}
              <div>
                <label className="block font-medium mb-1">Full Name</label>
                <input type="text" style={{ borderRadius: "10px" }} placeholder='Name...' className='w-full p-2 bg-white rounded-md outline-none' />
              </div>
              <div>
                <label className="block font-medium mb-1">Email Address</label>
                <input type="text" style={{ borderRadius: "10px" }} placeholder='Email...' className='w-full p-2 bg-white rounded-md outline-none' />
              </div>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2'> {/* Reduced gap for inputs */}
              <div>
                <label className="block font-medium mb-1">Country</label>
                <input type="text" style={{ borderRadius: "10px" }} placeholder='Country...' className='w-full p-2 bg-white rounded-md outline-none' />
              </div>
              <div>
                <label className="block font-medium mb-1">Phone Number</label>
                <input type="text" style={{ borderRadius: "10px" }} placeholder='Phone Number...' className='w-full p-2 bg-white rounded-md outline-none' />
              </div>
            </div>
            <div className='mt-2'>
              <label className="block font-medium mb-1">Message</label>
              <textarea style={{ borderRadius: "10px" }} className='w-full p-2 bg-white rounded-md outline-none' placeholder='Drop a Message...' rows="4"></textarea>
            </div>
            <div className='m-4'>

              <button className="relative overflow-hidden bg-yellow-600 text-white font-semibold py-0 px-0 pl-4 rounded-full group flex items-center justify-between border-4 border-transparent transition-all duration-300 ease-in-out hover:border-yellow-500">
                {/* Button Text */}
                <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">
                  Submit
                </span>

                {/* Arrow with circular background */}
                <span className="relative z-10 bg-white px-4 py-3 ml-2 rounded-full transition-transform duration-400 ease-in-out flex items-center justify-center">
                  <FaArrowRight className="text-black" />
                </span>

                {/* Expanding circular background from the arrow */}
                <span className="absolute top-1/2 right-0 w-12 h-12 bg-white rounded-full transform -translate-x-2/4 -translate-y-2/4 transition-transform duration-500 ease-in-out scale-0 group-hover:scale-[10] origin-right"></span>
              </button>
            </div>

          </form>
        </div>
      </div>

    </>

  );
}
