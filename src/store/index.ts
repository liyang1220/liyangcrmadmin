import { defineStore } from 'pinia'
import { ref } from 'vue'

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
      phone: '13800138001',
      company: '科技有限公司',
      status: 'active',
      createdAt: '2024-01-15'
    },
    {
      id: 2,
      name: '李四',
      email: 'lisi@example.com',
      phone: '13800138002',
      company: '互联网公司',
      status: 'active',
      createdAt: '2024-02-20'
    },
    {
      id: 3,
      name: '王五',
      email: 'wangwu@example.com',
      phone: '13800138003',
      company: '贸易公司',
      status: 'inactive',
      createdAt: '2024-03-10'
    },
    {
      id: 4,
      name: '赵六',
      email: 'zhaoliu@example.com',
      phone: '13800138004',
      company: '制造企业',
      status: 'active',
      createdAt: '2024-04-05'
    },
    {
      id: 5,
      name: '钱七',
      email: 'qianqi@example.com',
      phone: '13800138005',
      company: '服务公司',
      status: 'active',
      createdAt: '2024-05-12'
    }
  ])

  const loading = ref(false)

  const searchCustomers = (keyword: string) => {
    if (!keyword) return customers.value
    
    const lowerKeyword = keyword.toLowerCase()
    return customers.value.filter(customer => 
      customer.name.toLowerCase().includes(lowerKeyword) ||
      customer.email.toLowerCase().includes(lowerKeyword) ||
      customer.company.toLowerCase().includes(lowerKeyword) ||
      customer.phone.includes(keyword)
    )
  }

  const getCustomerById = (id: number) => {
    return customers.value.find(customer => customer.id === id)
  }

  const updateCustomer = (id: number, data: Partial<Customer>) => {
    const index = customers.value.findIndex(customer => customer.id === id)
    if (index !== -1) {
      customers.value[index] = { ...customers.value[index], ...data }
      return true
    }
    return false
  }

  const deleteCustomer = (id: number) => {
    const index = customers.value.findIndex(customer => customer.id === id)
    if (index !== -1) {
      customers.value.splice(index, 1)
      return true
    }
    return false
  }

  const addCustomer = (customer: Omit<Customer, 'id'>) => {
    const newId = Math.max(...customers.value.map(c => c.id), 0) + 1
    customers.value.push({ id: newId, ...customer })
    return newId
  }

  return {
    customers,
    loading,
    searchCustomers,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
    addCustomer
  }
})
