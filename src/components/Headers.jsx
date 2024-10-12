import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.jpeg"
import Button from './Button';

export default function Headers() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation(); 

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToContactForm = () => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className="bg-gray-50 shadow-lg">
            <div className="flex items-center max-w-6xl mx-auto p-3 justify-between">
                <Link to={'/'} className="font-semibold flex flex-col items-center">
                    <img src={Logo} className="sm:h-14 h-11" alt="Logo" />
                </Link>

                <div className="flex-grow" /> {/* Creates space */}

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

                <div className="flex items-center sm:ml-4">
                    <button onClick={scrollToContactForm}>
                        <Button text={"Contact us"} />
                    </button>

                    <button onClick={toggleMenu} className="text-slate-700 focus:outline-none ml-2 sm:hidden">
                        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

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
