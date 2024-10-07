import React from 'react'
import Logo from "../assets/Logo.jpeg"
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

export default function Footer() {
    return (
        <div className='flex flex-col justify-center items-center bg-slate-400 p-6'>
            <div className='mt-3'>
                <img src={Logo} className='h-20' alt="" />
            </div>
            <div className='sm:text-center py-6 flex flex-col items-center justify-center'>
                <div className='sm:max-w-[50%] w-[100%] sm:mx-auto p-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet corrupti error rem, iure velit nihil vitae molestias numquam? In voluptatibus laudantium blanditiis, sit cum modi optio quibusdam eos dolores repellendus!
                </div>

                {/* Navigation Links */}
                <div className='sm:flex sm:justify-center py-6 sm:items-center sm:text-center text-left gap-x-6 flex-wrap w-full p-4'>
                    <p>Home <span>|</span></p>
                    <p>About Us <span>|</span></p>
                    <p>Services <span>|</span></p>
                    <p>Projects <span>|</span></p>
                    <p>Blog <span>|</span></p>
                    <p>Contact Us</p>
                </div>

                {/* Social Icons */}
                <div className='flex gap-5 flex-wrap justify-center'>
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
                    <div>
                        <p>&copy; 2024 Star Electrician. All rights reserved.</p>
                    </div>
                    <div className='flex gap-x-4 mt-3 sm:mt-0'>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
