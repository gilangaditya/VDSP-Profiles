import apiClient from './api';

const API_BASE = '/api/donation';

export const donationService = {
  // Get donation programs
  getPrograms: async (page = 1, limit = 10) => {
    try {
      const response = await apiClient.get(`${API_BASE}/programs`, {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get program details
  getProgramDetails: async (id) => {
    try {
      const response = await apiClient.get(`${API_BASE}/programs/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Create donation
  createDonation: async (donationData) => {
    try {
      const response = await apiClient.post(`${API_BASE}/donations`, donationData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get user donations
  getUserDonations: async () => {
    try {
      const response = await apiClient.get(`${API_BASE}/my-donations`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Get donation programs list
  getDonationPrograms: async () => {
    try {
      const response = await apiClient.get(`${API_BASE}/programs`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};
