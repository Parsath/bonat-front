import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'notFound', component: NotFoundView },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    // { path: '/users/:id', component: () => import('../views/UserView.vue') }
    { path: '/user/:id', name: 'user', component: UserView }
  ]
})

export default router
