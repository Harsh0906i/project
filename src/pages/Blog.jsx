import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import "./Home.css"
import ProfileCardImage from "../assets/dac6063e0f13d69a814812e6dbc6b973.jpeg"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaTags } from "react-icons/fa";
import heroImage from "../assets/af8f3f202e4d296460aae61dfdac6f57.jpeg"
import img5 from "../assets/img5.png"

const image = [
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.'
  },
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.'
  },
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.'
  },
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.'
  },
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.'
  },
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.'
  },
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.'
  },
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.'
  },
]

export default function () {
  return (

    <>
      {/* Hero section */}
      <div className="relative overflow-hidden sm:m-6 m-2" style={{ "borderRadius": "30px" }}>
        <img src={heroImage} alt="" className="w-full h-auto rounded-lg" /> {/* Ensure the image also has rounded corners */}
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
          <h1 className="text-white sm:text-4xl font-bold">Latest Blog</h1>
        </div>
      </div>

      {/* Blog */}
      <div className='pr-4'>
        <div className="relative flex items-center justify-center py-8 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4">
            {image.map((service, index) => (
              <div
                key={index}
                className="w-full min-h-11 bg-white shadow-lg border-gray-400 flex flex-col justify-between mx-auto"
                style={{ borderRadius: '20px', margin: '10px', maxWidth: '100%' }}
              >
                {/* Image Section */}
                <div className="relative">
                  <img
                    src={service.img}
                    alt="Service Image"
                    style={{ borderRadius: '20px 20px 0 0' }}
                    className="w-full h-auto object-cover"
                  />

                  {/* Date Badge (half over the image) */}
                  <p className="absolute -bottom-4 right-4 bg-yellow-600 rounded-full py-1 px-2 text-white text-xs sm:text-sm shadow-lg">
                    15 Jan, 2024
                  </p>
                </div>

                {/* Content Section */}
                <div className="relative text-black m-2  p-4" style={{ borderRadius: '0 0 20px 20px' }}>
                  <p className="text-sm text-yellow-600 flex my-3 items-center">
                    <IoPerson />
                    <span className="text-black pl-2">By Rakar |</span>
                    <span className="pl-3 flex items-center">
                      <FaTags />
                      <span className="text-black pl-2">Repair</span>
                    </span>
                  </p>

                  <h1 className="text-xl font-semibold my-2 text-gray-900 leading-tight">
                    {service.title}
                  </h1>

                  <p className="text-gray-700 text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form */}
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

  )
}