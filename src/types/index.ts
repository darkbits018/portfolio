export interface SkillCategory {
  title: string;
  icon: JSX.Element;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  role?: string;
  impact?: string;
  recognition?: string;
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  responsibilities: string[];
}