import React from 'react';
import { work } from '@/utils/font';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <div className={`flex flex-col items-center ${work.className}`}>
      <p className="font-medium mb-1">Designed and Developed by Maxell Milay</p>
      <p className="font-extralight text-xs mb-2">milaymaxell@gmail.com</p>
      <div className="flex">
        <FaGithub className="m-1" />
        <FaLinkedin className="m-1" />
        <FaInstagram className="m-1" />
      </div>
    </div>
  );
}

export default Footer;
