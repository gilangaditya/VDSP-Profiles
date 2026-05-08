import apiClient from './api';

const API_BASE = '/api/auth';

export const authService = {
  // Login user
  login: async (email, password) => {
    try {
      const response = await apiClient.post(`${API_BASE}/login`, {
        email,
        password,
      });
      
      if (response.data.access_token) {
        localStorage.setItem('access_token', response.data.access_token);
        if (response.data.refresh_token) {
          localStorage.setItem('refresh_token', response.data.refresh_token);
        }
      }
      
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Register new user
  register: async (userData) => {
    try {
      const response = await apiClient.post(`${API_BASE}/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Verify token
  verifyToken: async (token) => {
    try {
      const response = await apiClient.post(`${API_BASE}/verify`, { token });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get current user
  getCurrentUser: async () => {
    try {
      const response = await apiClient.get(`${API_BASE}/me`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
  },

  // Get all users (admin only)
  getAllUsers: async () => {
    try {
      const response = await apiClient.get(`${API_BASE}/users`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};
