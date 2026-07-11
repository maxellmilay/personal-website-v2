'use client';

import React, { useState, useEffect } from 'react';
import { work, open } from '@/utils/font';
import Image from 'next/image';
import featured, { FeaturedProject } from '@/data/featured';
import { FaExternalLinkAlt, FaGithub, FaArrowRight, FaArrowLeft, FaTimes, FaTrophy } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const isLeftFeatured = (index: number) => index % 2 === 0;

function ProjectModal({ project, onClose }: { project: FeaturedProject; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />

      {/* Modal */}
      <motion.div
        className="relative bg-[#121212] border border-white/15 rounded-xl w-full max-w-2xl max-h-[85vh] overflow-y-auto z-10"
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <div className="relative w-full h-48 sm:h-64">
          <Image src={project.imgURL} alt={project.name} fill className="object-cover rounded-t-xl" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#121212] rounded-t-xl" />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/60 border border-white/20 rounded-full hover:bg-white hover:text-black transition-colors duration-200 z-10"
          aria-label="Close modal"
        >
          <FaTimes className="text-sm" />
        </button>

        <div className="p-6 pt-4">
          {/* Award badge */}
          {project.award && (
            <div className={`${open.className} flex items-center gap-2 text-xs text-yellow-400 mb-3 font-medium`}>
              <FaTrophy />
              {project.award}
            </div>
          )}

          <h2 className={`${work.className} text-2xl font-semibold mb-3`}>{project.name}</h2>

          <p className={`${open.className} text-sm text-white/70 font-thin leading-relaxed mb-5`}>
            {project.longDescription}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`${work.className} text-[10px] border border-white/20 rounded-full px-3 py-1 text-white/60`}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className={`${work.className} flex items-center gap-2 text-sm border border-white/20 rounded px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200`}
              >
                <FaGithub /> GitHub
              </a>
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${work.className} flex items-center gap-2 text-sm border border-white/20 rounded px-4 py-2 hover:bg-white hover:text-black transition-colors duration-200`}
              >
                <FaExternalLinkAlt /> Live Site
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Featured() {
  const [selected, setSelected] = useState<FeaturedProject | null>(null);

  return (
    <div id="featured" className="flex md:w-[55rem] flex-col pt-16">
      <motion.p
        className={`${work.className} text-2xl mb-10 mx-[10%] lg:mx-0`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Featured Projects
      </motion.p>

      {featured.map((data, index) => (
        <motion.div
          className={`group flex lg:flex-row flex-col items-center lg:items-start ${isLeftFeatured(index) ? 'justify-start' : 'justify-end'} mb-16`}
          key={data.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <div
            className="relative w-[80%] md:w-[35rem] h-[12rem] sm:h-[20rem] cursor-pointer"
            onClick={() => setSelected(data)}
          >
            <Image src={data.imgURL} alt={data.name} fill className="object-cover" />
            <div className="w-full h-full bg-black opacity-60 group-hover:opacity-30 duration-200" />
          </div>
          <div
            className={`flex flex-col lg:absolute z-10 lg:w-[55rem] py-5 lg:py-0 lg:h-[20rem] justify-center ${isLeftFeatured(index) ? 'items-end' : 'items-start'}`}
          >
            <button
              className={`${open.className} flex gap-3 items-center text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 mx-auto lg:mx-0 ${isLeftFeatured(index) ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'} duration-300`}
              onClick={() => setSelected(data)}
            >
              {!isLeftFeatured(index) && <FaArrowLeft className="hidden group-hover:block duration-300 text-[1.25rem]" />}
              {data.name}
              {isLeftFeatured(index) && <FaArrowRight className="hidden group-hover:block duration-300 text-[1.25rem]" />}
            </button>
            <p
              className={`bg-[#121212] w-[95%] md:mx-0 md:w-[30rem] font-thin text-sm p-5 ${open.className} mx-auto lg:mx-0`}
            >
              {data.description}
            </p>
            <div className={`flex flex-wrap ${work.className} font-thin text-xs sm:text-sm mx-auto lg:mx-0`}>
              {data.tech.map((value) => (
                <p key={value} className="py-2 px-2 text-center text-white/60">
                  {value}
                </p>
              ))}
            </div>
            <div className="flex items-center gap-2 mx-auto lg:mx-0 mt-1">
              {data.repo && (
                <a href={data.repo} target="_blank" rel="noopener noreferrer" className="px-1 py-1 hover:-translate-y-1 duration-200">
                  <FaGithub />
                </a>
              )}
              {data.link && (
                <a href={data.link} target="_blank" rel="noopener noreferrer" className="px-1 py-1 hover:-translate-y-1 duration-200">
                  <FaExternalLinkAlt />
                </a>
              )}
              <button
                onClick={() => setSelected(data)}
                className={`${work.className} text-xs border border-white/20 rounded px-3 py-1 ml-2 hover:bg-white hover:text-black transition-colors duration-200`}
              >
                Details
              </button>
            </div>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}

export default Featured;
