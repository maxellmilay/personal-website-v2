'use client';

import React, { useState, useRef } from 'react';
import { work, open } from '@/utils/font';
import experiences from '@/data/experience';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

const CARD_WIDTH = 260;
const CARD_GAP = 60;
const SLOT_WIDTH = CARD_WIDTH + CARD_GAP;

function Experience() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -SLOT_WIDTH : SLOT_WIDTH, behavior: 'smooth' });
  };

  const handleCardClick = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const active = activeIndex !== null ? experiences[activeIndex] : null;

  return (
    <div id="experience" className="flex flex-col items-center pt-16 w-full">
      <motion.p
        className={`${work.className} text-2xl mb-12 mx-[10%] lg:mx-0 text-center`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience Timeline
      </motion.p>

      {/* ── Desktop: horizontal timeline ── */}
      <div className="hidden md:block w-full max-w-5xl px-4">
        <div className="relative">
          {/* Navigation arrows */}
          <button
            onClick={() => scrollBy('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center border border-white/20 rounded-full bg-black hover:bg-white hover:text-black transition-colors duration-200"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-sm" />
          </button>
          <button
            onClick={() => scrollBy('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 flex items-center justify-center border border-white/20 rounded-full bg-black hover:bg-white hover:text-black transition-colors duration-200"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-sm" />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide mx-10"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div
              className="relative flex"
              style={{ width: `${experiences.length * SLOT_WIDTH}px`, height: '420px' }}
            >
              {/* Horizontal line */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-white/30" />

              {/* Timeline slots */}
              {experiences.map((exp, index) => {
                const isAbove = index % 2 === 0;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={`${exp.name}-${index}`}
                    className="relative flex-shrink-0 flex flex-col items-center justify-center"
                    style={{ width: `${SLOT_WIDTH}px`, height: '420px' }}
                  >
                    {/* Card */}
                    <motion.div
                      className={`absolute ${isAbove ? 'bottom-[calc(50%+28px)]' : 'top-[calc(50%+28px)]'} cursor-pointer`}
                      style={{ width: `${CARD_WIDTH}px` }}
                      initial={{ opacity: 0, y: isAbove ? -20 : 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      whileHover={{ y: isAbove ? -4 : 4 }}
                      onClick={() => handleCardClick(index)}
                    >
                      <div
                        className={`bg-[#121212] border rounded-lg p-4 transition-colors duration-200 ${
                          isActive ? 'border-white/60' : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        {/* Logo / fallback */}
                        <div className="flex items-center gap-3 mb-3">
                          {exp.logo ? (
                            <div className="relative w-8 h-8 flex-shrink-0">
                              <Image
                                src={exp.logo}
                                alt={exp.name}
                                fill
                                className="rounded-full bg-white object-contain p-0.5"
                              />
                            </div>
                          ) : (
                            <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-bold">
                              {exp.logoFallback}
                            </div>
                          )}
                          <div>
                            <p className={`${work.className} font-semibold text-sm leading-tight`}>{exp.name}</p>
                            <p className={`${open.className} text-[10px] text-white/60 italic leading-tight`}>{exp.job_position}</p>
                          </div>
                        </div>
                        <p className={`${open.className} text-[10px] text-white/50`}>
                          {exp.start_date} – {exp.end_date}
                        </p>
                        <p className={`${open.className} text-[10px] text-white/40 mt-0.5 flex items-center gap-1`}>
                          <FaMapMarkerAlt className="text-[8px]" /> {exp.location}
                        </p>
                        <p className={`${open.className} text-[10px] text-white/40 mt-2`}>
                          Click to {isActive ? 'collapse' : 'expand'} ↓
                        </p>
                      </div>
                    </motion.div>

                    {/* Vertical connector */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 w-px bg-white/30 ${
                        isAbove ? 'bottom-1/2' : 'top-1/2'
                      }`}
                      style={{ height: '28px' }}
                    />

                    {/* Dot */}
                    <div
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full border-2 transition-all duration-200 ${
                        isActive
                          ? 'w-4 h-4 bg-white border-white'
                          : 'w-3 h-3 bg-black border-white/60'
                      }`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Detail panel */}
        <AnimatePresence>
          {active && (
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35 }}
              className="overflow-hidden mt-6"
            >
              <div className="bg-[#121212] border border-white/10 rounded-xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    {active.logo ? (
                      <div className="relative w-10 h-10 flex-shrink-0">
                        <Image src={active.logo} alt={active.name} fill className="rounded-full bg-white object-contain p-0.5" />
                      </div>
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-bold">
                        {active.logoFallback}
                      </div>
                    )}
                    <div>
                      <p className={`${work.className} font-semibold text-base`}>{active.name}</p>
                      <p className={`${open.className} text-sm text-white/60 italic`}>{active.job_position}</p>
                      <p className={`${open.className} text-xs text-white/40 mt-0.5`}>
                        {active.start_date} – {active.end_date} &nbsp;·&nbsp; {active.location}
                      </p>
                    </div>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2">
                  {active.contributions.map((c, i) => (
                    <motion.li
                      key={i}
                      className={`${open.className} text-xs text-white/80 leading-relaxed`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                    >
                      {c}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Mobile: vertical timeline ── */}
      <div className="md:hidden w-[85%] relative">
        {/* Vertical line */}
        <div className="absolute left-[22px] top-0 bottom-0 w-px bg-white/30" />

        <div className="flex flex-col gap-6 pl-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`mobile-${exp.name}-${index}`}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
            >
              {/* Dot */}
              <div className="absolute -left-[42px] top-4 w-3 h-3 rounded-full border-2 border-white/60 bg-black" />

              <div
                className="bg-[#121212] border border-white/10 rounded-lg p-4 cursor-pointer hover:border-white/30 transition-colors"
                onClick={() => handleCardClick(index)}
              >
                <div className="flex items-center gap-3 mb-2">
                  {exp.logo ? (
                    <div className="relative w-7 h-7 flex-shrink-0">
                      <Image src={exp.logo} alt={exp.name} fill className="rounded-full bg-white object-contain p-0.5" />
                    </div>
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-[10px] font-bold">
                      {exp.logoFallback}
                    </div>
                  )}
                  <div>
                    <p className={`${work.className} font-semibold text-sm`}>{exp.name}</p>
                    <p className={`${open.className} text-[10px] text-white/60 italic`}>{exp.job_position}</p>
                  </div>
                </div>
                <p className={`${open.className} text-[10px] text-white/40`}>
                  {exp.start_date} – {exp.end_date} · {exp.location}
                </p>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="list-disc pl-5 mt-3 space-y-1 overflow-hidden"
                    >
                      {exp.contributions.map((c, ci) => (
                        <li key={ci} className={`${open.className} text-xs text-white/80 leading-relaxed`}>
                          {c}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
