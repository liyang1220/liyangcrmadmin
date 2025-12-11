import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const username = ref('Admin')
  const isCollapsed = ref(false)

  function toggleSidebar() {
    isCollapsed.value = !isCollapsed.value
  }

  return {
    username,
    isCollapsed,
    toggleSidebar
  }
})

export interface Customer {
  id: number
  name: string
  email: string
  phone: string
  company: string
  status: string
  createdAt: string
}

export const useCustomerStore = defineStore('customer', () => {
  const customers = ref<Customer[]>([
    {
      id: 1,
      name: '张三',
      email: 'zhangsan@example.com',
      phone: '13800138000',
      company: '阿里巴巴',
      status: '活跃',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: '李四',
      email: 'lisi@example.com',
      phone: '13800138001',
      company: '腾讯',
      status: '潜在',
      createdAt: '2024-02-20'
    },
    {
      id: 3,
      name: '王五',
      email: 'wangwu@example.com',
      phone: '13800138002',
      company: '字节跳动',
      status: '活跃',
      createdAt: '2024-03-10'
    },
    {
      id: 4,
      name: '赵六',
      email: 'zhaoliu@example.com',
      phone: '13800138003',
      company: '百度',
      status: '休眠',
      createdAt: '2024-01-25'
    },
    {
      id: 5,
      name: '孙七',
      email: 'sunqi@example.com',
      phone: '13800138004',
      company: '美团',
      status: '活跃',
      createdAt: '2024-04-05'
    }
  ])

  function getCustomerById(id: number) {
    return customers.value.find(c => c.id === id)
  }

  function deleteCustomer(id: number) {
    const index = customers.value.findIndex(c => c.id === id)
    if (index > -1) {
      customers.value.splice(index, 1)
    }
  }

  function updateCustomer(id: number, data: Partial<Customer>) {
    const customer = getCustomerById(id)
    if (customer) {
      Object.assign(customer, data)
    }
  }

  return {
    customers,
    getCustomerById,
    deleteCustomer,
    updateCustomer
  }
})
