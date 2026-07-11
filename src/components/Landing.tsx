'use client';

import React from 'react';
import Image from 'next/image';
import { work, open } from '@/utils/font';
import Link from 'next/link';
import { motion } from 'framer-motion';

function Landing() {
  return (
    <div className="flex lg:flex-row flex-col justify-center items-center mt-9 sm:mt-12">
      <motion.div
        className="relative w-60 h-60 sm:w-72 sm:h-72 mb-10 lg:mb-0 lg:mr-10 hover:scale-110 duration-200"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Image src="/images/milay.webp" alt="Profile" fill className="object-cover rounded-[50%]" />
      </motion.div>
      <div className="flex flex-col items-center lg:items-start justify-center">
        <motion.h1
          className={`${work.className} text-4xl sm:text-5xl mb-1`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Maxell Milay
        </motion.h1>
        <motion.h2
          className={`${open.className} text-lg sm:text-xl font-thin mb-8`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          AI &amp; Machine Learning Engineer
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            className={`${work.className} p-4 border border-solid border-white rounded hover:bg-white duration-300 hover:text-black`}
            href="#footer"
          >
            LET&apos;S CONNECT
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Landing;
