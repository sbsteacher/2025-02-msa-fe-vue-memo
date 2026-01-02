import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Form from '@/views/Form.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },   
    {
      path: '/memos/add',
      component: Form
    }
  ],
})

export default router
