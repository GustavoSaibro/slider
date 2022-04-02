import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: '/',
    name: 'News',
    component: () => import('../views/News.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router