# CRM 管理系统

一个基于 Vue 3 + Vite + TypeScript + Element Plus 构建的现代化 CRM（客户关系管理）系统骨架。

## 📋 项目特性

- ⚡️ **Vue 3** - 使用 Composition API 和最新的 Vue 3 特性
- 🚀 **Vite** - 极速的开发服务器和构建工具
- 🔷 **TypeScript** - 完整的类型安全支持
- 🎨 **Element Plus** - 企业级 UI 组件库
- 🗂️ **Vue Router** - 官方路由管理方案
- 📦 **Pinia** - 轻量级状态管理
- 🌐 **Axios** - HTTP 客户端，支持请求/响应拦截

## 🚀 快速开始

### 环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看应用。

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 📁 项目结构

```
liyangcrmadmin/
├── src/
│   ├── api/                # API 接口封装
│   │   ├── http.ts         # Axios 封装和拦截器
│   │   └── crm.ts          # CRM 相关 API
│   ├── assets/             # 静态资源
│   │   └── styles.css      # 全局样式
│   ├── components/         # 通用组件
│   │   ├── CustomerTable.vue   # 客户表格组件
│   │   ├── Navbar.vue          # 顶部导航栏
│   │   └── Sidebar.vue         # 侧边栏菜单
│   ├── layouts/            # 布局组件
│   │   └── DefaultLayout.vue   # 默认布局（含侧边栏和导航栏）
│   ├── router/             # 路由配置
│   │   └── index.ts        # 路由定义
│   ├── store/              # 状态管理
│   │   └── index.ts        # Pinia stores
│   ├── views/              # 页面视图
│   │   ├── Dashboard.vue   # 仪表盘
│   │   ├── Customers.vue   # 客户管理
│   │   ├── Leads.vue       # 线索管理
│   │   └── Deals.vue       # 商机管理
│   ├── App.vue             # 根组件
│   └── main.ts             # 应用入口
├── index.html              # HTML 模板
├── package.json            # 依赖配置
├── tsconfig.json           # TypeScript 配置
├── tsconfig.node.json      # Node TypeScript 配置
├── vite.config.ts          # Vite 配置
└── README.md               # 项目说明

```

## 🎯 功能模块

### 1. 仪表盘 (Dashboard)
- 展示关键业务指标（客户数、线索数、商机数、销售额）
- 显示最近活动时间线
- 提供快速操作入口

### 2. 客户管理 (Customers)
- 客户列表展示（支持排序和搜索）
- 客户信息查看、编辑、删除
- 状态管理（活跃、潜在、休眠）
- Mock 数据支持本地开发测试

### 3. 线索管理 (Leads)
- 线索列表展示和搜索
- 线索状态跟踪
- 线索转换为客户功能
- 多渠道来源追踪

### 4. 商机管理 (Deals)
- 商机列表和详情
- 销售阶段管理
- 成功率评估
- 赢单/输单操作

## 🔧 技术架构

### 前端技术栈
- **框架**: Vue 3.3+ (Composition API)
- **构建工具**: Vite 5.0+
- **语言**: TypeScript 5.3+
- **UI 库**: Element Plus 2.4+
- **路由**: Vue Router 4.2+
- **状态管理**: Pinia 2.1+
- **HTTP 客户端**: Axios 1.6+

### 代码特性
- 完整的 TypeScript 类型定义
- Composition API 组合式风格
- 响应式状态管理
- 路由懒加载支持
- HTTP 请求/响应拦截
- Element Plus 组件按需引入

## 🌐 API 配置

API 基础地址配置在 `src/api/http.ts`:

```typescript
baseURL: '/api'
```

开发环境代理配置在 `vite.config.ts`:

```typescript
server: {
  port: 3000,
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true
    }
  }
}
```

## 📝 开发说明

### 添加新页面
1. 在 `src/views/` 创建新的 Vue 组件
2. 在 `src/router/index.ts` 添加路由配置
3. 在 `src/components/Sidebar.vue` 添加菜单项

### 添加新的 API
1. 在 `src/api/crm.ts` 定义接口类型和方法
2. 使用 `http` 实例发起请求
3. 在组件中通过 `import` 使用

### 状态管理
使用 Pinia 创建新的 store:

```typescript
export const useMyStore = defineStore('myStore', () => {
  const state = ref('initial')
  
  function updateState(newValue: string) {
    state.value = newValue
  }
  
  return { state, updateState }
})
```

## 🔐 认证与授权

当前版本提供了基础的认证框架：
- Token 存储在 localStorage
- 请求拦截器自动添加 Authorization header
- 响应拦截器统一处理错误

## 📦 依赖说明

### 核心依赖
- `vue`: Vue 3 框架
- `vue-router`: 路由管理
- `pinia`: 状态管理
- `element-plus`: UI 组件库
- `axios`: HTTP 客户端

### 开发依赖
- `vite`: 构建工具
- `typescript`: TypeScript 支持
- `vue-tsc`: Vue TypeScript 编译器
- `@vitejs/plugin-vue`: Vite Vue 插件
- `@types/node`: Node.js 类型定义

## 🎨 自定义主题

Element Plus 主题可以通过 SCSS 变量自定义，详见 Element Plus 官方文档。

## 📄 许可证

MIT License

## 👥 贡献

欢迎提交 Issue 和 Pull Request！

## 📧 联系方式

如有问题，请通过 GitHub Issues 联系我们。