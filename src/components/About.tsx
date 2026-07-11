'use client';

import React from 'react';
import { open } from '@/utils/font';
import { motion } from 'framer-motion';

function About() {
  return (
    <div id="about" className="flex justify-center w-full md:w-auto pt-16">
      <motion.div
        className="flex bg-[#121212] w-full mx-[10%] md:mx-0 md:w-[40rem]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p
          className={`${open.className} font-thin text-xs sm:text-base px-8 py-10 sm:px-12 sm:py-14`}
        >
          I&apos;m Maxell, an <b><i>AI &amp; Machine Learning Engineer</i></b> with proven expertise
          in architecting production-grade AI systems — from LLM orchestration frameworks and
          multi-agent workflows to RAG-powered applications using OpenAI, LangChain, and AWS.
          I&apos;m also a <b><i>Full Stack Developer</i></b> who finds immense joy in bringing ideas
          to life through code.
          <br />
          <br />
          For me, software development is more than just a career — it&apos;s a canvas where logic
          and creativity intersect. Whether I&apos;m building end-to-end ML pipelines, deploying
          cloud-native solutions on GCP, or crafting seamless user experiences on the web, I&apos;m
          driven by the challenge of turning complex problems into elegant, impactful solutions.
        </p>
      </motion.div>
    </div>
  );
}

export default About;
