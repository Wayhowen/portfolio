import * as React from 'react';
import {Project} from "../../data/projectsData";

type Props = {
  project: Project | null
};
export const ProjectDisplay = (props: Props) => {
  const project = props.project;
  return (
    <div className="border-2 rounded-3xl basis-1/2 shrink-0 mx-4 flex flex-col ">
      <div>
        <DisplaySection displayText={project?.projectName}/>
      </div>
      <div>
        <DisplaySection displayText={project?.projectDescription}/>
      </div>
      <div>
        <DisplaySection displayText={project?.link}/>
      </div>
    </div>
  );
};

type DisplaySectionProps = {
  displayText: string | undefined
}
const DisplaySection = (props: DisplaySectionProps) => {
  return (
    <>
      <div></div>
      <div>{props.displayText}</div>
    </>
  )
}
