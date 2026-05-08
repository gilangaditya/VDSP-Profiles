import apiClient from './api';

const API_BASE = '/api/schedule';

export const scheduleService = {
  // Activities
  getActivities: async (page = 1, limit = 10) => {
    try {
      const response = await apiClient.get(`${API_BASE}/activities`, {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Events
  getEvents: async (page = 1, limit = 10) => {
    try {
      const response = await apiClient.get(`${API_BASE}/events`, {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Calendar
  getCalendar: async (year, month) => {
    try {
      const response = await apiClient.get(`${API_BASE}/calendar`, {
        params: { year, month },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Today's schedule
  getTodaySchedule: async () => {
    try {
      const response = await apiClient.get(`${API_BASE}/today`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Create activity
  createActivity: async (activityData) => {
    try {
      const response = await apiClient.post(`${API_BASE}/activities`, activityData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Update activity
  updateActivity: async (id, activityData) => {
    try {
      const response = await apiClient.put(`${API_BASE}/activities/${id}`, activityData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Delete activity
  deleteActivity: async (id) => {
    try {
      const response = await apiClient.delete(`${API_BASE}/activities/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};
