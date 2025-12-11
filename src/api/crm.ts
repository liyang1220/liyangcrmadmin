import http from './http'

export interface Customer { id: number name: string phone?: string email?: string company?: string created_at?: string }

export function fetchCustomers(params?: any) { return http.get('/customers', { params }) }
export function getCustomer(id: number) { return http.get(`/customers/${id}`) }
export function createCustomer(payload: Partial<Customer>) { return http.post('/customers', payload) }
export function updateCustomer(id: number, payload: Partial<Customer>) { return http.put(`/customers/${id}`, payload) }
export function deleteCustomer(id: number) { return http.delete(`/customers/${id}`) }
