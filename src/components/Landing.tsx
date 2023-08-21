import React from 'react';
import Image from 'next/image';
import { work, open } from '@/utils/font';
import Link from 'next/link';

function Landing() {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center mb-16 mt-9 sm:mt-12">
      <div className="relative w-60 h-60 sm:w-72 sm:h-72 mb-10 lg:mb-0 lg:mr-10 hover:scale-110 duration-200">
        <Image src="/images/milay.webp" alt="Profile" fill className="object-cover rounded-[50%]" />
      </div>
      <div className="flex flex-col items-center lg:items-start justify-center">
        <h1 className={`${work.className} text-4xl sm:text-5xl mb-1`}>Maxell Milay</h1>
        <h2 className={`${open.className} text-lg sm:text-xl font-thin mb-8`}>
          Full Stack Developer
        </h2>
        <Link
          className={`${work.className} p-4 border border-solid border-white rounded hover:bg-white duration-300 hover:text-black`}
          href="#footer"
        >
          LET&apos;S CONNECT
        </Link>
      </div>
    </div>
  );
}

export default Landing;
