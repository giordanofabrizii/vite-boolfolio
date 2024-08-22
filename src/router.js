import { createRouter, createWebHistory } from 'vue-router';

import AppProjects from './pages/AppProjects.vue';
import AppTechnologies from './pages/AppTechnologies.vue';
import AppMain from './pages/AppMain.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppMain
        },
        {
            path: '/projects',
            name: 'projects',
            component: AppProjects
        },
        {
            path: '/technologies',
            name: 'technologies',
            component: AppTechnologies
        },
    ]
});

export { router };