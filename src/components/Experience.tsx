'use client';

import React, { useState } from 'react';
import { work, open } from '@/utils/font';
import experience from '@/data/experience';
import { FaCaretRight } from 'react-icons/fa';

function Experience() {
  const [currentExperience, setCurrentExperience] = useState(experience[0]);

  return (
    <div className="flex flex-col w-[40rem] mb-16">
      <p className={`${work.className} text-2xl mx-auto`}>Experience</p>
      <div className="h-[0.05rem] w-[40rem] bg-white my-10" />
      <div className="flex">
        <div className="flex flex-col w-[14rem] mr-[2rem]">
          {experience.map((data) => {
            return (
              <button
                key={data.id}
                className="bg-[#212121] border-l border-white  flex justify-center py-2 text-[#AFAFAF] hover:text-white hover:cursor-pointer"
              >
                <p className={`${work.className}`}>{data.company}</p>
              </button>
            );
          })}
          <div className="border-l border-[#212121] h-9 flex justify-center py-2" />
        </div>

        <div className={`flex flex-col w-[24rem] ml-[1rem] ${open.className}`}>
          <p className="text-2xl mb-1">{currentExperience.position}</p>
          <p className="text-xs font-thin mb-8">
            {currentExperience.start} - {currentExperience.end}
          </p>
          {currentExperience.responsibilities.map((data, index) => {
            return (
              <div key={index} className="flex flex-row mb-5">
                <FaCaretRight className="mr-2" />
                <div></div>
                <p className="flex w-[22rem] font-thin text-xs text-[#AFAFAF] leading-4">{data}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
