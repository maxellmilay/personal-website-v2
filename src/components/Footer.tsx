import React from 'react';
import { work } from '@/utils/font';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className={`flex flex-col items-center ${work.className} mb-16`}>
      <p className="font-medium mb-1 mx-[15%] text-center">
        Designed and Developed by Maxell Milay
      </p>
      <p className="font-extralight text-xs mb-2">milaymaxell@gmail.com</p>
      <div className="flex">
        <a href="https://github.com/maxellmilay">
          <FaGithub className="m-1" />
        </a>
        <a href="https://www.linkedin.com/in/maxell-milay-354517207/">
          <FaLinkedin className="m-1" />
        </a>
        <a href="https://www.instagram.com/mirai.max">
          <FaInstagram className="m-1" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
