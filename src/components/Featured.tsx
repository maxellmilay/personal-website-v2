import React from 'react';
import { work, open } from '@/utils/font';
import Image from 'next/image';
import featured from '@/data/featured';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

function Featured() {
  return (
    <div id="featured" className="flex md:w-[55rem] flex-col mb-16">
      <p className={`${work.className} text-2xl mb-10 mx-[10%] lg:mx-0`}>Featured Projects</p>
      {featured.map((data) => {
        return (
          <div
            className={`flex lg:flex-row flex-col items-center lg:items-start ${data.align.image} mb-16`}
            key={data.id}
          >
            <div className="relative w-[80%] md:w-[35rem] h-[12rem] sm:h-[20rem]">
              <Image src={data.imgURL} alt={data.name} fill className="object-cover" />
              <div className="w-full h-full bg-black opacity-60" />
            </div>
            <div
              className={`flex flex-col lg:absolute z-10 lg:w-[55rem] py-5 lg:py-0 lg:h-[20rem] justify-center ${data.align.text}`}
            >
              <p
                className={`${open.className} text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 mx-auto lg:mx-0`}
              >
                {data.name}
              </p>
              <p
                className={`bg-[#121212] mx-[10%] md:mx-0 md:w-[30rem] font-thin text-sm p-5 ${open.className} mx-auto lg:mx-0`}
              >
                {data.description}
              </p>
              <div
                className={`flex ${work.className} font-thin text-xs sm:text-base mx-auto lg:mx-0`}
              >
                {data.tech.map((value, index) => {
                  return (
                    <p key={value} className="py-3 px-3 text-center">
                      {value}
                    </p>
                  );
                })}
              </div>
              <div className="flex mx-auto lg:mx-0">
                <a href={data.repo} className="px-1 py-1">
                  <FaGithub />
                </a>
                <a href={data.link} className="px-1 py-1">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Featured;
