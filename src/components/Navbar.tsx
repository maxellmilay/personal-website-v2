'use client';

import React, { useState } from 'react';
import { open } from '@/utils/font';
import useWindowSize from '@/hooks/useScreen';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';
import Dropdown from './Dropdown';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex ${open.className} font-thin my-5 justify-end lg:px-16`}>
      {width > 640 ? (
        <>
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
        </>
      ) : (
        <>
          <button onClick={handleDropdownClick} className="mx-8">
            <FaBars className="text-3xl" />
          </button>
          {isOpen && <Dropdown setDropdownClick={handleDropdownClick} />}
        </>
      )}
    </div>
  );
}

export default Navbar;
