import apiClient from './api';

const API_BASE = '/api/cms';

export const cmsService = {
  // Articles
  getArticles: async (page = 1, limit = 10) => {
    try {
      const response = await apiClient.get(`${API_BASE}/articles`, {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  getArticle: async (id) => {
    try {
      const response = await apiClient.get(`${API_BASE}/articles/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  createArticle: async (articleData) => {
    try {
      const response = await apiClient.post(`${API_BASE}/articles`, articleData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  updateArticle: async (id, articleData) => {
    try {
      const response = await apiClient.put(`${API_BASE}/articles/${id}`, articleData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  deleteArticle: async (id) => {
    try {
      const response = await apiClient.delete(`${API_BASE}/articles/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  // Gallery Photos
  getGalleryPhotos: async (page = 1, limit = 20) => {
    try {
      const response = await apiClient.get(`${API_BASE}/gallery/photos`, {
        params: { page, limit },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  uploadPhoto: async (formData) => {
    try {
      const response = await apiClient.post(`${API_BASE}/gallery/photos`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },

  deletePhoto: async (id) => {
    try {
      const response = await apiClient.delete(`${API_BASE}/gallery/photos/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error;
    }
  },
};
