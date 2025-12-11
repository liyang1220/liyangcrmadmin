import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue')
      },
      {
        path: '/customers',
        name: 'Customers',
        component: () => import('@/views/Customers.vue')
      },
      {
        path: '/leads',
        name: 'Leads',
        component: () => import('@/views/Leads.vue')
      },
      {
        path: '/deals',
        name: 'Deals',
        component: () => import('@/views/Deals.vue')
      },
      {
        path: '/settings',
        name: 'Settings',
        component: () => import('@/views/Settings.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
