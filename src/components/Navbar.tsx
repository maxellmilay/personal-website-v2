import React from 'react';
import { open } from '@/utils/font';

function Navbar() {
  return (
    <div className={`flex ${open.className} font-thin my-5 justify-end px-16`}>
      <p className="px-8 py-3">About</p>
      <p className="px-8 py-3">Projects</p>
      <p className="px-8 py-3">Experience</p>
      <p className="px-8 py-3">Resume</p>
    </div>
  );
}

export default Navbar;
