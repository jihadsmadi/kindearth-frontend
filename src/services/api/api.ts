import axios from 'axios';
import Cookies from 'js-cookie';
import { refreshToken } from './auth/authService';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

// Automatically add CSRF token to requests
api.interceptors.request.use((config) => {
  const csrfToken = Cookies.get('csrf-cookie');
  if (csrfToken)
    config.headers['X-CSRF-TOKEN'] = csrfToken;

  return config;
}, (error) => {
  return Promise.reject(error);
});

// Handle token refresh automatically
api.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;
    
    // Don't auto-refresh for auth endpoints (login, register, etc.)
    const isAuthEndpoint = originalRequest.url?.includes('/auth/');
    
    // 401 = Unauthorized (token expired)
    if (error.response?.status === 401 && !originalRequest._retry && !isAuthEndpoint) {
      originalRequest._retry = true; // Prevent infinite loop
      
      try {
        // Try refresh token
        const result = await refreshToken();
        
        if (result.success) {
          // Retry original request
          return api(originalRequest); 
        } else {
          // Clear tokens on failure
          Cookies.remove('access_token');
          Cookies.remove('refresh_token');
          window.location.href = '/login';
        }
      } catch {
        // Clear tokens on failure
        Cookies.remove('access_token');
        Cookies.remove('refresh_token');
        window.location.href = '/login';
      }
    }
    
    return Promise.reject(error);
  }
);

export default api;