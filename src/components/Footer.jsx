import React from 'react'
// import Logo from "../assets/Logo.jpeg"
import TransparentLogo from "../assets/Group1171277362.png"
import background from "../assets/7f9534e6d290e490bd2ddbc9513f00ad.jpeg"
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

export default function Footer() {
    return (
        <div className='flex text-white flex-col justify-center items-center p-6'
            style={{
                backgroundImage: `linear-gradient(90deg, rgba(0, 43, 92, 0.8) 0%, #002B5C 43.05%, #002B5C 100%), url(${background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'left center'
            }}>

            <div className='mt-3'>
                <img src={TransparentLogo} className='h-20' alt="Logo" />
            </div>

            <div className='sm:text-center flex flex-col items-center justify-center'>
                <div className='sm:max-w-[50%] w-full sm:mx-auto px-4'>
                    <p className="text-xs sm:text-sm md:text-base text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corrupti error rem, iure velit nihil vitae molestias numquam? In voluptatibus laudantium blanditiis, sit cum modi optio quibusdam eos dolores repellendus!</p>
                </div>

                {/* Navigation Links */}
                <div className='sm:flex sm:justify-center py-6 sm:items-center sm:text-center grid grid-cols-2 sm:grid-cols-4 gap-x-4 sm:gap-x-6 flex-wrap w-full p-4'>
                    <div className='flex justify-center'>
                        <p className="text-xs sm:text-sm">Home <span>|</span></p>
                    </div>
                    <div className='flex justify-center'>
                        <p className="text-xs sm:text-sm">About <span>|</span></p>
                    </div>
                    <div className='flex justify-center'>
                        <p className="text-xs sm:text-sm">Services <span>|</span></p>
                    </div>
                    <div className='flex justify-center'>
                        <p className="text-xs sm:text-sm">Blog <span>|</span></p>
                    </div>
                    <div className='flex justify-center'>
                        <p className="text-xs sm:text-sm">Contact</p>
                    </div>
                </div>

                {/* Social Icons */}
                <div className='flex gap-5 flex-wrap justify-center mb-4'>
                    <div className='p-2 rounded-full bg-yellow-600 text-white'>
                        <FaFacebook className='h-5 w-5' />
                    </div>
                    <div className='p-2 rounded-full bg-yellow-600 text-white'>
                        <FaInstagram className='h-5 w-5' />
                    </div>
                    <div className='p-2 rounded-full bg-yellow-600 text-white'>
                        <FaXTwitter className='h-5 w-5' />
                    </div>
                    <div className='p-2 rounded-full bg-yellow-600 text-white'>
                        <LiaLinkedinIn className='h-5 w-5' />
                    </div>
                </div>

                {/* Horizontal line */}
                <div className='w-full mt-4'>
                    <hr className='border-gray-300 mx-auto w-[95%]' />
                </div>

                {/* Footer Text */}
                <div className='flex flex-col sm:flex-row w-full justify-between items-center px-4 sm:px-20 pt-3 text-center sm:text-left'>
                    <div className="text-xs sm:text-sm">
                        <p>&copy; 2024 Star Electrician. All rights reserved.</p>
                    </div>
                    <div className='flex gap-x-4 mt-3 sm:mt-0'>
                        <p className="text-xs sm:text-sm">Privacy Policy</p>
                        <p className="text-xs sm:text-sm">Terms and Conditions</p>
                    </div>
                </div>
            </div>
        </div>


    )
}
