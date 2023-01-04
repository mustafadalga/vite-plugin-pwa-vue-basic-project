import { createApp, defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './index.css'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: defineAsyncComponent(() => import('./pages/home.vue')) },
    { path: '/about', component: defineAsyncComponent(() => import('./pages/about.vue')) },
    { path: '/contact', component: defineAsyncComponent(() => import('./pages/Contact.vue')) },
    { path: '/dashboard', component: defineAsyncComponent(() => import('./pages/Dashboard.vue')) },
    { path: '/profile', component: defineAsyncComponent(() => import('./pages/Profile.vue')) },
    { path: '/my-insights', component: defineAsyncComponent(() => import('./pages/MyInsights.vue')) },
    { path: '/hi/:name', component: defineAsyncComponent(() => import('./pages/hi/[name].vue')), props: true },
  ],
})

createApp(App).use(router).mount('#app')
