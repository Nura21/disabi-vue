import { createRouter, createWebHistory } from 'vue-router'
import LandingPageViewVue from '../views/LandingPageView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPageViewVue
    },

  ]
})

export default router
