import { createRouter, createWebHistory } from 'vue-router'
import Chat from '../views/Chat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'ChatView',
      component: Chat
    },
    {
      path: '/calls',
      name: 'CallsView',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Calls.vue')
    }
  ]
})

export default router
