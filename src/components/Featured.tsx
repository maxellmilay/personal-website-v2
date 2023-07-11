import React from 'react';
import { work, open } from '@/utils/font';
import Image from 'next/image';
import featured from '@/data/featured';

function Featured() {
  return (
    <div className="flex md:w-[55rem] flex-col mb-16">
      <p className={`${work.className} text-2xl mb-10 mx-[10%] lg:mx-0`}>Featured Projects</p>
      {featured.map((data) => {
        return (
          <div
            className={`flex lg:flex-row flex-col items-center lg:items-start lg:justify-${data.align.image} mb-16`}
            key={data.id}
          >
            <div className="relative w-[80%] md:w-[35rem] h-[12rem] sm:h-[20rem]">
              <Image src={data.imgURL} alt={data.name} fill className="object-cover" />
              <div className="w-full h-full bg-black opacity-60" />
            </div>
            <div
              className={`flex flex-col lg:absolute lg:w-[55rem] py-5 lg:py-0 lg:h-[20rem] items-center lg:items-${data.align.text} justify-center`}
            >
              <p className={`${open.className} text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8`}>
                {data.name}
              </p>
              <p
                className={`bg-[#121212] mx-[10%] md:mx-0 md:w-[30rem] font-thin text-sm p-5 ${open.className}`}
              >
                {data.description}
              </p>
              <div
                className={`flex ${work.className} font-thin text-xs sm:text-base mx-[10%] sm:mx-0`}
              >
                {data.tech.map((value, index) => {
                  return (
                    <p key={value} className="py-3 px-3 text-center">
                      {value}
                    </p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Featured;
