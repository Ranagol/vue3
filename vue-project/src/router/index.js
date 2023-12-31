import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';

/**We define the Vue 3 routes in router/index.js file. Here we have 3 routes defined. */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/postDetail/:id',
      name: 'postDetail',
      component: () => import('../views/PostDetailView.vue')
    },
    {
      path: '/modals',
      name: 'modals',
      component: () => import('../views/ModalsView.vue')
    }
  ]
})

export default router
