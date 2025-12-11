<template>
  <header class="navbar">
    <div class="navbar-left">
      <h3>{{ pageTitle }}</h3>
    </div>
    <div class="navbar-right">
      <el-dropdown>
        <span class="user-dropdown">
          <el-icon><Avatar /></el-icon>
          <span>管理员</span>
          <el-icon><ArrowDown /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Avatar, ArrowDown } from '@element-plus/icons-vue'

const route = useRoute()

const pageTitle = computed(() => {
  const titles: Record<string, string> = {
    '/dashboard': '仪表盘',
    '/customers': '客户管理',
    '/leads': '线索管理',
    '/deals': '商机管理'
  }
  return titles[route.path] || 'LiYang CRM'
})
</script>

<style scoped>
.navbar {
  height: 60px;
  background-color: white;
  border-bottom: 1px solid #e4e7ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.navbar-left h3 {
  font-size: 18px;
  font-weight: 600;
  color: #303133;
  margin: 0;
}

.navbar-right {
  display: flex;
  align-items: center;
}

.user-dropdown {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #606266;
}

.user-dropdown:hover {
  color: #409eff;
}
</style>
