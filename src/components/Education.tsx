'use client';

import React from 'react';
import { work, open } from '@/utils/font';
import { educationList, certifications } from '@/data/education';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

function Education() {
  return (
    <div id="education" className="flex flex-col items-center pt-16 w-full">
      <motion.p
        className={`${work.className} text-2xl mb-10 mx-[10%] lg:mx-0 text-center`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.p>

      <div className="flex flex-col gap-5 w-full max-w-2xl mx-[10%] lg:mx-0 px-[5%] lg:px-0">
        {educationList.map((edu, i) => (
          <motion.div
            key={edu.id}
            className="flex gap-4 bg-[#121212] border border-white/10 rounded-xl p-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <FaGraduationCap className="text-white/60 text-sm" />
            </div>
            <div>
              <p className={`${work.className} font-semibold text-sm`}>{edu.institution}</p>
              <p className={`${open.className} text-xs text-white/60 italic mb-1`}>{edu.degree}</p>
              <p className={`${open.className} text-xs text-white/40 mb-3`}>
                {edu.location} &nbsp;·&nbsp; {edu.period}
              </p>
              <ul className="list-disc pl-4 space-y-1">
                {edu.achievements.map((a, ai) => (
                  <li key={ai} className={`${open.className} text-xs text-white/70 leading-relaxed`}>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <motion.p
        className={`${work.className} text-xl mt-12 mb-6 mx-[10%] lg:mx-0 text-center`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Certifications
      </motion.p>

      <div className="flex flex-col gap-4 w-full max-w-2xl mx-[10%] lg:mx-0 px-[5%] lg:px-0">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.id}
            className="flex gap-4 bg-[#121212] border border-white/10 rounded-xl p-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <FaCertificate className="text-white/60 text-sm" />
            </div>
            <div>
              <p className={`${work.className} font-semibold text-sm`}>{cert.name}</p>
              <p className={`${open.className} text-xs text-white/50 italic mb-2`}>{cert.issuer}</p>
              <ul className="list-disc pl-4 space-y-1">
                {cert.highlights.map((h, hi) => (
                  <li key={hi} className={`${open.className} text-xs text-white/70 leading-relaxed`}>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;
