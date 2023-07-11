'use client';

import React, { useState } from 'react';
import { open } from '@/utils/font';
import useScreen from '@/hooks/useScreen';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [windowSize] = useScreen();

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {windowSize > 640 ? (
        <div
          className={`flex ${open.className} font-thin my-5 justify-center lg:justify-end lg:px-16`}
        >
          <Link className="px-8 py-3 text-[#AFAFAF] hover:text-white" href="#about">
            About
          </Link>
          <Link className="px-8 py-3 text-[#AFAFAF] hover:text-white" href="#projects">
            Projects
          </Link>
          <Link className="px-8 py-3 text-[#AFAFAF] hover:text-white" href="#experience">
            Experience
          </Link>
          <button className="px-8 py-3 text-[#AFAFAF] hover:text-white">Resume</button>
        </div>
      ) : (
        <div className="flex relative justify-end py-4 px-5">
          <button onClick={handleDropdownClick}>
            <FaBars className="text-3xl" />
          </button>
          {isOpen && (
            <div className="flex flex-col absolute z-10 items-center bg-white top-14 w-32">
              <Link
                className="px-4 py-3 text-black hover:text-white"
                href="#about"
                onClick={handleDropdownClick}
              >
                About
              </Link>
              <Link
                className="px-4 py-3 text-black hover:text-white"
                href="#projects"
                onClick={handleDropdownClick}
              >
                Projects
              </Link>
              <Link
                className="px-4 py-3 text-black hover:text-white"
                href="#experience"
                onClick={handleDropdownClick}
              >
                Experience
              </Link>
              <button
                className="px-4 py-3 text-black hover:text-white"
                onClick={handleDropdownClick}
              >
                Resume
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Navbar;
