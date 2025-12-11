<template>
  <el-container class="layout-container">
    <el-aside :width="isCollapsed ? '64px' : '200px'" class="sidebar-container">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header class="header-container">
        <Navbar />
      </el-header>
      <el-main class="main-container">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/store'
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'

const userStore = useUserStore()
const isCollapsed = computed(() => userStore.isCollapsed)
</script>

<style scoped>
.layout-container {
  height: 100vh;
}

.sidebar-container {
  background-color: #304156;
  transition: width 0.3s;
}

.header-container {
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  padding: 0;
}

.main-container {
  background-color: #f5f7fa;
  padding: 20px;
  overflow-y: auto;
}
</style>
