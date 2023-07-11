import React from 'react';
import { open } from '@/utils/font';

function Navbar() {
  return (
    <div className={`flex ${open.className} font-thin my-5 justify-end px-16`}>
      <button className="px-8 py-3 text-[#AFAFAF] hover:text-white">About</button>
      <button className="px-8 py-3 text-[#AFAFAF] hover:text-white">Projects</button>
      <button className="px-8 py-3 text-[#AFAFAF] hover:text-white">Experience</button>
      <button className="px-8 py-3 text-[#AFAFAF] hover:text-white">Resume</button>
    </div>
  );
}

export default Navbar;
