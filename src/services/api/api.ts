import axios from 'axios';
import Cookies from 'js-cookie';

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
});

// Handle token refresh automatically
// api.interceptors.response.use(
//   response => response,
//   async (error) => {
//     const originalRequest = error.config;
    
//     // 401 = Unauthorized (token expired)
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true; // Prevent infinite loop
      
//       try {
//         // Try refresh token
//         await axios.post('/auth/refreshToken', {}, {
//           withCredentials: true // Send refresh_token cookie
//         });
        
//         // Retry original request
//         return api(originalRequest); 
//       } catch (refreshError) {
//         // Clear tokens on failure
//         console.log(refreshError);

//         Cookies.remove('access_token');
//         Cookies.remove('refresh_token');
//         window.location.href = '/login';
//       }
//     }
    
//     return Promise.reject(error);
//   }
// );

export default api;