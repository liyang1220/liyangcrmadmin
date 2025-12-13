import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Dashboard from '@/views/Dashboard.vue'
import Customers from '@/views/Customers.vue'
import Leads from '@/views/Leads.vue'
import Deals from '@/views/Deals.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { title: '仪表盘' }
      },
      {
        path: 'customers',
        name: 'Customers',
        component: Customers,
        meta: { title: '客户管理' }
      },
      {
        path: 'leads',
        name: 'Leads',
        component: Leads,
        meta: { title: '线索管理' }
      },
      {
        path: 'deals',
        name: 'Deals',
        component: Deals,
        meta: { title: '商机管理' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
