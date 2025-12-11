# LiYang CRM 管理系统

一个基于 Vue 3 + Vite + TypeScript 的现代化 CRM（客户关系管理）系统骨架。

## 技术栈

- **前端框架**: Vue 3 (Composition API)
- **构建工具**: Vite
- **编程语言**: TypeScript
- **状态管理**: Pinia
- **路由管理**: Vue Router
- **UI 组件库**: Element Plus
- **HTTP 客户端**: Axios

## 功能特性

- ✅ 仪表盘 - 数据统计和最近活动展示
- ✅ 客户管理 - 客户列表的增删改查（支持搜索）
- ✅ 线索管理 - 潜在客户线索跟踪
- ✅ 商机管理 - 销售机会管理
- ✅ 响应式布局 - 侧边栏导航 + 顶部导航条
- ✅ Mock 数据 - 使用 Pinia store 模拟后端数据

## 项目结构

```
liyangcrmadmin/
├── index.html              # HTML 入口文件
├── package.json            # 项目依赖配置
├── tsconfig.json           # TypeScript 配置
├── tsconfig.node.json      # Node TypeScript 配置
├── vite.config.ts          # Vite 配置
├── src/
│   ├── main.ts             # 应用入口
│   ├── App.vue             # 根组件
│   ├── api/                # API 接口模块
│   │   ├── http.ts         # Axios 实例和拦截器
│   │   └── crm.ts          # CRM 相关 API
│   ├── assets/             # 静态资源
│   │   └── styles.css      # 全局样式
│   ├── components/         # 公共组件
│   │   ├── Navbar.vue      # 顶部导航栏
│   │   ├── Sidebar.vue     # 侧边栏菜单
│   │   └── CustomerTable.vue # 客户表格组件
│   ├── layouts/            # 布局组件
│   │   └── DefaultLayout.vue # 默认布局
│   ├── router/             # 路由配置
│   │   └── index.ts        # 路由定义
│   ├── store/              # 状态管理
│   │   └── index.ts        # Pinia store (客户数据)
│   └── views/              # 页面组件
│       ├── Dashboard.vue   # 仪表盘
│       ├── Customers.vue   # 客户管理页
│       ├── Leads.vue       # 线索管理页
│       └── Deals.vue       # 商机管理页
└── README.md               # 项目说明文档
```

## 快速开始

### 前置要求

- Node.js >= 16.0.0
- npm >= 7.0.0 或 yarn >= 1.22.0

### 安装依赖

```bash
npm install
```

或使用 yarn:

```bash
yarn install
```

### 启动开发服务器

```bash
npm run dev
```

或使用 yarn:

```bash
yarn dev
```

应用将在 http://localhost:3000 启动。

### 构建生产版本

```bash
npm run build
```

或使用 yarn:

```bash
yarn build
```

构建产物将生成在 `dist` 目录。

### 预览生产构建

```bash
npm run preview
```

## API 配置

API 基础路径配置在 `src/api/http.ts` 中，默认为 `/api`。

在 `vite.config.ts` 中配置了开发服务器代理：
- 本地开发时，`/api` 请求会被代理到 `http://localhost:8080`
- 可根据实际后端地址修改代理配置

## 客户管理功能说明

客户管理页面包含以下功能：
- **搜索**: 支持按姓名、邮箱、公司、电话搜索客户
- **查看**: 弹窗显示客户详细信息
- **编辑**: 编辑客户信息（UI 准备就绪）
- **删除**: 删除客户（含确认提示）

当前使用 Pinia store 中的 mock 数据，可在 `src/store/index.ts` 中查看和修改。

## 开发说明

### 添加新页面

1. 在 `src/views/` 创建新的 Vue 组件
2. 在 `src/router/index.ts` 添加路由配置
3. 在 `src/components/Sidebar.vue` 添加菜单项

### 集成真实 API

1. 在 `src/api/crm.ts` 中已定义了标准的 API 接口
2. 修改 `src/store/index.ts` 中的数据获取逻辑，调用实际 API
3. 更新 `vite.config.ts` 中的代理配置指向实际后端地址

## 浏览器支持

- Chrome >= 87
- Firefox >= 78
- Safari >= 14
- Edge >= 88

## License

MIT

## 贡献

欢迎提交 Issue 和 Pull Request！