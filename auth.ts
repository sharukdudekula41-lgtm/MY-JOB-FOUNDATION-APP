import api from "./api";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
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
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  profileImage?: string;
}

const TOKEN_KEY = "token";
const REFRESH_TOKEN_KEY = "refreshToken";

/* -------------------------- Token Helpers -------------------------- */

export const getToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY);
};

export const getRefreshToken = (): string | null => {
  return localStorage.getItem(REFRESH_TOKEN_KEY);
};

export const saveTokens = (
  accessToken: string,
  refreshToken: string
) => {
  localStorage.setItem(TOKEN_KEY, accessToken);
  localStorage.setItem(
    REFRESH_TOKEN_KEY,
    refreshToken
  );
};

export const clearTokens = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(
    REFRESH_TOKEN_KEY
  );
};

export const isAuthenticated = (): boolean => {
  return !!getToken();
};

/* -------------------------- Authentication -------------------------- */

export const login = async (
  data: LoginRequest
) => {
  const response = await api.post(
    "/auth/login",
    data
  );

  const {
    access_token,
    refresh_token,
  } = response.data;

  saveTokens(
    access_token,
    refresh_token
  );

  return response.data;
};

export const register = async (
  data: RegisterRequest
) => {
  const response = await api.post(
    "/auth/register",
    data
  );

  return response.data;
};

export const logout = async () => {
  try {
    await api.post("/auth/logout");
  } catch (error) {
    console.error(error);
  }

  clearTokens();
};

/* -------------------------- User -------------------------- */

export const getCurrentUser =
  async (): Promise<User> => {
    const response = await api.get(
      "/profile/me"
    );

    return response.data;
  };

/* -------------------------- Refresh Token -------------------------- */

export const refreshAccessToken =
  async () => {
    const refreshToken =
      getRefreshToken();

    if (!refreshToken) {
      throw new Error(
        "Refresh Token Missing"
      );
    }

    const response = await api.post(
      "/auth/refresh",
      {
        refreshToken,
      }
    );

    saveTokens(
      response.data.access_token,
      response.data.refresh_token
    );

    return response.data;
  };

/* -------------------------- Forgot Password -------------------------- */

export const forgotPassword =
  async (
    data: ForgotPasswordRequest
  ) => {
    const response = await api.post(
      "/auth/forgot-password",
      data
    );

    return response.data;
  };

/* -------------------------- Reset Password -------------------------- */

export const resetPassword =
  async (
    data: ResetPasswordRequest
  ) => {
    const response = await api.post(
      "/auth/reset-password",
      data
    );

    return response.data;
  };

/* -------------------------- Change Password -------------------------- */

export const changePassword =
  async (
    data: ChangePasswordRequest
  ) => {
    const response = await api.post(
      "/auth/change-password",
      data
    );

    return response.data;
  };

/* -------------------------- Verify Email -------------------------- */

export const verifyEmail =
  async (token: string) => {
    const response = await api.get(
      `/auth/verify-email/${token}`
    );

    return response.data;
  };

export default {
  login,
  register,
  logout,
  forgotPassword,
  resetPassword,
  refreshAccessToken,
  getCurrentUser,
  verifyEmail,
  changePassword,
  getToken,
  getRefreshToken,
  clearTokens,
  isAuthenticated,
};