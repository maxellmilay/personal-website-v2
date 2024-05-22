'use client';

import React from 'react';
import { work } from '@/utils/font';
import experiences from '@/data/experience';

function Experience() {
  const isLeft = (index: number) => {
    return (index%2 === 0)
  }

  return (
    <div id='experience' className='flex flex-col items-center my-10 w-full'>
      <p className={`${work.className} text-2xl mb-10 mx-[10%] lg:mx-0 text-center`}>Experience Timeline</p>
      <div className="relative mt-[10px] md:w-[55rem] w-[80%] after:content-[''] after:absolute after:w-[7px] after:h-full after:bg-white after:top-0 md:after:left-[50%] after:left-[30px] after:ml-[-3px] after:z-[-1] after:animate-move-line">
        {
          experiences.map((experience, index) => {
            return <div key={experience.name} className={`relative py-[100px] md:w-1/2 px-[50px] ${isLeft(index) ? `md:left-0` : `md:left-[50%]`} left-[30px]`}>
              <img src={experience.logo} className={`absolute bg-white w-[60px] rounded-[50%] z-10 top-[115px] ${isLeft(index) ? 'md:right-[-30px] left-[-30px] md:left-auto' : 'left-[-30px]'}`}/>
            <div className={`relative flex flex-col flex-wrap w-[90%] ${isLeft(index) ? 'md:ml-[10%]' : "md:ml-0"} flex-wrap py-[20px] px-[30px] bg-[#121212] border rounded-[6px] text-sm`}>
              <b>{experience.name}</b>
              <i className='text-xs'>{experience.job_position}</i>
              <small>{experience.start_date} - {experience.end_date}</small>
              <div className='max-w-full'>
                <ul className='flex flex-col list-disc pl-5'>
                {experience.contributions.map((contrib, index) => {
                  return <li key={index} className='text-xs break-words'>{contrib}</li>
                })}
                </ul>
              </div>
              <span className={`h-0 w-0 absolute top-[28px] z-1 border-y-[15px] border-y-transparent ${isLeft(index) ? 'md:right-[-15px] md:border-l-[15px] md:border-l-white left-[-15px] border-r-[15px] border-r-white md:left-auto md:border-r-0' : 'left-[-15px] border-r-[15px] border-r-white'}`}></span>
            </div>
          </div>
          })
        }
        
      </div>
    </div>
  );
}

export default Experience;
