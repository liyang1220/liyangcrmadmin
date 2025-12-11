import axios from 'axios'

const http = axios.create({
  baseURL: '/api',
  timeout: 10000
})

// Request interceptor
http.interceptors.request.use(
  config => {
    // Add token or other headers here if needed
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Response interceptor
http.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // Handle errors globally if needed
    return Promise.reject(error)
  }
)

export default http
