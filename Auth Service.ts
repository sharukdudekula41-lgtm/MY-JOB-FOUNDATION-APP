import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:8000/api";

// =========================
// Interfaces
// =========================

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

export interface User {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  avatar?: string;
}

export interface AuthResponse {
  access_token: string;
  refresh_token?: string;
  user: User;
}

// =========================
// Axios Instance
// =========================

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Automatically attach token

api.interceptors.request.use((config: any) => {
  const token = localStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// =========================
// Authentication Service
// =========================

const authService = {
  // Login

  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>(
      "/auth/login",
      data
    );

    localStorage.setItem(
      "accessToken",
      response.data.access_token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(response.data.user)
    );

    return response.data;
  },

  // Register

  async register(data: RegisterRequest) {
    const response = await api.post(
      "/auth/register",
      data
    );

    return response.data;
  },

  // Logout

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
  },

  // Forgot Password

  async forgotPassword(email: string) {
    const response = await api.post(
      "/auth/forgot-password",
      {
        email,
      }
    );

    return response.data;
  },

  // Reset Password

  async resetPassword(
    token: string,
    password: string
  ) {
    const response = await api.post(
      "/auth/reset-password",
      {
        token,
        password,
      }
    );

    return response.data;
  },

  // Current User

  async getCurrentUser() {
    const response = await api.get("/auth/me");

    return response.data;
  },

  // Update Profile

  async updateProfile(data: Partial<User>) {
    const response = await api.put(
      "/profile",
      data
    );

    localStorage.setItem(
      "user",
      JSON.stringify(response.data)
    );

    return response.data;
  },

  // Change Password

  async changePassword(
    oldPassword: string,
    newPassword: string
  ) {
    const response = await api.put(
      "/auth/change-password",
      {
        oldPassword,
        newPassword,
      }
    );

    return response.data;
  },

  // Token

  getToken() {
    return localStorage.getItem("accessToken");
  },

  // User

  getUser(): User | null {
    const user = localStorage.getItem("user");

    if (!user) return null;

    return JSON.parse(user);
  },

  // Logged In

  isAuthenticated() {
    return !!localStorage.getItem("accessToken");
  },
};

export default authService;