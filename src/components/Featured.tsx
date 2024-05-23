import React from 'react';
import { work, open } from '@/utils/font';
import Image from 'next/image';
import featured from '@/data/featured';
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const isLeftFeatured = (index: number) => {
  return (index%2 === 0)
}

function Featured() {
  return (
    <div id="featured" className="flex md:w-[55rem] flex-col pt-16">
      <p className={`${work.className} text-2xl mb-10 mx-[10%] lg:mx-0`}>Featured Projects</p>
      {featured.map((data, index) => {
        return (
          <div
            className={`group flex lg:flex-row flex-col items-center lg:items-start ${isLeftFeatured(index) ? 'justify-start' : 'justify-end'} mb-16`}
            key={data.id}
          >
            <div className="relative w-[80%] md:w-[35rem] h-[12rem] sm:h-[20rem]">
              <Image src={data.imgURL} alt={data.name} fill className="object-cover" />
              <div className="w-full h-full bg-black opacity-60 group-hover:opacity-0 duration-200" />
            </div>
            <div
              className={` flex flex-col lg:absolute z-10 lg:w-[55rem] py-5 lg:py-0 lg:h-[20rem] justify-center ${isLeftFeatured(index) ? 'items-end' : 'items-start'}`}
            >
              <button
                className={`${open.className} flex gap-3 items-center text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 mx-auto lg:mx-0 ${isLeftFeatured(index) ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'} duration-300`}
              >
                {!isLeftFeatured(index) && <FaArrowLeft className='hidden group-hover:block duration-300 text-[1.25rem]'/> }
                {data.name}
                {isLeftFeatured(index) && <FaArrowRight className='hidden group-hover:block duration-300 text-[1.25rem]'/> }
              </button>
              <p
                className={`bg-[#121212] w-[95%] md:mx-0 md:w-[30rem] font-thin text-sm p-5 ${open.className} mx-auto lg:mx-0`}
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
                {data.repo && <a href={data.repo} className="px-1 py-1 hover:-translate-y-1 duration-200">
                  <FaGithub />
                </a>}
                {data.link && <a href={data.link} className="px-1 py-1 hover:-translate-y-1 duration-200">
                  <FaExternalLinkAlt />
                </a>}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Featured;
