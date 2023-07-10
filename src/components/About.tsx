import React from 'react';

import { open } from '@/utils/font';

function About() {
  return (
    <div className="flex justify-center">
      <div className="flex bg-[#121212] w-[40rem]">
        <p className={`${open.className} font-thin px-12 py-14`}>
          I&apos;m Maxell, a full-stack web developer who finds immense joy and fulfillment in
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
