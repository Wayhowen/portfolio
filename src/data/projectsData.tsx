export interface Project {
  projectName: string
  projectDescription: string
  links: string[]
  ref?: boolean
}

export const schoolProjects: Project[] = [
  {projectName: "Time Reversal", projectDescription: "Test description 3", links: ["https://www.google.com"], ref: true},
  {projectName: "VEP-api", projectDescription: "Test description 3", links: ["https://www.google.com"]},
  {projectName: "security-itu", projectDescription: "Test description 3", links: ["https://www.google.com"]},
  {projectName: "pizzacution-engine", projectDescription: "Test description 3", links: ["https://www.google.com"]},
  {projectName: "Effervesence", projectDescription: "Test description 3", links: ["https://www.google.com"]},
  {
    projectName: "Gripper Testing",
    projectDescription: `Written as part of my master thesis on testing different grippers for drones.
    This project is a controller for a UR-5 robotic arm written in Python with python-urx and bluetooth modules.
     The idea behind the controller is to make the automated tests of different grippers repeatable as to eliminate variance and make the overall gripper designs more comparable.
     When running the project, the tester is presented with a console line application that will output all of the important information to the stdout and when needed, ask the tester to exchange the tested object or to
     provide the payload weight. There are also some pieces of code written in Arduino that are uploaded to the gripper itself to allow for communication between the gripper and the suite.`,
    links: ["https://github.com/Wayhowen/gripper-testing"]
  }
];

export const workProjects: Project[] = [
  {
    projectName: "Content Moderation Platform",
    projectDescription: "Test description 1",
    links: ["https://www.google.com"],
    ref: true
  },
  {projectName: "Clock Trace", projectDescription: "Test description 2", links: ["https://www.google.com"]},
  {projectName: "Personal Finance Manager", projectDescription: "Test description 3", links: ["https://www.google.com"]},
  {projectName: "Invoice Analyzer", projectDescription: "Test description 1", links: ["https://www.google.com"]},
  {projectName: "Enalyzer Surveys", projectDescription: "Test description 2", links: ["https://www.google.com"]},
];

export const ownProjects: Project[] = [
  {projectName: "margin-bot", projectDescription: "Test description 1", links: ["https://www.google.com"], ref: true},
  {projectName: "daily-racoon", projectDescription: "Test description 2", links: ["https://www.google.com"]},
  {projectName: "advent-of-code", projectDescription: "Test description 2", links: ["https://www.google.com"]},
  {projectName: "f1_race_strategy", projectDescription: "Test description 2", links: ["https://www.google.com"]},
];
