import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

export interface Company {
  id: number;
  name: string;
  logo?: string;
  industry: string;
  location: string;
  website?: string;
  email?: string;
  phone?: string;
  description: string;
  employees: number;
  founded?: number;
  rating?: number;
  openJobs?: number;
}

export interface CompanyFilter {
  keyword?: string;
  location?: string;
  industry?: string;
  page?: number;
  limit?: number;
}

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT Token
api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const companyService = {
  // Get all companies
  async getCompanies(filters?: CompanyFilter) {
    const response = await api.get("/companies", {
      params: filters,
    });

    return response.data;
  },

  // Get company by ID
  async getCompany(id: number | string): Promise<Company> {
    const response = await api.get<Company>(
      `/companies/${id}`
    );

    return response.data;
  },

  // Search companies
  async searchCompanies(keyword: string) {
    const response = await api.get(
      "/companies/search",
      {
        params: { keyword },
      }
    );

    return response.data;
  },

  // Top companies
  async getTopCompanies() {
    const response = await api.get(
      "/companies/top"
    );

    return response.data;
  },

  // Featured companies
  async getFeaturedCompanies() {
    const response = await api.get(
      "/companies/featured"
    );

    return response.data;
  },

  // Company jobs
  async getCompanyJobs(
    companyId: number | string
  ) {
    const response = await api.get(
      `/companies/${companyId}/jobs`
    );

    return response.data;
  },

  // Follow company
  async followCompany(
    companyId: number
  ) {
    const response = await api.post(
      `/companies/${companyId}/follow`
    );

    return response.data;
  },

  // Unfollow company
  async unfollowCompany(
    companyId: number
  ) {
    const response = await api.delete(
      `/companies/${companyId}/follow`
    );

    return response.data;
  },

  // Followed companies
  async getFollowedCompanies() {
    const response = await api.get(
      "/companies/following"
    );

    return response.data;
  },

  // Company reviews
  async getCompanyReviews(
    companyId: number
  ) {
    const response = await api.get(
      `/companies/${companyId}/reviews`
    );

    return response.data;
  },

  // Add review
  async addReview(
    companyId: number,
    rating: number,
    review: string
  ) {
    const response = await api.post(
      `/companies/${companyId}/reviews`,
      {
        rating,
        review,
      }
    );

    return response.data;
  },
};

export default companyService;