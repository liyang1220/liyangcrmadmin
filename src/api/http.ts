import axios from 'axios'
import { ElMessage } from 'element-plus'

const http = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// Request interceptor
http.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
http.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    // Handle errors with user-friendly messages
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // Unauthorized
          ElMessage.error('未授权，请重新登录')
          // Consider redirecting to login page
          break
        case 403:
          // Forbidden
          ElMessage.error('访问被拒绝，权限不足')
          break
        case 404:
          // Not found
          ElMessage.error('请求的资源不存在')
          break
        case 500:
          // Server error
          ElMessage.error('服务器错误，请稍后重试')
          break
        default:
          ElMessage.error(`请求失败: ${error.response.status}`)
      }
    } else if (error.request) {
      // Network error
      ElMessage.error('网络连接失败，请检查网络')
    } else {
      ElMessage.error('请求配置错误')
    }
    return Promise.reject(error)
  }
)

export default http
