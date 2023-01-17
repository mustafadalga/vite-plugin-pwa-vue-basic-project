import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import { registerSW } from 'virtual:pwa-register';


registerSW({ immediate: true });



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: () => import('./pages/home.vue')},
        {path: '/about', component: () => import('./pages/about.vue')},
        {path: '/contact', component: () => import('./pages/Contact.vue')},
        {path: '/dashboard', component: () => import('./pages/Dashboard.vue')},
        {path: '/dashboard-v2', component: () => import('./pages/DashboardV2.vue')},
        {path: '/dashboard-v3', component: () => import('./pages/DashboardV3.vue')},
        {path: '/dashboard-v4', component: () => import('./pages/DashboardV4.vue')},
        {path: '/profile', component: () => import('./pages/Profile.vue')},
        {path: '/my-insights', component: () => import('./pages/MyInsights.vue')},
        {path: '/hi/:name', component: () => import('./pages/hi/[name].vue'), props: true},
        {path: "/:catchAll(.*)", component: () => import('./pages/NotFound.vue')},
    ],
})

createApp(App).use(router).mount('#app')
