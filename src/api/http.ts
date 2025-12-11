import axios from 'axios'

const http = axios.create({
  baseURL: '/api', // 开发时可在 Vite 中代理到后端
  timeout: 10000
})

http.interceptors.request.use(config => {
  // 可加入 token
  return config
})

http.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err)
)

export default http
