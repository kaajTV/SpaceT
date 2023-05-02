'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '@/app';


// Add framer-motion animations and recreate most of the stuff, but in a better and fancier way.
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="absolute xl:top-[40px] left-[55px] w-full md:h-[96px] bg-transparent z-99">
            <nav className="relative flex flex-1 flex-nowrap justify-between items-center xl:max-w-[1385px] mx-auto font-barlow-condensed">
                {/* Logo */}
                <img src="/logo.svg" alt="logo" className="h-[48px] w-[48px]" />

                {/* Hamburger Menu mr-[96px] */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex justify-end md:hidden cursor-pointer absolute top-0 right-[50px] pt-1 pr-8"
                >
                    {/* Hamburger Open Menu */}
                    <img src="/icon-hamburger.svg" alt="Open Menu" className={`fill-current px-2 py-2 h-[48px] w-[48px] cursor-pointer ${isOpen ? "hidden" : "block"}`} />

                    {/* Hamburger Close Menu */}
                    <img src="/icon-close.svg" alt="Close Menu" className={`fill-current px-2 py-2 h-[48px] w-[48px] cursor-pointer ${isOpen ? "block" : "hidden"}`} />
                </button>


                {/* Thin line between logo and navLinks (only shows when on lg size and up) */}
                <div className="hidden lg:flex flex-1  max-w-[473px] w-full h-[1px] opacity-[25.15%] bg-[#979797]" />

                {/* Navbar Links */}
                <ul className={`${isOpen ? "block" : "hidden"} md:relative absolute md:top-0 top-[47.5px] md:right-0 right-[50px] xl:max-w-[830px] xl:w-full md:w-[79.4%] w-[67.5%] md:h-[96px] h-screen md:flex md:flex-row md:mx-auto md:justify-center md:items-center md:px-12 pl-12 pr-6 py-6 z-0 text-white text-[16px] font-medium md:gap-[48px] space-y-10 md:space-y-0 tracking-[2.7px] leading-[19.2px] uppercase bg-white bg-opacity-5 backdrop-blur-2xl`}>
                    <li className="mt-[100px] md:mt-0">
                        <Link href="/" className="xl:before:content-['00'] before:content-[''] before:font-bold before:pr-1 cursor-pointer hover:underline hover:underline-offset-[40px] hover:decoration-[3px] hover:decoration-[#ffffff50]">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/destination" className="xl:before:content-['01'] before:content-[''] before:font-bold before:pr-1 cursor-pointer hover:underline hover:underline-offset-[40px] hover:decoration-[3px] hover:decoration-[#ffffff50]">
                            Destination
                        </Link>
                    </li>
                    <li>
                        <Link href="/crew" className="xl:before:content-['02'] before:content-[''] before:font-bold before:pr-1 cursor-pointer hover:underline hover:underline-offset-[40px] hover:decoration-[3px] hover:decoration-[#ffffff50]">
                            Crew
                        </Link>
                    </li>
                    <li>
                        <Link href="/technology" className="xl:before:content-['03'] before:content-[''] before:font-bold before:pr-1 cursor-pointer hover:underline hover:underline-offset-[40px] hover:decoration-[3px] hover:decoration-[#ffffff50]">
                            Technology
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;