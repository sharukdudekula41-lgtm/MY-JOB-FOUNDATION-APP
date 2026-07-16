export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface ResetPasswordRequest {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface User {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  avatar?: string;
  title?: string;
  location?: string;
  bio?: string;
  github?: string;
  linkedin?: string;
  website?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  accessToken: string;
  refreshToken?: string;
  user: User;
}

export interface RefreshTokenResponse {
  accessToken: string;
}

export interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface JwtPayload {
  sub: number;
  email: string;
  exp: number;
  iat: number;
}

export interface ApiError {
  success: false;
  message: string;
  errors?: string[];
}