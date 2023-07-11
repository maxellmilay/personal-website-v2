import React from 'react';
import { work, open } from '@/utils/font';
import Image from 'next/image';
import featured from '@/data/featured';

function Featured() {
  return (
    <div className="flex flex-col w-[55rem] mb-16">
      <p className={`${work.className} text-2xl mb-10`}>Featured Projects</p>
      {featured.map((data) => {
        return (
          <div className={`flex justify-${data.id % 2 == 0 ? 'end' : 'start'} mb-16`} key={data.id}>
            <div className="relative w-[35rem] h-[20rem]">
              <Image src={data.imgURL} alt={data.name} fill className="object-cover" />
              <div className="w-full h-full bg-black opacity-60" />
            </div>
            <div
              className={`flex flex-col z-10 absolute w-[55rem] h-[20rem] 
              items-${data.id % 2 == 0 ? 'start' : 'end'} justify-center`}
            >
              <p className={`${open.className} text-3xl font-semibold mb-8`}>{data.name}</p>
              <p className={`bg-[#121212] w-[30rem] font-thin text-sm p-5 ${open.className}`}>
                {data.description}
              </p>
              <div className={`flex ${work.className} font-thin`}>
                {data.tech.map((value, index) => {
                  return (
                    <p key={value} className="py-3 px-3">
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
