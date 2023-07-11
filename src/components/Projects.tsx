import React from 'react';
import { work, open } from '@/utils/font';
import projects from '@/data/projects';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

function Projects() {
  return (
    <div className="flex flex-col w-[55rem] mb-16 justify-center">
      <p className={`${work.className} text-2xl mb-10`}>Other Projects</p>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => {
          return (
            <div key={project.id} className="flex justify-center items-center my-5">
              <div className="flex flex-col w-[17rem] h-[17rem] bg-[#121212] p-5">
                <p className={`font-semibold text-xl mb-3 ${open.className} h-[4rem]`}>
                  {project.name}
                </p>
                <p className={`font-thin text-sm mb-8 ${open.className} h-[4rem]`}>
                  {project.description}
                </p>
                <div className="flex mb-6">
                  {project.tech?.map((data, index) => {
                    return (
                      <p key={data} className={`mr-2 font-thin text-xs ${work.className}`}>
                        {data}
                      </p>
                    );
                  })}
                </div>
                <div className="flex">
                  {project.link != '' && <FaExternalLinkAlt className="mr-2" />}
                  {project.repo != '' && <FaGithub className="mr-2" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
