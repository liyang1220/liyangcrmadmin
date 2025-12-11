import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Dashboard from '@/views/Dashboard.vue'
import Customers from '@/views/Customers.vue'
import Leads from '@/views/Leads.vue'
import Deals from '@/views/Deals.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        redirect: '/dashboard'
      },
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: 'customers',
        name: 'Customers',
        component: Customers
      },
      {
        path: 'leads',
        name: 'Leads',
        component: Leads
      },
      {
        path: 'deals',
        name: 'Deals',
        component: Deals
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
