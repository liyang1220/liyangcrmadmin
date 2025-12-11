# liyangcrmadmin

Vue 3 CRM 管理系统骨架（Vite + TypeScript + Pinia + Vue Router + Element Plus）

## 特性
- Vue 3 + Composition API + TypeScript
- Vite 开发
- Pinia 状态管理
- Vue Router 路由
- Element Plus UI 组件库
- 简单的 API 层抽象，便于后续接入后端

## 快速开始
1. 安装依赖
```
npm install
```
2. 启动开发
```
npm run dev
```
3. 打包
```
npm run build
```

## 项目结构（示例）
- src/
  - main.ts
  - App.vue
  - router/
  - store/
  - api/
  - layouts/
  - components/
  - views/

## 下一步建议
- 接入真实后端 API（修改 src/api/crm.ts）
- 增加权限控制（路由守卫）
- 增强 UI、表单校验与导出功能