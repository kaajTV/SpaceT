'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Router } from 'next/router';

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <nav className="bg-transparent w-full">
                <div className="mx-auto flex items-center justify-between py-2 px-4">
                    {/* Logo */}
                    <div className="flex">
                        <Link href="/">
                            <Image src="/logo.svg" alt="logo" width={50} height={50} />
                        </Link>
                    </div>
                    {/* Line */}
                    {/* <div className="hidden lg:block">
                        <div className="w-full max-w-[473px] opacity-[25.15%] bg-[#979797] h-1 mx-4" />
                    </div> */}
                    {/* Links */}
                    <div className="hidden h-[98px] w-full max-w-5xl md:flex justify-center items-center space-x-8 py-2 px-4 uppercase font-[barlow-condensed] font-normal text-white text-[18px] xl:text-[20px] leading-[19.2px] tracking-[2.7px] bg-white bg-opacity-5 backdrop-blur-2xl z-10">
                        <Link href="/">
                            Home
                        </Link>
                        <Link href="/destination">
                            Destination
                        </Link>
                        <Link href="/crew">
                            Crew
                        </Link>
                        <Link href="/technology">
                            Technology
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleSidebar}>
                            <Image
                                src="/icon-hamburger.svg"
                                alt="Menu"
                                width={30}
                                height={30}
                            />
                        </button>
                    </div>
                </div>
            </nav>
            <AnimatePresence>
                {sidebarOpen && (
                    <motion.aside
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-0 right-0 h-full w-64 font-[barlow-condensed] font-normal text-white text-[18px] leading-[19.2px] tracking-[2.7px] bg-white bg-opacity-5 backdrop-blur-2xl shadow-lg z-50"
                    >
                        <div className="p-4">
                            <div className="flex justify-end">
                                <button onClick={toggleSidebar}>
                                    <Image
                                        src="/icon-close.svg"
                                        alt="Close Menu"
                                        width={30}
                                        height={30}
                                    />
                                </button>
                            </div>
                            <nav className="mt-8">
                                <ul>
                                    {[
                                        { path: '/', name: 'Home' },
                                        { path: '/destination', name: 'Destination' },
                                        { path: '/crew', name: 'Crew' },
                                        { path: '/technology', name: 'Technology' },
                                    ].map((link, index) => (
                                        <li key={index} className="mb-6">
                                            <Link href={link.path} onClick={toggleSidebar} className="flex items-center pl-4 pr-8 py-2 border-r-4 uppercase">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar;