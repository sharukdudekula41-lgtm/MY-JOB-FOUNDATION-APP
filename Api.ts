import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL ||
  "http://localhost:8000/api";

const api: AxiosInstance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * Get Access Token
 */
const getAccessToken = (): string | null => {
  return localStorage.getItem("token");
};

/**
 * Request Interceptor
 */
api.interceptors.request.use(
  (config: AxiosRequestConfig | any) => {
    const token = getAccessToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

/**
 * Response Interceptor
 */
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },

  async (error: AxiosError | any) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;

      try {
        const refreshToken =
          localStorage.getItem("refreshToken");

        if (!refreshToken) {
          throw new Error("No Refresh Token");
        }

        const response = await axios.post(
          `${API_BASE_URL}/auth/refresh`,
          {
            refreshToken,
          }
        );

        const newToken =
          response.data.access_token;

        localStorage.setItem(
          "token",
          newToken
        );

        originalRequest.headers.Authorization =
          `Bearer ${newToken}`;

        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem("token");
        localStorage.removeItem("refreshToken");

        window.location.href = "/login";

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

/**
 * Generic API Methods
 */

export const apiClient = {
  get: <T>(url: string, config?: AxiosRequestConfig) =>
    api.get<T>(url, config),

  post: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => api.post<T>(url, data, config),

  put: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => api.put<T>(url, data, config),

  patch: <T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ) => api.patch<T>(url, data, config),

  delete: <T>(
    url: string,
    config?: AxiosRequestConfig
  ) => api.delete<T>(url, config),
};

export default api;