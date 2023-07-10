import React from 'react';
import Image from 'next/image';
import { work, open } from '@/utils/font';

function Landing() {
  return (
    <div className="flex justify-center mb-10">
      <div className="relative w-72 h-72 mr-10">
        <Image src="/images/milay.jpeg" alt="Profile" fill className="object-cover rounded-[50%]" />
      </div>
      <div className="flex flex-col items-start justify-center">
        <h1 className={`${work.className} text-5xl mb-1`}>Maxell Milay</h1>
        <h2 className={`${open.className} text-xl font-thin mb-8`}>Full Stack Developer</h2>
        <button className={`${work.className} p-4 border border-solid border-white rounded`}>
          LET&apos;S CONNECT
        </button>
      </div>
    </div>
  );
}

export default Landing;
