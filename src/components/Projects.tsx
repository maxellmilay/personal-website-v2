'use client';

import React from 'react';
import { work, open } from '@/utils/font';
import projects from '@/data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function Projects() {
  return (
    <div id="projects" className="flex flex-col pt-16 justify-center">
      <motion.p
        className={`${work.className} text-2xl mb-10`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Other Projects
      </motion.p>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="flex justify-center items-center my-5"
            variants={item}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
          >
            <div className="flex flex-col w-[17rem] min-h-[17rem] bg-[#121212] p-5 border border-white/0 hover:border-white/10 transition-colors duration-200">
              <p className={`font-semibold text-xl mb-3 ${open.className}`}>
                {project.name}
              </p>
              <p className={`font-thin text-sm mb-6 ${open.className} text-white/70 flex-1`}>
                {project.description}
              </p>
              <div className="flex flex-wrap mb-4 gap-1">
                {project.tech?.map((data) => (
                  <p key={data} className={`font-thin text-xs text-white/50 ${work.className}`}>
                    {data}
                  </p>
                ))}
              </div>
              <div className="flex gap-3">
                {project.link !== '' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 duration-200">
                    <FaExternalLinkAlt />
                  </a>
                )}
                {project.repo !== '' && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-1 duration-200">
                    <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Projects;
