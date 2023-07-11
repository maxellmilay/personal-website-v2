'use client';

import React from 'react';
import { open } from '@/utils/font';
import useScreen from '@/hooks/useScreen';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [windowSize] = useScreen();
  return (
    <div>
      {windowSize > 640 ? (
        <div
          className={`flex ${open.className} font-thin my-5 justify-center lg:justify-end lg:px-16`}
        >
          <button className="px-8 py-3 text-[#AFAFAF] hover:text-white">About</button>
          <button className="px-8 py-3 text-[#AFAFAF] hover:text-white">Projects</button>
          <button className="px-8 py-3 text-[#AFAFAF] hover:text-white">Experience</button>
          <button className="px-8 py-3 text-[#AFAFAF] hover:text-white">Resume</button>
        </div>
      ) : (
        <div className="flex justify-end py-4 px-5">
          <button>
            <FaBars className="text-3xl" />
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
