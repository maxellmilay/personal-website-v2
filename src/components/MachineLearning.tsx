'use client';

import React from 'react';
import { work, open } from '@/utils/font';
import skills from '@/data/skills';
import { motion } from 'framer-motion';

function Skills() {
  return (
    <div id="skills" className="flex flex-col items-center pt-16 w-full">
      <motion.p
        className={`${work.className} text-2xl mb-10 mx-[10%] lg:mx-0 text-center`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills &amp; Expertise
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-4xl mx-[10%] lg:mx-0 px-[5%] lg:px-0">
        {skills.map((group, gi) => (
          <motion.div
            key={group.category}
            className="bg-[#121212] border border-white/10 rounded-xl p-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: gi * 0.1 }}
          >
            <p className={`${work.className} text-sm font-semibold mb-4 text-white/80`}>
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <motion.span
                  key={skill}
                  className={`${open.className} text-xs border border-white/15 rounded-full px-3 py-1 text-white/60 hover:border-white/40 hover:text-white transition-colors duration-200`}
                  whileHover={{ scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;