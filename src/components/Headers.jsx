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
                    <img src={Logo} className="sm:h-14 h-11" alt="Logo" />
                </Link>

                <div className="flex-grow" /> {/* Creates space */}

                {/* Navigation Links (always visible on large screens) */}
                <ul className="hidden sm:flex gap-5 pr-6">
                    <Link to={'/'} className={`text-slate-700 hover:underline ${location.pathname === '/' ? 'font-semibold text-yellow-500' : ''}`}>
                        <li>Home</li>
                    </Link>
                    <Link to={'/about'} className={`text-slate-700 hover:underline ${location.pathname === '/about' ? 'font-semibold text-yellow-500' : ''}`}>
                        <li>About Us</li>
                    </Link>
                    <Link to={'/services'} className={`text-slate-700 hover:underline ${location.pathname === '/services' ? 'font-semibold text-yellow-500' : ''}`}>
                        <li>Services</li>
                    </Link>
                    <Link to={'/projects'} className={`text-slate-700 hover:underline ${location.pathname === '/projects' ? 'font-semibold text-yellow-500' : ''}`}>
                        <li>Projects</li>
                    </Link>
                    <Link to={'/blog'} className={`text-slate-700 hover:underline ${location.pathname === '/blog' ? 'font-semibold text-yellow-500' : ''}`}>
                        <li>Blog</li>
                    </Link>
                </ul>

                {/* Flex container for button and hamburger menu */}
                <div className="flex items-center sm:ml-4">
                    {/* Get Quote Button (always visible) */}
                    <Link to="/contact"> {/* Add a link to your contact page if applicable */}
                        <button className="relative overflow-hidden bg-yellow-600 text-white font-semibold py-0 px-0 pl-4 rounded-full group flex items-center justify-between border-4 border-transparent transition-all duration-300 ease-in-out hover:border-yellow-500">
                            {/* Button Text */}
                            <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-black">
                                Contact us
                            </span>

                            {/* Arrow with circular background */}
                            <span className="relative z-10 bg-white px-4 py-3 ml-2 rounded-full transition-transform duration-400 ease-in-out flex items-center justify-center">
                                <FaArrowRight className="text-black" />
                            </span>

                            {/* Expanding circular background from the arrow */}
                            <span className="absolute top-1/2 right-0 w-12 h-12 bg-white rounded-full transform -translate-x-2/4 -translate-y-2/4 transition-transform duration-500 ease-in-out scale-0 group-hover:scale-[10] origin-right"></span>
                        </button>
                    </Link>

                    {/* Hamburger Menu Button */}
                    <button onClick={toggleMenu} className="text-slate-700 focus:outline-none ml-2 sm:hidden">
                        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Responsive menu for small screens */}
            <ul className={`flex flex-col bg-gray-50 border-t border-gray-200 ${isOpen ? 'block' : 'hidden'} sm:hidden`}>
                <Link to={'/'} onClick={() => setIsOpen(false)} className={`p-3 text-slate-700 hover:underline ${location.pathname === '/' ? 'font-semibold text-yellow-500' : ''}`}>
                    <li>Home</li>
                </Link>
                <Link to={'/about'} onClick={() => setIsOpen(false)} className={`p-3 text-slate-700 hover:underline ${location.pathname === '/about' ? 'font-semibold text-yellow-500' : ''}`}>
                    <li>About Us</li>
                </Link>
                <Link to={'/services'} onClick={() => setIsOpen(false)} className={`p-3 text-slate-700 hover:underline ${location.pathname === '/services' ? 'font-semibold text-yellow-500' : ''}`}>
                    <li>Services</li>
                </Link>
                <Link to={'/projects'} onClick={() => setIsOpen(false)} className={`p-3 text-slate-700 hover:underline ${location.pathname === '/projects' ? 'font-semibold text-yellow-500' : ''}`}>
                    <li>Projects</li>
                </Link>
                <Link to={'/blog'} onClick={() => setIsOpen(false)} className={`p-3 text-slate-700 hover:underline ${location.pathname === '/blog' ? 'font-semibold text-yellow-500' : ''}`}>
                    <li>Blog</li>
                </Link>
            </ul>
        </header>
    );
}
