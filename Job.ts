export interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  salary: string;
  experience: string;
  jobType: JobType;
  category?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits?: string[];
  vacancies?: number;
  postedDate: string;
  lastDate?: string;
  status?: JobStatus;
  isFeatured?: boolean;
  isRemote?: boolean;
  isSaved?: boolean;
  isApplied?: boolean;
}

export interface JobApplication {
  id: number;
  jobId: number;
  userId: number;
  appliedDate: string;
  status: ApplicationStatus;
  resumeUrl?: string;
  coverLetter?: string;
}

export interface JobFilter {
  keyword?: string;
  location?: string;
  category?: string;
  experience?: string;
  jobType?: JobType;
  salaryMin?: number;
  salaryMax?: number;
  page?: number;
  limit?: number;
  sortBy?: "latest" | "salary" | "company";
}

export interface JobSearchResponse {
  jobs: Job[];
  total: number;
  page: number;
  totalPages: number;
}

export interface SavedJob {
  id: number;
  jobId: number;
  savedAt: string;
}

export type JobType =
  | "Full Time"
  | "Part Time"
  | "Internship"
  | "Remote"
  | "Contract"
  | "Freelance";

export type JobStatus =
  | "Open"
  | "Closed"
  | "Expired";

export type ApplicationStatus =
  | "Applied"
  | "Under Review"
  | "Interview"
  | "Selected"
  | "Rejected";