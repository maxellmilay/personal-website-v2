import React from 'react';
import Link from 'next/link';

interface PropsInterface {
  setDropdownClick: () => void;
}

function Dropdown(props: PropsInterface) {
  const { setDropdownClick: handleDropdownClick } = props;

  return (
    <div className="flex flex-col absolute z-10 items-center bg-white right-8 top-14 w-32">
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
      <Link
        className="px-4 py-3 text-black hover:text-white"
        onClick={handleDropdownClick}
        href="/Resume.pdf"
        target="_blank"
      >
        Resume
      </Link>
    </div>
  );
}

export default Dropdown;
