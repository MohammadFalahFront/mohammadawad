import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Skills from '../pages/skills.vue'
import About from '../pages/about.vue'
import Contactme from '../pages/Contactme.vue'
import Projects from '../pages/projects.vue'
import dashboard from '../pages/dashboard/dashboard.vue'
import login from '../pages/dashboard/login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/Contactme',
    name: 'Contactme',
    component: Contactme
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  ],
})

export default router
