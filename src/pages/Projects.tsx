import React, {ForwardedRef, forwardRef, MutableRefObject, useRef} from 'react';
import "../index.css"
import {Project, ownProjects, workProjects, schoolProjects} from "../data/projectsData"

export default function Projects() {
  const schoolRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  const workRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();
  const ownRef: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>();

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
            className="basis-1/3 grid-cols-1 grid-rows-r grid-flow-row auto-rows-ar gap-y-4 overflow-scroll hidden sm:grid">
            {schoolProjects.map(project => <ProjectEntry project={project}/>)}
          </div>
          <div
            className="basis-1/3 grid-cols-1 grid-rows-r grid-flow-row auto-rows-ar gap-y-4 overflow-scroll hidden sm:grid">
            {workProjects.map(project => <ProjectEntry project={project}/>)}
          </div>
          <div
            className="basis-1/3 grid-cols-1 grid-rows-r grid-flow-row auto-rows-ar gap-y-4 overflow-scroll hidden sm:grid">
            {ownProjects.map(project => <ProjectEntry project={project}/>)}
          </div>
          {/*Mobile view*/}
          <div
            className="basis-full grid-cols-1 grid-rows-r grid-flow-row auto-rows-ar gap-y-4 overflow-scroll grid sm:hidden">
            {[...schoolProjects, ...workProjects, ...ownProjects].map(project => <ProjectEntry key={project.projectName} project={project} ref={
              schoolProjects.includes(project) ? schoolRef : workProjects.includes(project) ? workRef : ownRef
            }/>)}
          </div>
        </div>
      </div>
      <div className="border basis-1/2 shrink-0"></div>
    </div>
  );
}

interface ButtonProps {
  text: string
  ref?: ForwardedRef<HTMLDivElement>
}

const ProjectButton = forwardRef<HTMLDivElement, ButtonProps>((props, ref: ForwardedRef<HTMLDivElement>) => {
  const clickHandler = () => {
    if (ref) {
      // @ts-ignore
      ref.current.scrollIntoView()
    }
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
}

const ProjectEntry = forwardRef<HTMLDivElement, ProjectEntryProps>((props, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div ref={props.project.ref ? ref : null} className="flex flex-col border justify-center items-center mx-2">
      <div className="basis-1/2">{props.project.projectName}</div>
      <div className="basis-1/2">Thumbnail</div>
    </div>
  );
})
