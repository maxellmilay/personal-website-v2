import React from 'react';
import Image from 'next/image';
import { work, open } from '@/utils/font';

function Landing() {
  return (
    <div className="flex lg:flex-row flex-col justify-center mb-16 mt-12">
      <div className="relative w-72 h-72 mb-10 lg:mb-0 lg:mr-10">
        <Image src="/images/milay.jpeg" alt="Profile" fill className="object-cover rounded-[50%]" />
      </div>
      <div className="flex flex-col items-center lg:items-start justify-center">
        <h1 className={`${work.className} text-5xl mb-1`}>Maxell Milay</h1>
        <h2 className={`${open.className} text-xl font-thin mb-8`}>Full Stack Developer</h2>
        <button
          className={`${work.className} p-4 border border-solid border-white rounded hover:bg-white hover:text-black`}
        >
          LET&apos;S CONNECT
        </button>
      </div>
    </div>
  );
}

export default Landing;
