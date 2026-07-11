import React from 'react';
import Link from 'next/link';

interface PropsInterface {
  setDropdownClick: () => void;
}

function Dropdown(props: PropsInterface) {
  const { setDropdownClick: handleDropdownClick } = props;

  return (
    <div className="flex flex-col absolute z-10 items-center bg-[#121212] border border-white/10 right-8 top-14 w-36 rounded-lg overflow-hidden">
      <Link className="w-full px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" href="#about" onClick={handleDropdownClick}>About</Link>
      <Link className="w-full px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" href="#skills" onClick={handleDropdownClick}>Skills</Link>
      <Link className="w-full px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" href="#experience" onClick={handleDropdownClick}>Experience</Link>
      <Link className="w-full px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" href="#projects" onClick={handleDropdownClick}>Projects</Link>
      <Link className="w-full px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" href="#education" onClick={handleDropdownClick}>Education</Link>
      <Link className="w-full px-4 py-3 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors" href="/cv.pdf" target="_blank" onClick={handleDropdownClick}>Resume</Link>
    </div>
  );
}

export default Dropdown;
