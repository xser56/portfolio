"use client"

import { useState, useEffect } from "react";

export default function Navbar() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); 
      } else {
        setShowNavbar(true); 
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  
  

  return (
    <nav className= {`font-serif font-extralight  fixed top-0 w-full bg-white shadow z-50 transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className=" mx-10 flex justify-between items-center py-4 px-6">
        <h1 className=" text-1xl">A Web Devoloper's Portfolio</h1>
        {/* Drop down  */}
        <div>
        <a href="#about" className="cursor-pointer hover:underline">About</a>
        <div className="relative group inline-block ml-4">
  <a href="#projects" className="cursor-pointer hover:underline">
    Projects
  </a>

  {/* Dropdown Menu */}
  <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md ">
    <a href="#fullstack" className="block px-4 py-2 hover:bg-gray-100">Full Stack</a>    
    <a href="#static" className="block px-4 py-2 hover:bg-gray-100">Static Web</a>
    <a href="#api" className="block px-4 py-2 hover:bg-gray-100">API</a>
    <a href="#tech" className="block px-4 py-2 hover:bg-gray-100">Technical</a>
  </div>
</div>
        <a href="#contact" className="cursor-pointer hover:underline ml-4">Contact</a>
      </div>

      </div>
    </nav>
  );
}

