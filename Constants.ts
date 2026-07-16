/**
 * =========================================================
 * JOB FOUNDATION - APPLICATION CONSTANTS
 * =========================================================
 */

/* ===========================
   API
=========================== */

export const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8000/api";

/* ===========================
   STORAGE KEYS
=========================== */

export const STORAGE_KEYS = {
  TOKEN: "token",
  REFRESH_TOKEN: "refreshToken",
  USER: "user",
  THEME: "theme",
};

/* ===========================
   USER ROLES
=========================== */

export const USER_ROLES = {
  ADMIN: "admin",
  RECRUITER: "recruiter",
  CANDIDATE: "candidate",
};

/* ===========================
   THEMES
=========================== */

export const THEMES = {
  LIGHT: "light",
  DARK: "dark",
};

/* ===========================
   ROUTES
=========================== */

export const ROUTES = {
  HOME: "/",

  LOGIN: "/login",

  REGISTER: "/register",

  FORGOT_PASSWORD: "/forgot-password",

  DASHBOARD: "/dashboard",

  PROFILE: "/dashboard/profile",

  JOBS: "/jobs",

  COMPANIES: "/companies",

  SAVED_JOBS: "/dashboard/saved-jobs",

  APPLICATIONS: "/dashboard/applications",

  MOCK_TESTS: "/mock-tests",

  MOCK_INTERVIEWS: "/mock-interviews",

  COMPETITIONS: "/competitions",

  RESUME_BUILDER: "/dashboard/resume-builder",

  COVER_LETTER: "/dashboard/cover-letter",
};

/* ===========================
   JOB TYPES
=========================== */

export const JOB_TYPES = [
  "Full Time",
  "Part Time",
  "Internship",
  "Remote",
  "Hybrid",
  "Contract",
];

/* ===========================
   EXPERIENCE LEVELS
=========================== */

export const EXPERIENCE_LEVELS = [
  "Fresher",
  "0-1 Years",
  "1-3 Years",
  "3-5 Years",
  "5-8 Years",
  "8+ Years",
];

/* ===========================
   WORK MODES
=========================== */

export const WORK_MODES = [
  "Remote",
  "Hybrid",
  "On Site",
];

/* ===========================
   SALARY RANGES
=========================== */

export const SALARY_RANGES = [
  "0 - 3 LPA",
  "3 - 5 LPA",
  "5 - 8 LPA",
  "8 - 12 LPA",
  "12 - 20 LPA",
  "20+ LPA",
];

/* ===========================
   JOB CATEGORIES
=========================== */

export const JOB_CATEGORIES = [
  "Frontend",

  "Backend",

  "Full Stack",

  "UI/UX",

  "Python",

  "Java",

  "React",

  "Angular",

  "Node.js",

  "Django",

  "Spring Boot",

  "Flutter",

  "Android",

  "iOS",

  "DevOps",

  "Cloud",

  "Cyber Security",

  "Data Science",

  "AI / ML",

  "Blockchain",

  "Testing",

  "Database",

  "Product Management",
];

/* ===========================
   COMPANY TYPES
=========================== */

export const COMPANY_TYPES = [
  "Startup",

  "MNC",

  "Product Based",

  "Service Based",

  "Government",

  "Private",
];

/* ===========================
   PAGINATION
=========================== */

export const DEFAULT_PAGE_SIZE = 10;

export const MAX_PAGE_SIZE = 100;

/* ===========================
   FILE UPLOAD
=========================== */

export const MAX_RESUME_SIZE =
  5 * 1024 * 1024;

export const MAX_PROFILE_IMAGE_SIZE =
  2 * 1024 * 1024;

export const ALLOWED_RESUME_TYPES = [
  "application/pdf",

  "application/msword",

  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const ALLOWED_IMAGE_TYPES = [
  "image/png",

  "image/jpeg",

  "image/webp",
];

/* ===========================
   VALIDATION
=========================== */

export const PASSWORD_MIN_LENGTH = 8;

export const NAME_MIN_LENGTH = 3;

export const NAME_MAX_LENGTH = 60;

export const BIO_MAX_LENGTH = 500;

/* ===========================
   STATUS
=========================== */

export const APPLICATION_STATUS = {
  APPLIED: "Applied",

  REVIEWING: "Reviewing",

  SHORTLISTED: "Shortlisted",

  INTERVIEW: "Interview",

  OFFERED: "Offered",

  REJECTED: "Rejected",
};

/* ===========================
   SOCIAL LINKS
=========================== */

export const SOCIAL_LINKS = {
  GITHUB: "https://github.com",

  LINKEDIN: "https://linkedin.com",

  TWITTER: "https://twitter.com",

  FACEBOOK: "https://facebook.com",
};

/* ===========================
   DEFAULT IMAGES
=========================== */

export const DEFAULT_PROFILE_IMAGE =
  "/images/default-profile.png";

export const DEFAULT_COMPANY_LOGO =
  "/images/default-company.png";

/* ===========================
   DATE FORMAT
=========================== */

export const DATE_FORMAT =
  "DD MMM YYYY";

/* ===========================
   APP
=========================== */

export const APP_NAME = "Job Foundation";

export const APP_VERSION = "1.0.0";

export const COPYRIGHT =
  "© 2026 Job Foundation. All Rights Reserved.";