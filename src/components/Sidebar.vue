<template>
  <div class="sidebar">
    <div class="logo-container">
      <h2 v-if="!isCollapsed">CRM</h2>
      <h2 v-else>C</h2>
    </div>
    <el-menu
      :default-active="activeMenu"
      :collapse="isCollapsed"
      :collapse-transition="false"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409eff"
      router
    >
      <el-menu-item index="/dashboard">
        <el-icon><DataLine /></el-icon>
        <template #title>仪表盘</template>
      </el-menu-item>
      <el-menu-item index="/customers">
        <el-icon><User /></el-icon>
        <template #title>客户管理</template>
      </el-menu-item>
      <el-menu-item index="/leads">
        <el-icon><Promotion /></el-icon>
        <template #title>线索管理</template>
      </el-menu-item>
      <el-menu-item index="/deals">
        <el-icon><TrendCharts /></el-icon>
        <template #title>商机管理</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/store'
import { DataLine, User, Promotion, TrendCharts } from '@element-plus/icons-vue'

const route = useRoute()
const userStore = useUserStore()

const isCollapsed = computed(() => userStore.isCollapsed)
const activeMenu = computed(() => route.path)
</script>

<style scoped>
.sidebar {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.logo-container {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2b3a4b;
  color: #fff;
  font-weight: bold;
}

.logo-container h2 {
  margin: 0;
  font-size: 20px;
}

.el-menu {
  border-right: none;
  flex: 1;
}
</style>
