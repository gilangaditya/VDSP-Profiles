<template>
  <div class="api-test-container p-4">
    <h2 class="mb-4">API Connection Test</h2>
    
    <!-- Status -->
    <div class="alert" :class="{
      'alert-success': apiStatus === 'connected',
      'alert-danger': apiStatus === 'error',
      'alert-warning': apiStatus === 'loading'
    }">
      <strong>API Status:</strong> {{ apiStatus }}
    </div>

    <!-- Test Buttons -->
    <div class="btn-group mb-4" role="group">
      <button @click="testAuthService" class="btn btn-primary" :disabled="loading">
        Test Auth Service
      </button>
      <button @click="testCmsService" class="btn btn-info" :disabled="loading">
        Test CMS Service
      </button>
      <button @click="testScheduleService" class="btn btn-secondary" :disabled="loading">
        Test Schedule Service
      </button>
      <button @click="testDonationService" class="btn btn-success" :disabled="loading">
        Test Donation Service
      </button>
    </div>

    <!-- Response Display -->
    <div v-if="loading" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>

    <div v-if="response" class="card mt-4">
      <div class="card-header">
        <strong>Response:</strong> {{ currentTest }}
      </div>
      <div class="card-body">
        <pre>{{ JSON.stringify(response, null, 2) }}</pre>
      </div>
    </div>

    <div v-if="error" class="alert alert-danger mt-4">
      <strong>Error:</strong> {{ error }}
    </div>

    <!-- Environment Info -->
    <div class="card mt-4">
      <div class="card-header">
        <strong>Configuration</strong>
      </div>
      <div class="card-body">
        <p><strong>API Base URL:</strong> {{ apiBaseUrl }}</p>
        <p><strong>Auth Service URL:</strong> {{ authServiceUrl }}</p>
        <p><strong>CMS Service URL:</strong> {{ cmsServiceUrl }}</p>
        <p><strong>Schedule Service URL:</strong> {{ scheduleServiceUrl }}</p>
        <p><strong>Donation Service URL:</strong> {{ donationServiceUrl }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useApi } from '@/composables/useApi';
import { authService, cmsService, scheduleService, donationService } from '@/services';

const loading = ref(false);
const apiStatus = ref('testing');
const response = ref(null);
const error = ref(null);
const currentTest = ref('');

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
const authServiceUrl = import.meta.env.VITE_AUTH_SERVICE_URL || 'http://localhost:5001';
const cmsServiceUrl = import.meta.env.VITE_CMS_SERVICE_URL || 'http://localhost:5002';
const scheduleServiceUrl = import.meta.env.VITE_SCHEDULE_SERVICE_URL || 'http://localhost:5003';
const donationServiceUrl = import.meta.env.VITE_DONATION_SERVICE_URL || 'http://localhost:5005';

const { fetchData } = useApi();

const testAuthService = async () => {
  loading.value = true;
  error.value = null;
  response.value = null;
  currentTest.value = 'Auth Service (GET /api/auth/users)';
  
  try {
    const result = await authService.getAllUsers();
    response.value = result;
    apiStatus.value = 'connected';
  } catch (err) {
    error.value = err.message || JSON.stringify(err);
    apiStatus.value = 'error';
  } finally {
    loading.value = false;
  }
};

const testCmsService = async () => {
  loading.value = true;
  error.value = null;
  response.value = null;
  currentTest.value = 'CMS Service (GET /api/cms/articles)';
  
  try {
    const result = await cmsService.getArticles();
    response.value = result;
    apiStatus.value = 'connected';
  } catch (err) {
    error.value = err.message || JSON.stringify(err);
    apiStatus.value = 'error';
  } finally {
    loading.value = false;
  }
};

const testScheduleService = async () => {
  loading.value = true;
  error.value = null;
  response.value = null;
  currentTest.value = 'Schedule Service (GET /api/schedule/events)';
  
  try {
    const result = await scheduleService.getEvents();
    response.value = result;
    apiStatus.value = 'connected';
  } catch (err) {
    error.value = err.message || JSON.stringify(err);
    apiStatus.value = 'error';
  } finally {
    loading.value = false;
  }
};

const testDonationService = async () => {
  loading.value = true;
  error.value = null;
  response.value = null;
  currentTest.value = 'Donation Service (GET /api/donation/programs)';
  
  try {
    const result = await donationService.getPrograms();
    response.value = result;
    apiStatus.value = 'connected';
  } catch (err) {
    error.value = err.message || JSON.stringify(err);
    apiStatus.value = 'error';
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  console.log('API Test Component Mounted');
  console.log('Environment Variables:', {
    apiBaseUrl,
    authServiceUrl,
    cmsServiceUrl,
    scheduleServiceUrl,
    donationServiceUrl
  });
});
</script>

<style scoped>
.api-test-container {
  max-width: 900px;
  margin: 0 auto;
}

pre {
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  max-height: 400px;
}
</style>
