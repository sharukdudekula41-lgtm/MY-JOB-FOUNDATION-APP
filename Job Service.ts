import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export interface Job {
  id: number;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  salary: string;
  experience: string;
  jobType: string;
  skills: string[];
  description: string;
  responsibilities: string[];
  requirements: string[];
  postedDate: string;
  deadline?: string;
  isSaved?: boolean;
}

export interface JobFilter {
  keyword?: string;
  location?: string;
  experience?: string;
  jobType?: string;
  salaryMin?: number;
  salaryMax?: number;
  page?: number;
  limit?: number;
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const jobService = {
  // Get all jobs
  async getJobs(filters?: JobFilter) {
    const response = await api.get("/jobs", {
      params: filters,
    });

    return response.data;
  },

  // Get job by id
  async getJob(id: number | string): Promise<Job> {
    const response = await api.get<Job>(`/jobs/${id}`);

    return response.data;
  },

  // Search jobs
  async searchJobs(keyword: string) {
    const response = await api.get("/jobs/search", {
      params: { keyword },
    });

    return response.data;
  },

  // Featured jobs
  async getFeaturedJobs() {
    const response = await api.get("/jobs/featured");

    return response.data;
  },

  // Latest jobs
  async getLatestJobs() {
    const response = await api.get("/jobs/latest");

    return response.data;
  },

  // Save job
  async saveJob(jobId: number) {
    const response = await api.post(`/jobs/${jobId}/save`);

    return response.data;
  },

  // Remove saved job
  async unsaveJob(jobId: number) {
    const response = await api.delete(`/jobs/${jobId}/save`);

    return response.data;
  },

  // Saved jobs
  async getSavedJobs() {
    const response = await api.get("/jobs/saved");

    return response.data;
  },

  // Apply for job
  async applyJob(
    jobId: number,
    resumeId?: number,
    coverLetter?: string
  ) {
    const response = await api.post(
      `/jobs/${jobId}/apply`,
      {
        resumeId,
        coverLetter,
      }
    );

    return response.data;
  },

  // User applications
  async getApplications() {
    const response = await api.get("/applications");

    return response.data;
  },

  // Recommended jobs
  async getRecommendedJobs() {
    const response = await api.get("/jobs/recommended");

    return response.data;
  },

  // Similar jobs
  async getSimilarJobs(jobId: number) {
    const response = await api.get(
      `/jobs/${jobId}/similar`
    );

    return response.data;
  },
};

export default jobService;