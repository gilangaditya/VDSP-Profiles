import { createApp } from 'vue';
import App from './App.vue';
import router from './router/Index.js';
import { apiClient } from './services';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './assets/css/utillities.css';

const app = createApp(App);

// Provide API client globally
app.provide('apiClient', apiClient);

app.use(router);
app.mount('#app');
