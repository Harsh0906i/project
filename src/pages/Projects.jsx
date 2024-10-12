import React from 'react';
import { useEffect, useState } from "react";
import "./Home.css"
import ProjectImg from "../assets/bc4866c353e17696039f73c5a944f28a.jpeg"
import WorkerImage from "../assets/a730c25fa4af6f6307633ab614a4040c.jpeg"
import Contact from '../components/Contact';

// content
const Service = [
  {
    title: "Air Conditioning",
    description: "Our Repair all Services best offers quality help programs for corporate zone studying."
  },
  {
    title: "Air Conditioning",
    description: "Our Repair all Services best offers quality help programs for corporate zone studying."
  },
  {
    title: "Air Conditioning",
    description: "Our Repair all Services best offers quality help programs for corporate zone studying."
  },
  {
    title: "Air Conditioning",
    description: "Our Repair all Services best offers quality help programs for corporate zone studying."
  },
  {
    title: "Air Conditioning",
    description: "Our Repair all Services best offers quality help programs for corporate zone studying."
  },
  {
    title: "Air Conditioning",
    description: "Our Repair all Services best offers quality help programs for corporate zone studying."
  },
  {
    title: "Air Conditioning",
    description: "Our Repair all Services best offers quality help programs for corporate zone studying."
  },
  {
    title: "Air Conditioning",
    description: "Our Repair all Services best offers quality help programs for corporate zone studying."
  },
];


export default function Projects() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {/* Hero section */}
      <div className="relative overflow-hidden sm:m-6 m-2" style={{ "borderRadius": "30px" }}>
        {isLoading && (
          <div className="absolute inset-0 flex justify-center items-center bg-white rounded-lg">
            <div className="animate-pulse h-full w-full flex justify-center items-center">
              <div className=" bg-slate-500 h-full w-full"></div>
            </div>
          </div>
        )}
        <img src={ProjectImg} alt=""
          onLoad={() => setIsLoading(false)} // Set loading to false when the image loads

          className="w-full h-auto rounded-lg" /> {/* Ensure the image also has rounded corners */}
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
          <h1 className="text-white sm:text-4xl font-bold">Our Projects</h1>
        </div>
      </div>

      {/* cards */}
      <div className="relative">
        <div className="sm:flex grid grid-cols-1 sm:grid-cols-3 items-center justify-center my-3">
          <div className="inline-flex justify-center items-center gap-x-3 border p-1 rounded-full flex-wrap">
            <button className="hover:bg-yellow-600 bg-gray-200 m-1 rounded-full px-4 py-1 hover:text-white border-2 hover:border-white">
              All
            </button>
            <button className="hover:bg-yellow-600 bg-gray-200 m-1 rounded-full px-4 py-1 hover:text-white border-2 hover:border-white">
              Commercial
            </button>
            <button className="hover:bg-yellow-600 bg-gray-200 m-1 rounded-full px-4 py-1 hover:text-white border-2 hover:border-white">
              Residential
            </button>
            <button className="hover:bg-yellow-600 bg-gray-200 m-1 rounded-full px-4 py-1 hover:text-white border-2 hover:border-white">
              Industrial
            </button>
          </div>
        </div>


        <div className="relative py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Service.map((service, index) => (
              <div
                key={index}
                className="m-2 min-h-[11rem] flex flex-col justify-between bg-sa= p-6 rounded-lg shadow-lg border"
                style={{ borderRadius: "20px" }}
              >
                <div>
                  <div className="relative">
                    {/* Actual Image */}
                    <img
                      src={WorkerImage}
                      onLoad={() => setIsLoading(false)} // Update loading state when the image loads
                      className={`w-full h-auto object-cover rounded-lg ${isLoading ? 'hidden' : 'block'}`}
                      style={{ borderRadius: "20px" }}
                      alt=""
                    />

                    {/* Skeleton Loader */}
                    {isLoading && (
                    <div className="absolute inset-0 flex justify-center items-center bg-white rounded-lg">
                      <div className="animate-pulse h-full w-full flex justify-center items-center">
                        <div className="bg-slate-500 h-full w-full"></div>
                      </div>
                    </div>
                  )}
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-blue-900 m-3">
                      {service.title}
                    </h2>
                    <p className="text-gray-700 mb-4 p-3">{service.description}</p>
                  </div>

                  <div className="mt-auto">
                    <button className="text-yellow-600 font-semibold border border-yellow-600 px-4 py-2 rounded-full">
                      Learn More
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      {/* form */}
      <Contact/>
    </>
  )
}