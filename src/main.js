import { createApp } from 'vue';
import App from './App.vue';
import router from './router/Index'; // Pastikan ini benar
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import './assets/css/utillities.css';



const app = createApp(App);
app.use(router);
app.mount('#app');
