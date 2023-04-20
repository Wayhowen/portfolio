export interface Project {
  projectName: string
  projectDescription: string
  link?: string
  ref?: boolean
}

export const schoolProjects: Project[] = [
  { projectName: "Time Reversal", projectDescription: "Test description 3", link: "https://www.google.com", ref: true },
  { projectName: "VEP-api", projectDescription: "Test description 3", link: "https://www.google.com" },
  { projectName: "security-itu", projectDescription: "Test description 3", link: "https://www.google.com" },
  { projectName: "pizzacution-engine", projectDescription: "Test description 3", link: "https://www.google.com" },
  { projectName: "Effervesence", projectDescription: "Test description 3", link: "https://www.google.com" },
];

export const workProjects: Project[] = [
  { projectName: "Content Moderation Platform", projectDescription: "Test description 1", link: "https://www.google.com", ref: true },
  { projectName: "Clock Trace", projectDescription: "Test description 2", link: "https://www.google.com" },
  { projectName: "Personal Finance Manager", projectDescription: "Test description 3", link: "https://www.google.com" },
  { projectName: "Invoice Analyzer", projectDescription: "Test description 1", link: "https://www.google.com" },
  { projectName: "Enalyzer Surveys", projectDescription: "Test description 2", link: "https://www.google.com" },
];

export const ownProjects: Project[] = [
  { projectName: "margin-bot", projectDescription: "Test description 1", link: "https://www.google.com", ref: true },
  { projectName: "daily-racoon", projectDescription: "Test description 2", link: "https://www.google.com" },
  { projectName: "advent-of-code", projectDescription: "Test description 2", link: "https://www.google.com" },
  { projectName: "f1_race_strategy", projectDescription: "Test description 2", link: "https://www.google.com" },
];
