<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2>LiYang CRM</h2>
    </div>
    <el-menu
      :default-active="activeMenu"
      class="sidebar-menu"
      @select="handleMenuSelect"
    >
      <el-menu-item index="/dashboard">
        <el-icon><DataLine /></el-icon>
        <span>仪表盘</span>
      </el-menu-item>
      <el-menu-item index="/customers">
        <el-icon><User /></el-icon>
        <span>客户管理</span>
      </el-menu-item>
      <el-menu-item index="/leads">
        <el-icon><Opportunity /></el-icon>
        <span>线索管理</span>
      </el-menu-item>
      <el-menu-item index="/deals">
        <el-icon><Coin /></el-icon>
        <span>商机管理</span>
      </el-menu-item>
    </el-menu>
  </aside>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { DataLine, User, Opportunity, Coin } from '@element-plus/icons-vue'

const router = useRouter()
const route = useRoute()

const activeMenu = computed(() => route.path)

const handleMenuSelect = (index: string) => {
  router.push(index)
}
</script>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #304156;
  color: white;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.sidebar-header {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-header h2 {
  font-size: 20px;
  font-weight: 600;
  color: white;
  margin: 0;
}

.sidebar-menu {
  flex: 1;
  border: none;
  background-color: transparent;
}

.sidebar-menu :deep(.el-menu-item) {
  color: #bfcbd9;
}

.sidebar-menu :deep(.el-menu-item:hover) {
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
}

.sidebar-menu :deep(.el-menu-item.is-active) {
  background-color: #409eff !important;
  color: white;
}
</style>
