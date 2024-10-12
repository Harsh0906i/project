import React from 'react';
import image_1 from "../assets/Group_1171278049.png";
import Carousel from "../components/Carousel"
import image_2 from "../assets/Group1171277977.png"
import { useRef, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Home.css"
import img_11 from "../assets/Group1171277409.svg"
import img_12 from "../assets/image2.png"
import Profile from "../assets/6720923c03aff1b12526b66db1ccde15.jpeg"
import back from "../assets/b487b3891c8ec22ec989c2fa2828464e.jpeg"
import img3 from "../assets/img3.png"
import Modal from "../components/Modal"
import image_4 from "../assets/Group_1171277398.png"
import image_5 from "../assets/Group_1171277395.png"
import { RiStarSFill } from "react-icons/ri";
import image_6 from "../assets/apartment-with-doorways-before-after-renovation4.png"
import image_7 from "../assets/apartment-with-doorways-before-after-renovation2-1.png"
import image_9 from "../assets/Rectangle34624693.png"
import { GoArrowUpRight } from "react-icons/go";
import image_8 from "../assets/img.png"
import img6 from "../assets/img6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/Vector.svg"
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Contact from '../components/Contact';

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

export default function Home() {
  const carouselRef2 = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef3 = useRef(null);
  const [beforeImageUrl, setBeforeImageUrl] = useState('');
  const [afterImageUrl, setAfterImageUrl] = useState('');
  const sliderRef = useRef([]);

  const openModal = (beforeImg, afterImg) => {
    setBeforeImageUrl(beforeImg);
    setAfterImageUrl(afterImg);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToContactForm = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
  const scrollLeft4 = () => {
    carouselRef4.current.scrollBy({ left: -420, behavior: "smooth" });
  };

  const scrollRight4 = () => {
    carouselRef4.current.scrollBy({ left: 420, behavior: "smooth" });
  };
  const carouselRef4 = useRef(null);
  return (
    <>

      {/* Hero Section */}
      <div className='flex flex-col relative sm:flex-row mb-5 overflow-hidden'>

        <div className='flex flex-grow items-center justify-center w-full sm:h-auto h-full'>
          <img
            src={image_1}
            className='w-full h-full object-contain animate-image-zoom'
            alt=""
          />
        </div>


        <div className='flex flex-col justify-end sm:absolute top-5 sm:top-10 md:top-5 left-7 sm:w-full sm:justify-start'>
          <div className='absolute top-9'>
            <h1 className='font-bold text-md sm:text-3xl md:text-2xl sm:max-w-[50%] lg:text-4xl sm:px-9 sm:py-9 pl-3 sm:relative absolute top-0 sm:top-0 animate-text-slide'>
              <span className='text-yellow-600'>30 Years</span> of Expertise in Premium Electrical  Solutions
            </h1>

            <div className='sm:px-9 px-5 py-5 mt-16 md:mt-2 sm:mt-8 animate-text-slide'>
              <button onClick={scrollToContactForm}>
                <Button text={"Get Quote"} />
              </button>

            </div>
          </div>
        </div>
      </div>

      <Carousel />

      {/* About Us */}
      <div className="relative flex flex-col md:flex-row mt-4 gap-5 p-4 py-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundColor: 'rgba(10, 20, 30, 0.85)',
            backgroundImage: `url(${back})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
          }}
        ></div>

        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="min-w-[40%] md:min-w-[30%] lg:min-w-[25%] flex-shrink-0">
              <img src={image_2} alt="About Us Image"
                className="w-full h-auto object-cover sm:h-60 md:h-72 lg:h-96" />
            </div>

            <div className="flex-1 m-4 pt-5">
              <h1 className="text-white text-lg md:text-xl flex items-center gap-x-2">
                <span>
                  <img src={img8} alt="Logo" className="w-5 h-5" />
                </span>
                About Us
              </h1>
              <h1 className="font-bold text-white text-2xl md:text-3xl mt-2">
                Trusted Electrical Experts Since 1994
              </h1>
              <p className="mt-4 text-white text-md sm:text-lg md:text-md pb-6">
                For over 30 years, Star Electrician Services has set the standard for excellence in the electrical industry. Our work goes beyond wires and circuits; we create environments that function seamlessly. Whether its lighting a home or powering an industrial complex, our solutions are tailored for those who expect nothing but the best. Trusted, tested, and built to last.
              </p>
              <Link to={'/about'}>
                <Button text={"Learn More"} />
              </Link>
            </div>
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

      {/* Working */}
      <div className="relative flex flex-col md:flex-row mt-4 gap-5 p-4 py-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundColor: 'rgba(0, 20, 50, 0.85)',
            backgroundImage: `url(${back})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
          }}
        ></div>
        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row gap-5">
            <div className=" flex flex-col flex-1 items-center justify-center">
              <h1 className=" text-white text-lg md:text-xl flex items-center gap-x-2"><span><img src={img8} alt="Logo" /></span>Working Process</h1>
              <h1 className="font-bold text-2xl md:text-3xl text-white mt-2">Follow Great Process</h1>
              <p className="mt-4 text-sm md:text-md pb-6 text-white text-center">
                our team of experts is equipped to assist you with a variety of pipe repair needs. Please share your email address to connect with us.
              </p>

            </div>
          </div>
          <div className='flex flex-col sm:flex-row gap-5'>
            <div className='p-4 relative text-white'>
              <div className='border p-4' style={{ "borderRadius": "20px " }}>
                <h3 className='sm:text-xl pb-2 md:text-lg'>Meet Our Team</h3>
                <p className='text-sm'>Proactively envisioned
                  multimedia based expertisee
                  cross-media growth</p>
              </div>
              <div className='absolute top-0 right-0 bg-yellow-600 rounded-full px-3 py-2'>
                <p>01</p>
              </div>
            </div>

            <div className='p-4 relative text-white '>
              <div className='border p-4' style={{ "borderRadius": "20px " }}>
                <h3 className='sm:text-xl pb-2 md:text-lg'>Meet Our Team</h3>

                <p className='text-sm'>Proactively envisioned
                  multimedia based expertisee
                  cross-media growth</p>
              </div>
              <div className='absolute bottom-0 right-0 bg-yellow-600 rounded-full px-3 py-2' style={{ "border": "transparent" }}>
                <p>02</p>
              </div>
            </div>

            <div className='p-4 relative text-white'>
              <div className='border p-4' style={{ "borderRadius": "20px " }}>
                <h3 className='sm:text-xl pb-2 md:text-lg'>Meet Our Team</h3>

                <p className='text-sm'>Proactively envisioned
                  multimedia based expertisee
                  cross-media growth</p>
              </div>
              <div className='absolute top-0 left-0 sm:right-0 sm:left-auto bg-yellow-600 rounded-full px-3 py-2'>
                <p>03</p>
              </div>

            </div>

            <div className='p-4 relative text-white'>
              <div className='border p-4' style={{ "borderRadius": "20px " }}>
                <h3 className='sm:text-xl pb-2 md:text-lg'>Meet Our Team</h3>

                <p className='text-sm'>Proactively envisioned
                  multimedia based expertisee
                  cross-media growth</p>
              </div>
              <div className='absolute bottom-0 right-0 bg-yellow-600 rounded-full px-3 py-2'>
                <p>04</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Before & After */}
      <div className=''>
        <div className='sm:flex  justify-center mt-5 items-center flex-col'>
          <div className='sm:flex items-center w-full justify-center relative flex-col'>
            <div className="flex  justify-center ">
              <h4 className="flex items-center text-yellow-600 text-lg font-semibold my-5 text-center">
                <span className="mr-2">
                  <img className="h-5" src={img3} alt="Image" />
                </span>
                Before & After
              </h4>
            </div>
            <div className='absolute sm:left-16 left-5'>
              <img src={img7} alt="" className=' h-5 sm:h-28 md:h-20' />
            </div>
            <h1 className='text-center sm:text-4xl text-2xl text-blue-900 font-bold'>Amazing Work Results</h1>
            <div className='sm:mx-7 sm:max-w-[65%] flex flex-col sm:flex-row items-start sm:items-center justify-between'>
              <div className=''>
                <p className='sm:p-7 text-center py-4 sm:text-md p-5'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore voluptate aperiam architecto quae laudantium itaque.
                </p>

              </div>
            </div>
            <div className="flex absolute right-9 sm:bottom-0  justify-center items-center mt-1 sm:mt-0 sm:ml-auto sm:justify-end flex-row sm:gap-2">
              <button
                onClick={scrollLeft4}
                className="z-10 p-2 hover:text-white hover:bg-yellow-600 text-black border rounded-full mx-1"
              >
                <FaArrowLeft /> {/* Left Arrow */}
              </button>
              <button
                onClick={scrollRight4}
                className="z-10 p-2 hover:text-white hover:bg-yellow-600 text-black border rounded-full mx-1"
              >
                <FaArrowRight /> {/* Right Arrow */}
              </button>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center py-8">
          <div
            className="flex overflow-x-auto space-x-4 scrollbar-hide"
            ref={carouselRef4}
          >
            {beforeAfter.map((item, index) => (
              index % 2 === 0 && (
                <div
                  key={index}
                  className="sm:max-w-[45%] w-[100%] flex-shrink-0 relative bg-white p-4 rounded-lg shadow-lg border-gray-200"
                  style={{ borderRadius: '10px' }}
                >
                  <div
                    className="relative flex items-center"

                  >
                    <div
                      className="flex-1 m-1 overflow-hidden rounded-lg relative cursor-pointer"
                      onClick={() =>
                        openModal(item.img, beforeAfter[index + 1]?.img)
                      }
                    >
                      <img
                        className="w-full h-[300px] object-cover rounded-lg"
                        src={item.img}
                        style={{ borderRadius: '10px', userSelect: 'none', pointerEvents: 'none' }}
                      />

                      {beforeAfter[index + 1] && (
                        <div
                          className="absolute top-0 left-0 h-full overflow-hidden rounded-lg cursor-pointer"
                          style={{
                            width: `${sliderRef.current[index]?.sliderPosition || 50}%`,
                            transition: 'width 0.2s ease',
                            userSelect: 'none',
                          }}
                        >
                          <img
                            className="w-full h-[300px] object-cover rounded-lg"
                            src={beforeAfter[index + 1].img}
                            alt={`After ${index + 1}`}
                            style={{ borderRadius: '10px', pointerEvents: 'none' }}
                          />
                        </div>
                      )}

                      <div
                        className="absolute rounded-full bg-yellow-600 flex justify-center items-center cursor-pointer z-10 p-2"
                        style={{
                          left: `calc(${sliderRef.current[index]?.sliderPosition || 50}% - 16px)`,
                          top: '50%',
                          transform: 'translateY(-50%)',
                          userSelect: 'none',
                        }}
                      >
                        <span className="text-white">Click</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>

          <Modal
            isOpen={isModalOpen}
            beforeImageUrl={beforeImageUrl}
            afterImageUrl={afterImageUrl}
            closeModal={closeModal}
          />
        </div>
      </div>

      {/* Testimonial */}
      <div className='sm:flex justify-center mt-5 items-center flex-col relative overflow-hidden'>
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundColor: 'rgba(0, 5, 15, 0.85)',
            backgroundImage: `url(${back})`,
            backgroundSize: 'cover',
            backgroundPosition: 'left center',
          }}
        ></div>

        <div className='sm:flex w-full items-center justify-center relative z-10 flex-col'>
          <div className="flex justify-center m-2">
            <h1 className=" text-white text-lg md:text-xl flex items-center gap-x-2"><span><img src={img8} alt="Logo" /></span>Testimonial</h1>
          </div>
          <div>
            <h1 className='text-center sm:text-4xl text-2xl text-white font-bold'>
              What Our Client Says
            </h1>
          </div>

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

        <div className="relative flex items-center justify-center py-8 z-10  w-full overflow-hidden">
          <div ref={carouselRef3} className="flex overflow-x-scroll no-scrollbar space-x-6">
            {Services.map((service, index) => (
              <div
                key={index}
                className="sm:max-w-[40%] w-[95%] m-2 min-h-11 my-3 flex-shrink-0 relative bg-white p-6 rounded-lg shadow-lg border flex flex-col justify-between"
                style={{ borderRadius: "20px" }}
              >
                <div className="flex w-full justify-between items-center">
                  <div className='flex items-center gap-3'>
                    <img src={Profile} alt="Profile" className='rounded-full h-11 sm:h-16 md:h-14' />
                    <div>
                      <h1 className='text-black font-bold text-xl'>{service.name}</h1>
                      <p className='text-sm text-black'>{service.designation}</p>
                    </div>
                  </div>
                  <img src={img_11} className='h-9 sm:h-16 md:h-12' alt="" />
                </div>
                <div className='flex m-3 text-yellow-600'>
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                  <RiStarSFill />
                </div>
                <div>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="relative flex flex-col md:flex-row mt-4 gap-5 p-4 py-6">
        <div className="relative z-10 w-full">
          <div className="flex flex-col md:flex-row gap-5 ">
            <div className="md:w-1/3">
              <img src={image_9} alt="Why Choose Us" className="w-full h-auto object-cover" />
            </div>
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
