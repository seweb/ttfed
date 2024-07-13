import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/containers/Layout.vue'
import { widgetRoutes } from '@/modules/widget/router'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [...widgetRoutes]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
