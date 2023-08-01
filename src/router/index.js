import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const AboutView = () => import('../views/AboutView.vue')
const NotFound = () => import('../views/NotFound.vue')
const EditArticle = () => import('../views/EditArticle.vue')

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/article/edit',
    name: 'EditArticle',
    component: EditArticle
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
