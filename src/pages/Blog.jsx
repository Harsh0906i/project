import React from 'react'
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Home.css"
import ProfileCardImage from "../assets/dac6063e0f13d69a814812e6dbc6b973.jpeg"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { FaTags } from "react-icons/fa";
import Button from '../components/Button';

import heroImage from "../assets/af8f3f202e4d296460aae61dfdac6f57.jpeg"
import img5 from "../assets/img5.png"
import Contact from '../components/Contact';

// content
const image = [
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.',
    article : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa"
  },
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.',
    article : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa "
  },
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.',
    article : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa "
  },
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.',
    article : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa "
  },
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.',
    article : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa "
  },
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.',
    article : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa "
  },
  {
    img: ProfileCardImage,
    title: "All in 9 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.',
    article : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa "
  },
  {
    img: ProfileCardImage,
    title: "All in one 5 Signs You Need To Repair Your Home Roof",
    description: 'There are full service engage company is to provide solution company Loream are full service engage company.',
    article : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam omnis perferendis provident similique hic tenetur sed eum natus molestiae dicta fugit nihil, soluta ab aperiam sapiente libero nisi? Corrupti, ipsa "
  },
]

export default function () {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const navigate = useNavigate();

  const handleCardClick = (service) => {
    // Navigate to the BlogDetail page with the state
    navigate('/blog-detail', {
      state: {
        title: service.title,
        description: service.description,
        img: service.img,
        article:service.article
      },
    });
  };

  const [isLoading, setIsLoading] = useState(true);

  return (

    <>
      {/* Hero section */}
      <div className="relative overflow-hidden sm:m-6 m-2" style={{ borderRadius: "30px" }}>
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white rounded-lg">
            <div className="animate-pulse h-full w-full flex justify-center items-center">
              <div className=" bg-slate-500 h-full w-full"></div>
            </div>
          </div>
        )}

        <img
          src={heroImage}
          onLoad={() => setIsLoading(false)}
          alt=""
          className={`w-full h-auto rounded-lg ${isLoading ? 'hidden' : 'block'}`}
        />

        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.75) 0%, rgba(9, 9, 9, 0.75) 100%)',
            opacity: 0.8,
          }}
        ></div>

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white sm:text-4xl font-bold">Latest Blog</h1>
        </div>
      </div>

      {/* Blog */}
      <div className='pr-4'>
        <div className="relative flex items-center justify-center py-8 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 w-full px-4">
            {image.map((service, index) => (
              <div
                key={index}
                className="w-full min-h-11 cursor-pointer bg-white shadow-lg flex flex-col justify-between mx-auto"
                style={{ borderRadius: '20px', margin: '10px', maxWidth: '100%' }}
                onClick={() => handleCardClick(service)}
              >
                <div className="relative rounded-lg overflow-hidden" >
                  {isLoading && (
                    <div className="absolute inset-0 flex justify-center items-center bg-white rounded-lg">
                      <div className="animate-pulse h-full w-full flex justify-center items-center">
                        <div className="bg-slate-500 h-full w-full"></div>
                      </div>
                    </div>
                  )}
                  <img
                    src={service.img}
                    onLoad={() => setIsLoading(false)} 
                    style={{ borderRadius: '20px 20px 0 0' }}
                    className={`w-full h-auto object-cover rounded-lg ${isLoading ? 'hidden' : 'block'}`} 
                  />
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
     <Contact/>
    </>

  )
}