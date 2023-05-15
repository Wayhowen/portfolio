import React, {ForwardedRef, forwardRef, MutableRefObject, useRef, useState} from 'react';
import "../index.css"
import {Project, ownProjects, workProjects, schoolProjects} from "../data/projectsData"
import {ProjectDisplay} from "../components/ProjectDisplay/ProjectDisplay";

export default function Projects() {
  const schoolRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  const workRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  const ownRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

  const [displayProject, setDisplayProject] = useState<Project>({projectName: "Project name..", projectDescription: "Project description..", links: []})

  return (
    <div className="flex flex-col grow text-white gap-2">
      <div className="basis-1/2 flex flex-col p-4 gap-2 overflow-hidden">
        <div className="basis-1/6 grid grid-cols-3 font-bold gap-4">
          <ProjectButton text="School Projects" ref={schoolRef}/>
          <ProjectButton text="Work Projects" ref={workRef}/>
          <ProjectButton text="Own Projects" ref={ownRef}/>
        </div>
        <div className="flex flex-row basis-5/6 justify-center sm:justify-self overflow-hidden">
          {/*Desktop view*/}
          <div
            className="basis-1/3 grid-cols-1 grid-rows-r grid-flow-row auto-rows-ar gap-y-4 overflow-y-scroll hidden sm:grid">
            {schoolProjects.map(project => <ProjectEntry key={project.projectName} project={project}
                                                         onClick={() => setDisplayProject(project)}/>)}
          </div>
          <div
            className="basis-1/3 grid-cols-1 grid-rows-r grid-flow-row auto-rows-ar gap-y-4 overflow-y-scroll hidden sm:grid">
            {workProjects.map(project => <ProjectEntry key={project.projectName} project={project}
                                                       onClick={() => setDisplayProject(project)}/>)}
          </div>
          <div
            className="basis-1/3 grid-cols-1 grid-rows-r grid-flow-row auto-rows-ar gap-y-4 overflow-y-scroll hidden sm:grid">
            {ownProjects.map(project => <ProjectEntry key={project.projectName} project={project}
                                                      onClick={() => setDisplayProject(project)}/>)}
          </div>
          {/*Mobile view*/}
          <div
            className="basis-full grid-cols-1 grid-rows-r grid-flow-row auto-rows-ar gap-y-4 overflow-y-scroll grid sm:hidden">
            {[...schoolProjects, ...workProjects, ...ownProjects].map(project => <ProjectEntry key={project.projectName}
                                                                                               project={project} ref={
              schoolProjects.includes(project) ? schoolRef : workProjects.includes(project) ? workRef : ownRef
            } onClick={() => setDisplayProject(project)}
            />)}
          </div>
        </div>
      </div>
      <ProjectDisplay project={displayProject}/>
    </div>
  );
}

interface ButtonProps {
  text: string
}

const ProjectButton = forwardRef<HTMLDivElement, ButtonProps>((props, ref: ForwardedRef<HTMLDivElement>) => {
  const clickHandler = () => {
    // TODO: I DONT KNOW HOW TO FIX THIS ERROR but it works so
    // @ts-ignore
    ref?.current?.scrollIntoView()
  }
  return (
    <div className="flex justify-center items-center">
      <button className="border border-2 rounded-full p-3 group hover:translate-y-[-3px] hover:scale-95 hover:bg-indigo-500/25 click:scale-95
          transition-all duration-300" onClick={clickHandler}>
        {props.text}
      </button>
    </div>
  )
})

interface ProjectEntryProps {
  project: Project
  onClick: () => void;
}

const ProjectEntry = forwardRef<HTMLDivElement, ProjectEntryProps>((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div ref={props.project.ref ? ref : null}
           className="h-full w-5/6 flex flex-col border rounded-custom border-4 justify-center items-center">
        <div
          className="basis-1/6 py-3 outline outline-4 rounded-t-custom w-full text-center font-bold bg-gray-400/50">{props.project.projectName}</div>
        {/*TODO: add thumbnail or something maybe*/}
        <div className="basis-5/6 w-full flex flex-col justify-end items-center  bg-inherit">
          <button className="flex flex-column items-center justify-center outline outline-4 p-3 w-full rounded-b-custom"
                  onClick={props.onClick}>
            Check out!
          </button>
        </div>
      </div>
    </div>
  );
})
