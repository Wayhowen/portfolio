import * as React from 'react';
import {Project} from "../../data/projectsData";

type Props = {
  project: Project | null
};
export const ProjectDisplay = (props: Props) => {
  const project = props.project;
  return (
    <div className="border basis-1/2 shrink-0 mx-4 ">
      {project?.projectName}
    </div>
  );
};
