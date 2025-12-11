import { createRouter, createWebHistory } from 'vue-router'

const Dashboard = () => import('@/views/Dashboard.vue')
const Customers = () => import('@/views/Customers.vue')
const Leads = () => import('@/views/Leads.vue')
const Deals = () => import('@/views/Deals.vue')

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    component: () => import('@/layouts/DefaultLayout.vue'),
    children: [
      { path: 'dashboard', name: 'Dashboard', component: Dashboard },
      { path: 'customers', name: 'Customers', component: Customers },
      { path: 'leads', name: 'Leads', component: Leads },
      { path: 'deals', name: 'Deals', component: Deals }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
