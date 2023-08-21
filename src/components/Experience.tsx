'use client';

import React, { useState } from 'react';
import { work, open } from '@/utils/font';
import experience from '@/data/experience';
import { FaCaretRight } from 'react-icons/fa';
import useWindowSize from '@/hooks/useScreen';

function Experience() {
  const [currentExperience, setCurrentExperience] = useState(experience[0]);
  const { width } = useWindowSize();

  return (
    <div id="experience" className="flex flex-col mb-16">
      <p className={`${work.className} text-2xl mx-auto`}>Experience</p>
      <div className="h-[0.05rem] w-full bg-white my-5 md:my-10" />
      <div className="flex md:flex-row flex-col items-center md:items-start">
        <div className="flex md:flex-col w-[14rem] md:mr-[2rem] mb-5 md:mb-0 justify-center md:justify-start">
          {experience.map((data) => {
            return (
              <button
                key={data.id}
                className="bg-[#121212] md:border-l md:border-white  flex justify-center px-4 py-2 mx-2 md:px-0 md:mx-0 text-[#AFAFAF] hover:text-white hover:cursor-pointer duration-200"
              >
                <p className={`${work.className}`}>{data.company}</p>
              </button>
            );
          })}
          {width > 720 && (
            <div className="border-l border-[#212121] h-9 flex justify-center py-2" />
          )}
        </div>

        <div className={`flex flex-col md:ml-[1rem] items-center md:items-start ${open.className}`}>
          <p className="text-2xl mb-1">{currentExperience.position}</p>
          <p className="text-xs font-thin mb-8">
            {currentExperience.start} - {currentExperience.end}
          </p>
          {currentExperience.responsibilities.map((data, index) => {
            return (
              <div key={data} className="flex flex-row mb-5">
                <FaCaretRight className="mr-2" />
                <p className="flex w-[15rem] sm:w-[22rem] font-thin text-xs text-[#AFAFAF] leading-4">
                  {data}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
