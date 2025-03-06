export interface ExperienceItem {
  title: string;
  period: string;
  company: string;
  responsibilities: string[];
}

export const experienceItems: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    period: "2021 - current time",
    company: "Ministry of Emergency Situations",
    responsibilities: ["Developing new task management-system (Vue/Symfony)"],
  },
  {
    title: "Junior Full-Stack Developer",
    period: "2020 - 2021",
    company: "innoscripta GmbH",
    responsibilities: [
      "Developed internal CRM-system (React/Redux/Laravel)",
      "Developed Project Management Tool Clusterix (React/Redux)",
      "Developed microservices (Vanilla JS)",
      "Implemented new avatar system for 850 users with future growing to 10k (AWS)",
      "Developed architecture and transfer main website to new platform (NEXT.js)",
    ],
  },
];
