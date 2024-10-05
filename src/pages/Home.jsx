import React from 'react';
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
import image_4 from "../assets/Group_1171277398.png"
import image_5 from "../assets/Group_1171277395.png"
import image_6 from "../assets/apartment-with-doorways-before-after-renovation4.png"
import image_7 from "../assets/apartment-with-doorways-before-after-renovation2-1.png"
import image_9 from "../assets/Rectangle34624693.png"
import image_10 from "../assets/Group1171278047.png"
import { GoArrowUpRight } from "react-icons/go";
import image_8 from "../assets/img.png"

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

const beforeAfter = [
  {
    img: image_6
  },
  {
    img: image_7
  },
  {
    img: image_6
  },
  {
    img: image_7
  },
  {
    img: image_6
  },
  {
    img: image_7
  },
  {
    img: image_6
  },
  {
    img: image_7
  },
  {
    img: image_6
  },
  {
    img: image_7
  },
]
const image = [
  {
    img: image_10
  },
  {
    img: image_10
  },
  {
    img: image_10
  },
  {
    img: image_10
  },
  {
    img: image_10
  },
]

export default function Home() {

  const carouselRef2 = useRef(null);
  const carouselRef3 = useRef(null);
  const carouselRef4 = useRef(null);

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
      {/* Hero Section */}
      <div className='flex flex-col relative sm:flex-row mb-5 overflow-x-hidden'>

        <div className='flex flex-grow items-center justify-center w-full'>
          <img src={image_1} className='w-full h-auto right-0' alt="" />
        </div>

        <div className='flex flex-col justify-end sm:absolute sm:top-10 left-7 sm:w-full sm:justify-start'>
          <h1 className='font-bold sm:text-4xl text-xl sm:px-9 sm:py-9 py-9 pl-3 sm:relative absolute top-0 sm:top-0'>
            <span className='text-yellow-600'>30 Years</span> of Expertise <br /> in Premium Electrical <br /> Solutions
          </h1>
          <div className='sm:w-[50%] px-9 pb-4'>
            <h3 className=' sm:text-lg ml-3'>
              Providing top-tier electrical services for residential, commercial and
              industrial clients in Mumbai. Let us power your spaces with precision and trust.
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

      <Carousel />

      {/* About Us */}
      <div className="relative flex flex-col md:flex-row mt-4 gap-5 p-4 py-6">
        {/* Background Image with Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img_3}), linear-gradient(rgba(173, 216, 230, 0.3), rgba(173, 216, 230, 0.3))` // Light blue with lower opacity for more clarity
          }}
        ></div>

        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="min-w-[30%] md:min-w-[30%]">
              <img src={image_2} alt="" className="w-full h-auto" />
            </div>
            <div className="flex-1 m-4">
              <h1 className=" text-white text-lg md:text-xl">About Us</h1>
              <h1 className=" font-bold text-white text-2xl md:text-3xl mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
              <p className="mt-4 text-white text-sm md:text-md pb-6 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facilis voluptates consectetur quibusdam. Recusandae architecto quidem sint deleniti! Nostrum, ea. Provident est nemo facere doloribus earum deserunt, quos ad ut tenetur ipsum voluptatum consequuntur. Reiciendis, illum id? Porro numquam totam, facere sequi itaque a in illum sint provident sed cumque animi beatae placeat corrupti earum quisquam ab dolore quod nobis aperiam.
              </p>
              <button className="relative overflow-hidden bg-yellow-500 text-white font-semibold py-0 px-0 pl-4 rounded-full group flex items-center justify-between border-4 border-transparent transition-all duration-300 ease-in-out hover:border-yellow-500">
                {/* Button Text */}
                <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">
                  Learn More
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
      </div>

      {/* Projects */}
      <div className='mt-5'>
        <div className='sm:flex  justify-center items-center flex-col'>
          <div className='sm:flex items-center justify-center relative flex-col'>
            <div className="flex  justify-center">
              <h4 className="flex items-center text-yellow-600 text-lg font-semibold my-5 text-center">
                <span className="mr-2">
                  <img className="h-5" src={img3} alt="Image" />
                </span>
                Our Projects
              </h4>
            </div>
            <h1 className='text-center sm:text-4xl text-2xl text-blue-900 font-bold'>Our Recent Work</h1>
            <div className='sm:mx-7 sm:max-w-[65%] flex flex-col sm:flex-row items-start sm:items-center justify-between'>
              <div className=''>
                <p className='sm:p-7 text-center py-4 sm:text-md m-3'>
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
            <div className="flex absolute right-9 sm:bottom-0 justify-center items-center mt-4 sm:mt-0 sm:ml-auto sm:justify-end flex-row sm:gap-2">
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
          <div
            ref={carouselRef2}
            className="flex overflow-x-auto no-scrollbar space-x-6"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="sm:max-w-[45%] w-[100%] m-2 min-h-11 my-3 flex-shrink-0 relative bg-white p-4 rounded-lg shadow-lg border-gray-400 flex flex-col justify-between"
              >
                <div className='relative'>
                  <img src={service.img} alt="Image" />
                </div>
                <div className='absolute text-white bottom-8 m-3 px-3'>
                  <h1 className=' sm:text-2xl'>heading</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, non ullam? Et, cum id! Aut libero, persp</p>
                </div>
                <p className='text-white absolute sm:right-4 sm:top-4 right-2 top-2 bg-yellow-600 rounded-full sm:p-4 p-3'>
                  <GoArrowUpRight />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Working */}
      <div className="relative flex flex-col md:flex-row mt-4 gap-5 p-4 py-6">
        {/* Background Image with Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img_3}), linear-gradient(rgba(173, 216, 230, 0.3), rgba(173, 216, 230, 0.3))` // Light blue with lower opacity for more clarity
          }}
        ></div>
        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row gap-5">
            <div className=" flex flex-col flex-1 items-center justify-center">
              <h1 className="font-bold text-lg md:text-xl w-full text-white text-center">Working Process</h1>
              <h1 className="font-bold text-2xl md:text-3xl text-white mt-2">Follow Great Process</h1>
              <p className="mt-4 text-sm md:text-md pb-6 text-white">
                our team of experts is equipped to assist you with variety of pipe repair needs. Please share your email address to connect with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Before & After */}
      <div>
        <div className='sm:flex  justify-center mt-5 items-center flex-col'>
          <div className='sm:flex items-center justify-center relative flex-col'>
            <div className="flex  justify-center">
              <h4 className="flex items-center text-yellow-600 text-lg font-semibold my-5 text-center">
                <span className="mr-2">
                  <img className="h-5" src={img3} alt="Image" />
                </span>
                Before & After
              </h4>
            </div>
            <h1 className='text-center sm:text-4xl text-2xl text-blue-900 font-bold'>Amazing Work Results</h1>
            <div className='sm:mx-7 sm:max-w-[65%] flex flex-col sm:flex-row items-start sm:items-center justify-between'>
              <div className=''>
                <p className='sm:p-7 text-center py-4 sm:text-md pl-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate aperiam architecto quae laudantium itaque.
                </p>

              </div>

            </div>
            {/* Button container for arrows */}
            <div className="flex absolute right-9 sm:bottom-0 justify-center items-center mt-4 sm:mt-0 sm:ml-auto sm:justify-end flex-row sm:gap-2">
              <button
                onClick={scrollLeft3}
                className="z-10 p-2 hover:text-white hover:bg-yellow-600 text-black border rounded-full mx-1"
              >
                <FaArrowLeft /> {/* Left Arrow */}
              </button>
              <button
                onClick={scrollRight3}
                className="z-10 p-2 hover:text-white hover:bg-yellow-600 text-black border rounded-full mx-1"
              >
                <FaArrowRight /> {/* Right Arrow */}
              </button>
            </div>

          </div>
        </div>

        <div className="relative flex items-center justify-center py-8">
          <div
            ref={carouselRef3}
            className="flex overflow-x-auto no-scrollbar space-x-6"
          >
            {beforeAfter.map((item, index) => (
              index % 2 === 0 && (
                <div
                  key={index}
                  className="sm:max-w-[45%] w-[100%] m-2 my-3 flex-shrink-0 relative bg-white p-4 rounded-lg shadow-lg border-gray-400"
                  style={{ "border-radius": "10px" }}
                >
                  <div className='relative flex items-center'>
                    {/* Before Image */}
                    <div className='flex-1 m-1 overflow-hidden rounded-lg'>
                      <img
                        className='w-full h-[300px] object-cover rounded-lg'
                        src={item.img}
                        alt={`Before ${index}`}
                        style={{ "border-radius": "10px" }}
                      />
                    </div>

                    {/* Text Between Images */}
                    <div className='absolute rounded-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm  text-white bg-yellow-600 py-3 px-2 '>
                      <p className=''>Drag</p>
                    </div>

                    {/* After Image */}
                    {beforeAfter[index + 1] && (
                      <div className='flex-1 m-1 overflow-hidden rounded-lg'>
                        <img
                          className='w-full h-[300px] object-cover rounded-lg'
                          src={beforeAfter[index + 1].img}
                          alt={`After ${index + 1}`}
                          style={{ "border-radius": "10px" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              )
            ))}
          </div>
        </div>

      </div>

      {/* Testimonial */}
      <div className="relative flex flex-col md:flex-row mt-4 gap-5 p-4 py-6">
        {/* Background Image with Gradient */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${img_3}), linear-gradient(rgba(173, 216, 230, 0.3), rgba(173, 216, 230, 0.3))` // Light blue with lower opacity for more clarity
          }}
        ></div>
        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row gap-5">
            <div className=" flex flex-col flex-1 items-center justify-center">
              <h1 className="font-bold text-lg md:text-xl w-full text-center text-white">Testimonial</h1>
              <h1 className="font-bold text-2xl md:text-3xl mt-2 text-white">Follow Great Process</h1>
              <p className="mt-4 text-center text-sm md:text-md pb-6 text-white">
                our team of experts is equipped to assist you with variety of pipe repair needs. Please share your email address to connect with us.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="relative flex flex-col md:flex-row mt-4 gap-5 p-4 py-6">
        {/* Background Image with Gradient */}

        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="min-w-[30%] md:min-w-[30%]">
              <img src={image_9} alt="" className="w-full h-auto" />
            </div>
            <div className="flex-1 m-5">
              <h1 className=" text-lg md:text-xl text-yellow-600">Why Choose Us</h1>
              <h1 className="font-bold text-2xl md:text-3xl mt-2">Why You Choose Our Services</h1>
              <p className="mt-4 text-sm md:text-md pb-6">
                It has survived not only five centuries, but also the leap into type setting, remaining essentially unchanged. It was popularised.
              </p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-3'>
                <div className='flex items-center shadow-md p-3'>
                  <div className='mr-3'>
                    <img className='h-16' src={image_8} alt="Logo" />
                  </div>
                  <div>
                    <h1 className='text-xl'>Certified Expert Worker</h1>
                  </div>
                </div>

                <div className='flex items-center shadow-md p-3'>
                  <div className='mr-3'>
                    <img className='h-16' src={image_8} alt="Logo" />
                  </div>
                  <div>
                    <h1 className='text-xl'>Certified Expert Worker</h1>
                  </div>
                </div>

                <div className='flex items-center shadow-md p-3'>
                  <div className='mr-3'>
                    <img className='h-16' src={image_8} alt="Logo" />
                  </div>
                  <div>
                    <h1 className='text-xl'>Certified Expert Worker</h1>
                  </div>
                </div>

                <div className='flex items-center shadow-md p-3'>
                  <div className='mr-3'>
                    <img className='h-16' src={image_8} alt="Logo" />
                  </div>
                  <div>
                    <h1 className='text-xl'>Certified Expert Worker</h1>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* form */}
      <div className=' flex flex-col sm:flex-row bg-gray-100 sm:m-5 sm:mx-7 justify-center items-center p-6' style={{ "border-radius": "20px" }}>
        {/* Left Section */}

        <div className='flex-1 relative sm:mr-8'>
          <div className='sm:absolute sm:bottom-0'>

            <h1 className="text-4xl font-bold text-center sm:text-left mb-4">Get In Touch With Us!</h1>
            <p className="text-center sm:text-left mb-4">Need Electrical Services or have a project in mind? We are here to help! Reach out to us for a free consultation and let us bring your electrical vision to life.</p>
            <div className="flex flex-col items-center sm:items-start space-y-2">
              <p className="flex items-center space-x-2 text-yellow-700"><MdEmail /><span className='text-black'>email@example.com</span></p>
              <p className="flex items-center space-x-2 text-yellow-700"><FaPhoneAlt className='' /><span className='text-black'>+1234567890</span></p>
              <p className="flex items-center space-x-2 text-yellow-700"><MdLocationPin /><span className='text-black'>123 Main St, City</span></p>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className='flex-1 mt-6 sm:mt-0 w-full sm:max-w-lg '>
          <form className='relative rounded-md p-6 w-full'>
            <div className='mb-4'>
              <label className="block font-medium mb-2">How Can We Help You?</label>
              <input type="text" style={{ "border-radius": "10px" }} placeholder='Enter...' className='w-full p-2 bg-white rounded-md outline-none' />
            </div>
            <div className='grid sm:grid-cols-2 gap-4'>
              <div>
                <label className="block font-medium mb-2">Full Name</label>
                <input type="text" style={{ "border-radius": "10px" }} placeholder='Name...' className='w-full p-2 bg-white rounded-md outline-none' />
              </div>
              <div>
                <label className="block font-medium mb-2">Email Address</label>
                <input type="text" style={{ "border-radius": "10px" }} placeholder='Email...' className='w-full p-2 bg-white rounded-md outline-none' />
              </div>
            </div>
            <div className='grid sm:grid-cols-2 gap-4 mt-4'>
              <div>
                <label className="block font-medium mb-2">Country</label>
                <input type="text" style={{ "border-radius": "10px" }} placeholder='Country...' className='w-full p-2 bg-white rounded-md outline-none' />
              </div>
              <div>
                <label className="block font-medium mb-2">Phone Number</label>
                <input type="text" style={{ "border-radius": "10px" }} placeholder='phone Number...' className='w-full p-2 bg-white rounded-md outline-none' />
              </div>
            </div>
            <div className='mt-4'>
              <label className="block font-medium mb-2">Message</label>
              <textarea style={{ "border-radius": "10px" }} className='w-full p-2 bg-white rounded-md outline-none' placeholder='Drop a Message...' rows="4"></textarea>
            </div>
            <button className="relative overflow-hidden bg-yellow-500 text-white font-semibold py-0 px-0 pl-4 rounded-full group flex items-center justify-between border-4 border-transparent transition-all duration-300 ease-in-out hover:border-yellow-500 mt-4">
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
          </form>
        </div>

      </div>

    </>
  );
}
