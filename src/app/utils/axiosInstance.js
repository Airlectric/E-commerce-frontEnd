import axios from 'axios';
import { getRefreshToken, setTokens, clearTokens, isTokenExpired } from './auth';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = getRefreshToken();
      if (refreshToken && !isTokenExpired(refreshToken)) {
        try {
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/refresh-token/`, {
            refresh: refreshToken,
          });
          const { access } = response.data;
          setTokens(access, refreshToken);
          axios.defaults.headers.common['Authorization'] = `Bearer ${access}`;
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          clearTokens();
          window.location.href = '/'; // Redirect to login
        }
      } else {
        clearTokens();
        window.location.href = '/'; // Redirect to login
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
