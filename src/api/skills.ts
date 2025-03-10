export interface SkillItem {
  skill: string;
  icon: string;
}

export interface SkillCategory {
  category: string;
  skills: SkillItem[];
}

export const skills: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { skill: "JavaScript", icon: "js" },
      { skill: "TypeScript", icon: "typescript" },
      { skill: "Go", icon: "go" },
    ],
  },
  {
    category: "Frontend Development",
    skills: [
      { skill: "HTML5", icon: "html5" },
      { skill: "CSS3", icon: "css3" },
      { skill: "Tailwind CSS", icon: "tailwindcss" },
      { skill: "React", icon: "reactjs" },
      { skill: "Vue.js", icon: "vuejs" },
      { skill: "Next.js", icon: "nextjs" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { skill: "Node.js", icon: "nodejs" },
      { skill: "Nest.js", icon: "nestjs" },
    ],
  },
  {
    category: "State Management",
    skills: [
      { skill: "React Query", icon: "reactquery" },
      { skill: "Redux", icon: "redux" },
      { skill: "Zod", icon: "zod" },
    ],
  },
  {
    category: "Build Tools",
    skills: [
      { skill: "Vite", icon: "vitejs" },
      { skill: "Webpack", icon: "webpack" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { skill: "MySQL", icon: "mysql" },
      { skill: "PostgreSQL", icon: "postgresql" },
      { skill: "MongoDB", icon: "mongodb" },
    ],
  },
  {
    category: "Cloud Platforms",
    skills: [
      { skill: "AWS", icon: "aws" },
      { skill: "Azure", icon: "azure" },
      { skill: "Google Cloud Platform (GCP)", icon: "gcloud" },
    ],
  },
  {
    category: "DevOps & CI/CD",
    skills: [
      { skill: "Kubernetes", icon: "kubernetes" },
      { skill: "Docker", icon: "docker" },
      { skill: "GitLab CI", icon: "gitlab" },
    ],
  },
  {
    category: "Version Control",
    skills: [
      { skill: "Git", icon: "git" },
      { skill: "GitLab", icon: "gitlab" },
      { skill: "GitHub", icon: "github" },
    ],
  },
];
