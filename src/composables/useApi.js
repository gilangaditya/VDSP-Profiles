import { ref, computed } from 'vue';
import apiClient from '@/services/api';

export function useApi() {
  const data = ref(null);
  const loading = ref(false);
  const error = ref(null);

  const fetchData = async (url, options = {}) => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await apiClient.get(url, options);
      data.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || err.message;
      console.error('API Error:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const postData = async (url, payload, options = {}) => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await apiClient.post(url, payload, options);
      data.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || err.message;
      console.error('API Error:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const putData = async (url, payload, options = {}) => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await apiClient.put(url, payload, options);
      data.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || err.message;
      console.error('API Error:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  const deleteData = async (url, options = {}) => {
    loading.value = true;
    error.value = null;
    
    try {
      const response = await apiClient.delete(url, options);
      data.value = response.data;
      return response.data;
    } catch (err) {
      error.value = err.response?.data?.message || err.message;
      console.error('API Error:', err);
      throw err;
    } finally {
      loading.value = false;
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
    postData,
    putData,
    deleteData,
  };
}
