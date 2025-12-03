import * as React from "react";

import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24 px-4 lg:px-20">
      {/* Section Title */}
      <div className="flex items-center justify-start mb-12">
        <span className="bg-[#1a1443] text-white px-5 py-3 text-xl rounded-md">
          PROJECTS
        </span>
        <span className="w-full h-[2px] bg-[#1a1443] ml-4"></span>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
