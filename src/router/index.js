import { createRouter, createWebHistory } from 'vue-router'
import Restaurante from '../views/Restaurante.vue'

const routes = [
  {
    path: '/',
    name: 'Restaurante',
    component: Restaurante
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
