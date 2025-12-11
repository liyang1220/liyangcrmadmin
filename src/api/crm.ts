import http from './http'

export interface CustomerDTO {
  id?: number
  name: string
  email: string
  phone: string
  company: string
  status: string
  createdAt?: string
}

export interface LeadDTO {
  id?: number
  name: string
  email: string
  phone: string
  source: string
  status: string
  createdAt?: string
}

export interface DealDTO {
  id?: number
  title: string
  customerId: number
  amount: number
  stage: string
  probability: number
  expectedCloseDate: string
  createdAt?: string
}

// Customer APIs
export const customerApi = {
  list: (params?: any) => http.get('/customers', { params }),
  get: (id: number) => http.get(`/customers/${id}`),
  create: (data: CustomerDTO) => http.post('/customers', data),
  update: (id: number, data: CustomerDTO) => http.put(`/customers/${id}`, data),
  delete: (id: number) => http.delete(`/customers/${id}`)
}

// Lead APIs
export const leadApi = {
  list: (params?: any) => http.get('/leads', { params }),
  get: (id: number) => http.get(`/leads/${id}`),
  create: (data: LeadDTO) => http.post('/leads', data),
  update: (id: number, data: LeadDTO) => http.put(`/leads/${id}`, data),
  delete: (id: number) => http.delete(`/leads/${id}`),
  convert: (id: number) => http.post(`/leads/${id}/convert`)
}

// Deal APIs
export const dealApi = {
  list: (params?: any) => http.get('/deals', { params }),
  get: (id: number) => http.get(`/deals/${id}`),
  create: (data: DealDTO) => http.post('/deals', data),
  update: (id: number, data: DealDTO) => http.put(`/deals/${id}`, data),
  delete: (id: number) => http.delete(`/deals/${id}`)
}

// Dashboard APIs
export const dashboardApi = {
  getStats: () => http.get('/dashboard/stats'),
  getRecentActivities: () => http.get('/dashboard/activities')
}
