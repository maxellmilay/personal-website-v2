import React from 'react';

import { open } from '@/utils/font';

function About() {
  return (
    <div id="about" className="flex justify-center w-full md:w-auto pt-16">
      <div className="flex bg-[#121212] w-full mx-[10%] md:mx-0 md:w-[40rem]">
        <p
          className={`${open.className} font-thin text-xs sm:text-base px-8 py-10 sm:px-12 sm:py-14`}
        >
          I&apos;m Maxell, a <b><i>Machine Learning Engineer</i></b> and <b><i>Full Stack Developer</i></b> who finds immense joy and fulfillment in
          bringing ideas to life through code. <br />
          <br />
          For me, software development is more than just a career—it&apos;s a playground where I can
          freely explore, experiment, and transform my ideas into tangible solutions. It&apos;s a
          canvas where I can paint with lines of code, combining logic and artistry to craft
          innovative software that makes a difference.
        </p>
      </div>
    </div>
  );
}

export default About;
