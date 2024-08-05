import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import Honey_myth from '../components/honey_myth.vue';
import Product from '../components/product.vue';
import Form from '../components/form.vue';
import DisplayForm from '../components/displayForm.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/honey_myth',
      name: 'honey_myth',
      component: Honey_myth
    },
    {
      path: '/product',
      name: 'product',
      component: Product,
      
    },
    {
      path: '/from',
      name: 'from',
      component: Form,
      
    },
    {
      path: '/displayForm',
      name: 'displayForm',
      component: DisplayForm,
      
    },
  ]
})

export default router
