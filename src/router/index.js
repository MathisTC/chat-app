import { createRouter, createWebHistory } from 'vue-router'
import userStore from '@/stores/user.js'

import LoginView from "../views/LoginView.vue"
import RegisterView from "../views/RegisterView.vue"


import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { requiresAuth: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { loginRegister: true },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { loginRegister: true },
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = userStore.isUserConnected()
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirige vers la page de connexion
  } else {
    if(to.meta.loginRegister && isAuthenticated) {
      next('/'); // Redirige vers la page de connexion
    } else {
      next(); // Poursuit la navigation
    }
  }
});


export default router
