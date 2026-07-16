import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export interface UserProfile {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  location: string;
  title: string;
  bio: string;
  avatar?: string;
  website?: string;
  github?: string;
  linkedin?: string;
}

export interface Education {
  id?: number;
  institution: string;
  degree: string;
  fieldOfStudy: string;
  startYear: number;
  endYear: number;
}

export interface Experience {
  id?: number;
  company: string;
  position: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string;
}

export interface Skill {
  id?: number;
  name: string;
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach Authorization Token
api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const profileService = {
  // Get Profile
  async getProfile(): Promise<UserProfile> {
    const response = await api.get<UserProfile>("/profile");
    return response.data;
  },

  // Update Profile
  async updateProfile(data: Partial<UserProfile>) {
    const response = await api.put("/profile", data);
    return response.data;
  },

  // Upload Profile Image
  async uploadAvatar(file: File) {
    const formData = new FormData();

    formData.append("avatar", file);

    const response = await api.post(
      "/profile/avatar",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  // Education

  async getEducation() {
    const response = await api.get("/profile/education");
    return response.data;
  },

  async addEducation(data: Education) {
    const response = await api.post(
      "/profile/education",
      data
    );

    return response.data;
  },

  async updateEducation(
    id: number,
    data: Education
  ) {
    const response = await api.put(
      `/profile/education/${id}`,
      data
    );

    return response.data;
  },

  async deleteEducation(id: number) {
    const response = await api.delete(
      `/profile/education/${id}`
    );

    return response.data;
  },

  // Experience

  async getExperience() {
    const response = await api.get("/profile/experience");
    return response.data;
  },

  async addExperience(data: Experience) {
    const response = await api.post(
      "/profile/experience",
      data
    );

    return response.data;
  },

  async updateExperience(
    id: number,
    data: Experience
  ) {
    const response = await api.put(
      `/profile/experience/${id}`,
      data
    );

    return response.data;
  },

  async deleteExperience(id: number) {
    const response = await api.delete(
      `/profile/experience/${id}`
    );

    return response.data;
  },

  // Skills

  async getSkills() {
    const response = await api.get("/profile/skills");
    return response.data;
  },

  async addSkill(data: Skill) {
    const response = await api.post(
      "/profile/skills",
      data
    );

    return response.data;
  },

  async deleteSkill(id: number) {
    const response = await api.delete(
      `/profile/skills/${id}`
    );

    return response.data;
  },

  // Resume

  async uploadResume(file: File) {
    const formData = new FormData();

    formData.append("resume", file);

    const response = await api.post(
      "/profile/resume",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return response.data;
  },

  async getResume() {
    const response = await api.get("/profile/resume");
    return response.data;
  },

  async deleteResume() {
    const response = await api.delete(
      "/profile/resume"
    );

    return response.data;
  },
};

export default profileService;