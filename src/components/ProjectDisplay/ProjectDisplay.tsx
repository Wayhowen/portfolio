import * as React from 'react';
import {Project} from "../../data/projectsData";

type Props = {
  project: Project
};
export const ProjectDisplay = (props: Props) => {
  const project = props.project;
  return (
    <div className="border-2 rounded-3xl basis-1/2 shrink-0 mx-4 flex flex-col space-between">
      <div className="basis-1/6 flex flex-row items-center border-b-2 rounded-xl">
        <DisplaySection header="Name" displayText={project?.projectName}/>
      </div>
      <div className="basis-4/6 flex flex-row items-center">
        <DisplaySection header="Description" displayText={project?.projectDescription}/>
      </div>
      <div className="basis-1/6 flex flex-row items-center">
        <DisplaySection header="Links" displayText={project?.links}/>
      </div>
    </div>
  );
};

type DisplaySectionProps = {
  header: string
  displayText: string | string[]
}
const DisplaySection = (props: DisplaySectionProps) => {
  return (
    <>
      <div className="px-2 basis-1/6 font-bold">{props.header}:</div>
      {(typeof props.displayText === 'string') ?
        <div className="basis-5/6">{props.displayText}</div>
        :
        <div className="basis-5/6">
          {props.displayText.map((text, index) => (
            <a key={index} href={props.displayText[index]}>{props.displayText}</a>
          ))}
        </div>
      }
    </>
  )
}
