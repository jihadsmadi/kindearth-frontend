import api from "../api";
import { AxiosError } from "axios";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: string;
  role?: "Customer" | "Vendor";
  storeName?: string;
}

export interface AuthResponse {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
}

export interface RegisterResponse {
  success: boolean;
  message: string;
  data: string; // user ID as GUID
  errors?: string[];
  timestamp: string;
}

export interface ApiError {
  message: string;
  errors?: Record<string, string[]>;
}

export const GetCSRF = async () => {
  try {
    const response = await api.get("csrf-token");
    return { success: true, data: response.data };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Failed to get CSRF token';
    return { 
      success: false, 
      error: errorMessage 
    };
  }
};

export const login = async (credentials: LoginRequest) => {
  try {
    const response = await api.post<AuthResponse>("/api/auth/login", credentials);
    return { success: true, data: response.data };
  } catch (error: unknown) {
    // Handle axios error response
    if (error instanceof AxiosError && error.response) {
      const { status, data } = error.response;
      
      if (data && typeof data === 'object') {
        return { 
          success: false, 
          error: data.message || 'Login failed',
          status,
          details: data.errors || data
        };
      }
      
      // Handle different HTTP status codes
      switch (status) {
        case 400:
          return { success: false, error: 'Invalid credentials or missing information' };
        case 401:
          return { success: false, error: 'Invalid email or password' };
        case 422:
          return { success: false, error: 'Validation failed', details: data };
        case 429:
          return { success: false, error: 'Too many login attempts. Please try again later.' };
        case 500:
          return { success: false, error: 'Server error. Please try again later.' };
        default:
          return { success: false, error: `Login failed (${status})` };
      }
    }
    
    // Handle network errors
    if (error instanceof AxiosError && error.request) {
      return { success: false, error: 'Network error. Please check your connection.' };
    }
    
    // Handle other errors
    const errorMessage = error instanceof Error ? error.message : 'Login failed';
    return { success: false, error: errorMessage };
  }
};

export const register = async (credentials: RegisterRequest) => {
  try {
    const response = await api.post<RegisterResponse>("/api/auth/register", credentials);
    return { success: true, data: response.data };
  } catch (error: unknown) {
    // Handle axios error response
    if (error instanceof AxiosError && error.response) {
      const { status, data } = error.response;
      
      if (data && typeof data === 'object') {
        return { 
          success: false, 
          error: data.message || 'Registration failed',
          status,
          details: data.errors || data
        };
      }
      
      // Handle different HTTP status codes
      switch (status) {
        case 400:
          return { success: false, error: 'Invalid data or missing information' };
        case 409:
          return { success: false, error: 'Email already exists' };
        case 422:
          return { success: false, error: 'Validation failed', details: data };
        case 429:
          return { success: false, error: 'Too many registration attempts. Please try again later.' };
        case 500:
          return { success: false, error: 'Server error. Please try again later.' };
        default:
          return { success: false, error: `Registration failed (${status})` };
      }
    }
    
    // Handle network errors
    if (error instanceof AxiosError && error.request) {
      return { success: false, error: 'Network error. Please check your connection.' };
    }
    
    // Handle other errors
    const errorMessage = error instanceof Error ? error.message : 'Registration failed';
    return { success: false, error: errorMessage };
  }
};

export const logout = async () => {
  try {
    await api.post("/api/auth/logout");
    return { success: true };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Logout failed';
    return { success: false, error: errorMessage };
  }
};

export const refreshToken = async () => {
  try {
    const response = await api.post("/api/auth/refreshToken");
    return { success: true, data: response.data };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Token refresh failed';
    return { success: false, error: errorMessage };
  }
};