import React from 'react';
import "../index.css"
import {Project, projects} from "../data/projectsData"

export default function Projects() {
  return (
    <div className="flex flex-col grow text-white gap-2 ">
        <div className="basis-1/2 grid-cols-c grid-rows-2 grid-flow-col auto-cols-auto auto-rows-auto grid gap-2 overflow-auto overflow-x-scroll">
          {projects.map(project => ProjectEntry(project))}
        </div>
      <div className="border basis-1/2 grow"></div>
    </div>
  );
}

function ProjectEntry(project: Project) {
  return (
    <div className="min-w-1/3 flex flex-col border justify-center items-center mx-2 overflow-hidden">
      <div className="basis-1/2">{project.projectName}</div>
      <div className="basis-1/2">Thumbnail will be here</div>
    </div>
  );
}
