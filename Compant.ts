export interface Company {
  id: number;
  name: string;
  logo?: string;
  banner?: string;
  description: string;
  industry: string;
  location: string;
  website?: string;
  email?: string;
  phone?: string;
  founded?: number;
  employees?: number;
  rating?: number;
  reviewCount?: number;
  openJobs?: number;
  headquarters?: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
  instagram?: string;
  benefits?: string[];
  technologies?: string[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CompanyReview {
  id: number;
  companyId: number;
  userId: number;
  userName: string;
  userAvatar?: string;
  rating: number;
  review: string;
  createdAt: string;
}

export interface CompanyFilter {
  keyword?: string;
  location?: string;
  industry?: string;
  minRating?: number;
  page?: number;
  limit?: number;
}

export interface CompanySearchResponse {
  companies: Company[];
  total: number;
  page: number;
  totalPages: number;
}

export interface FollowedCompany {
  id: number;
  companyId: number;
  followedAt: string;
}

export interface CompanyStats {
  totalJobs: number;
  totalEmployees: number;
  averageSalary?: string;
  acceptanceRate?: number;
}

export type Industry =
  | "Information Technology"
  | "Software"
  | "Finance"
  | "Healthcare"
  | "Education"
  | "Telecommunications"
  | "E-Commerce"
  | "Manufacturing"
  | "Automobile"
  | "Banking"
  | "Consulting"
  | "Media"
  | "Construction"
  | "Retail"
  | "Other";