import {createRouter, createWebHistory} from 'vue-router';
import Activities from '../views/Activities.vue';
import Index from '../views/Index.vue';
import Visith from '../views/Visith.vue';
import SekolahMinggu from '../views/activities/SekolahMinggu.vue';

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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;

