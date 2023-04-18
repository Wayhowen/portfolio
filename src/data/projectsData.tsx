export interface Project {
  projectName: string
  projectDescription: string
  link?: string
}

export const schoolProjects: Project[] = [
  { projectName: "Time Reversal", projectDescription: "Test description 3" },
  { projectName: "VEP-api", projectDescription: "Test description 3" },
  { projectName: "security-itu", projectDescription: "Test description 3" },
  { projectName: "pizzacution-engine", projectDescription: "Test description 3" },
  { projectName: "Effervesence", projectDescription: "Test description 3" },
];

export const workProjects: Project[] = [
  { projectName: "Content Moderation Platform", projectDescription: "Test description 1" },
  { projectName: "Clock Trace", projectDescription: "Test description 2" },
  { projectName: "Personal Finance Manager", projectDescription: "Test description 3" },
  { projectName: "Invoice Analyzer", projectDescription: "Test description 1" },
  { projectName: "Enalyzer Surveys", projectDescription: "Test description 2" },
];

export const ownProjects: Project[] = [
  { projectName: "margin-bot", projectDescription: "Test description 1" },
  { projectName: "daily-racoon", projectDescription: "Test description 2" },
  { projectName: "advent-of-code", projectDescription: "Test description 2" },
  { projectName: "f1_race_strategy", projectDescription: "Test description 2" },
];
