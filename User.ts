export interface User {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  avatar?: string;
  title?: string;
  location?: string;
  bio?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
  skills?: string[];
  resumeUrl?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Education {
  id?: number;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number;
  grade?: string;
  description?: string;
}

export interface Experience {
  id?: number;
  company: string;
  position: string;
  location: string;
  employmentType?: string;
  startDate: string;
  endDate?: string;
  currentlyWorking?: boolean;
  description: string;
}

export interface Project {
  id?: number;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Skill {
  id?: number;
  name: string;
  level?: "Beginner" | "Intermediate" | "Advanced" | "Expert";
}

export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  portfolio?: string;
}

export interface Resume {
  id?: number;
  fileName: string;
  fileUrl: string;
  uploadedAt: string;
}

export interface UserProfile {
  user: User;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  socialLinks: SocialLinks;
  resume?: Resume;
}

export interface UpdateProfileRequest {
  fullName?: string;
  phone?: string;
  title?: string;
  location?: string;
  bio?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  portfolio?: string;
}