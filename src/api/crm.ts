import http from './http'

export interface Customer {
  id: number
  name: string
  email: string
  phone: string
  company: string
  status: string
  createdAt: string
}

export interface Lead {
  id: number
  name: string
  email: string
  phone: string
  source: string
  status: string
  createdAt: string
}

export interface Deal {
  id: number
  name: string
  amount: number
  stage: string
  customer: string
  probability: number
  expectedCloseDate: string
  createdAt: string
}

export const crmApi = {
  // Customer APIs
  getCustomers: (params?: any) => http.get<Customer[]>('/customers', { params }),
  getCustomer: (id: number) => http.get<Customer>(`/customers/${id}`),
  createCustomer: (data: Partial<Customer>) => http.post<Customer>('/customers', data),
  updateCustomer: (id: number, data: Partial<Customer>) => http.put<Customer>(`/customers/${id}`, data),
  deleteCustomer: (id: number) => http.delete(`/customers/${id}`),

  // Lead APIs
  getLeads: (params?: any) => http.get<Lead[]>('/leads', { params }),
  getLead: (id: number) => http.get<Lead>(`/leads/${id}`),
  createLead: (data: Partial<Lead>) => http.post<Lead>('/leads', data),
  updateLead: (id: number, data: Partial<Lead>) => http.put<Lead>(`/leads/${id}`, data),
  deleteLead: (id: number) => http.delete(`/leads/${id}`),

  // Deal APIs
  getDeals: (params?: any) => http.get<Deal[]>('/deals', { params }),
  getDeal: (id: number) => http.get<Deal>(`/deals/${id}`),
  createDeal: (data: Partial<Deal>) => http.post<Deal>('/deals', data),
  updateDeal: (id: number, data: Partial<Deal>) => http.put<Deal>(`/deals/${id}`, data),
  deleteDeal: (id: number) => http.delete(`/deals/${id}`)
}

export default crmApi
