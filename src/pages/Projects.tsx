import React from 'react';
import "../index.css"
import {Project, ownProjects, workProjects, schoolProjects} from "../data/projectsData"

export default function Projects() {
  return (
    <div className="flex flex-col grow text-white gap-2">
      <div className="basis-1/2 flex flex-col p-4">
        <div className="basis-1/6 grid grid-cols-3 font-bold">
          <div className="flex justify-center items-center">
            <button className="border border-2 rounded-full p-3 group hover:translate-y-[-3px] hover:scale-95 hover:bg-indigo-500/25 click:scale-95
          transition-all duration-300">
              School Projects
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="border border-2 rounded-full p-3 group hover:translate-y-[-3px] hover:scale-95 hover:bg-indigo-500/25 click:scale-95
          transition-all duration-300">
              Work Projects
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="border border-2 rounded-full p-3 group hover:translate-y-[-3px] hover:scale-95 hover:bg-indigo-500/25 click:scale-95
          transition-all duration-300">
              Own Projects
            </button>
          </div>
        </div>
        <div className="flex flex-row basis-5/6">
          <div
            className="basis-1/3 grid-cols-1 grid-rows-r grid-flow-row auto-rows-ar grid gap-y-4 overflow-auto">
            {schoolProjects.map(project => ProjectEntry(project))}
          </div>
          <div
            className="basis-1/3 grid-cols-1 grid-rows-r grid-flow-row auto-rows-ar grid gap-y-4 overflow-auto">
            {workProjects.map(project => ProjectEntry(project))}
          </div>
          <div
            className="basis-1/3 grid-cols-1 grid-rows-r grid-flow-row auto-rows-ar grid gap-y-4 overflow-auto">
            {ownProjects.map(project => ProjectEntry(project))}
          </div>
        </div>
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
