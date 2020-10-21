import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/search',
    name: 'Search',
    component: () =>
      import(/* webpackChunkName: "search" */ '@/views/Search.vue'),
  },
  {
    path: '/watchlist',
    name: 'Watchlist',
    component: () =>
      import(/* webpackChunkName: "watchlist" */ '@/views/Watchlist.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
