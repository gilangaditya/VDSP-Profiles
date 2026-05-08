import {createRouter, createWebHistory} from 'vue-router';
import Activities from '../views/activities/Activities.vue';
import Index from '../views/Index.vue';
import Visith from '../views/Visith.vue';
import SekolahMinggu from '../views/activities/SekolahMinggu.vue';
import Ceramah from '../views/inspiration/Ceramah.vue';
import Inspiration from '../views/inspiration/Inspiration.vue';
import PujaBakti from '../views/activities/PujaBakti.vue';
import Donation from '@/views/Donation.vue';
import Gallery from '@/views/Gallery.vue';

const routes = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/visit',
        name: 'visith',
        component: Visith
    },
    {
        path: '/activities',
        name: 'activity',
        component: Activities
    },
    {
        path: '/Sekolah-minggu',
        name: 'SchoolEvents',
        component: SekolahMinggu
    },
    {
        path: '/inspiration',
        name: 'Inspirasi',
        component: Inspiration
    },
    {
        path: '/ceramah',
        name: 'Ceramah',
        component: Ceramah
    },
    {
        path: '/pujabhakti',
        name: 'Pujabhakti',
        component: PujaBakti
    },
    {
        path: '/donation',
        name: 'Donation',
        component: Donation
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

