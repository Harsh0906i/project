import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.jpeg"

export default function Headers() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); // Get the current location

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-50 shadow-lg">
            <div className="flex items-center max-w-6xl mx-auto p-3 justify-between">
                <Link to={'/'} className="font-semibold flex flex-col items-center">
                    {/* <span className="text-sm capitalize">Logo</span> */}
                    <img src={Logo} className=' sm:h-14 h-11' alt="Logo" />
                </Link>

                <div className="flex-grow" /> {/* This creates space */}

                {/* Navigation Links */}
                <ul className={`flex gap-5 pr-6 ${isOpen ? 'flex-col absolute bg-gray-50 w-full left-0 top-full border-t border-gray-200 sm:hidden' : 'hidden sm:flex'}`}>
                    <Link to={'/'}>
                        <li className={`text-slate-700 hover:underline ${location.pathname === '/' ? 'font-semibold text-yellow-500' : ''}`}>Home</li>
                    </Link>
                    <Link to={'/about'}>
                        <li className={`text-slate-700 hover:underline ${location.pathname === '/about' ? 'font-semibold text-yellow-500' : ''}`}>About Us</li>
                    </Link>
                    <Link to={'/services'}>
                        <li className={`text-slate-700 hover:underline ${location.pathname === '/services' ? 'font-semibold text-yellow-500' : ''}`}>Services</li>
                    </Link>
                    <Link to={'/projects'}>
                        <li className={`text-slate-700 hover:underline ${location.pathname === '/projects' ? 'font-semibold text-yellow-500' : ''}`}>Projects</li>
                    </Link>
                    <Link to={'/blog'}>
                        <li className={`text-slate-700 hover:underline ${location.pathname === '/blog' ? 'font-semibold text-yellow-500' : ''}`}>Blog</li>
                    </Link>
                </ul>

                {/* Get Quote Button */}
                <Link>
                    <button className="relative overflow-hidden bg-yellow-600 text-white font-semibold py-0 px-0 pl-4 rounded-full group flex items-center justify-between border-4 border-transparent transition-all duration-300 ease-in-out hover:border-yellow-500">
                        {/* Button Text */}
                        <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">
                            Contact Us
                        </span>

                        {/* Arrow with circular background */}
                        <span className="relative z-10 bg-white px-4 py-3 ml-2 rounded-full transition-transform duration-400 ease-in-out flex items-center justify-center">
                            <FaArrowRight className="text-black" />
                        </span>

                        {/* Expanding circular background from the arrow */}
                        <span className="absolute top-1/2 right-0 w-12 h-12 bg-white rounded-full transform -translate-x-2/4 -translate-y-2/4 transition-transform duration-300 ease-in-out scale-0 group-hover:scale-[10] origin-right"></span>
                    </button>

                </Link>

                {/* Hamburger Menu Icon for Small Screens */}
                <div className="block sm:hidden">
                    <button onClick={toggleMenu} className="text-slate-700 focus:outline-none ml-2">
                        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Responsive menu */}
            {isOpen && (
                <div className="flex flex-col bg-gray-50 border-t border-gray-200 sm:hidden">
                    <Link to={'/'} className={`p-3 text-slate-700 hover:underline ${location.pathname === '/' ? 'font-semibold text-yellow-500' : ''}`}>Home</Link>
                    <Link to={'/about'} className={`p-3 text-slate-700 hover:underline ${location.pathname === '/about' ? 'font-semibold text-yellow-500' : ''}`}>About Us</Link>
                    <Link to={'/services'} className={`p-3 text-slate-700 hover:underline ${location.pathname === '/services' ? 'font-semibold text-yellow-500' : ''}`}>Services</Link>
                    <Link to={'/projects'} className={`p-3 text-slate-700 hover:underline ${location.pathname === '/projects' ? 'font-semibold text-yellow-500' : ''}`}>Projects</Link>
                    <Link to={'/blog'} className={`p-3 text-slate-700 hover:underline ${location.pathname === '/blog' ? 'font-semibold text-yellow-500' : ''}`}>Blog</Link>
                </div>
            )}
        </header>
    );
}
