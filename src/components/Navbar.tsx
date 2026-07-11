'use client';

import React, { useState } from 'react';
import { open } from '@/utils/font';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Dropdown from './Dropdown';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sticky top-0 z-40 flex ${open.className} font-thin py-2 justify-end lg:px-16 bg-black/80 backdrop-blur-md border-b border-white/5`}>
        <div className='hidden sm:flex'>
          <Link
            className="px-5 py-3 text-[#AFAFAF] hover:text-white hover:-translate-y-1 duration-200"
            href="#about"
          >
            About
          </Link>
          <Link
            className="px-5 py-3 text-[#AFAFAF] hover:text-white hover:-translate-y-1 duration-200"
            href="#skills"
          >
            Skills
          </Link>
          <Link
            className="px-5 py-3 text-[#AFAFAF] hover:text-white hover:-translate-y-1 duration-200"
            href="#experience"
          >
            Experience
          </Link>
          <Link
            className="px-5 py-3 text-[#AFAFAF] hover:text-white hover:-translate-y-1 duration-200"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="px-5 py-3 text-[#AFAFAF] hover:text-white hover:-translate-y-1 duration-200"
            href="#education"
          >
            Education
          </Link>
          <Link
            className="px-5 py-3 text-[#AFAFAF] hover:text-white hover:-translate-y-1 duration-200"
            href="/cv.pdf"
            target="_blank"
          >
            Resume
          </Link>
        </div>
        <button onClick={handleDropdownClick} className="mx-8 sm:hidden py-3">
          <FaBars className="text-3xl" />
        </button>
        {isOpen && <Dropdown setDropdownClick={handleDropdownClick} />}
    </div>
  );
}

export default Navbar;
