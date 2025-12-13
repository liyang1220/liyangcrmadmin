<template>
  <div class="navbar">
    <div class="left-menu">
      <el-button
        :icon="isCollapsed ? Expand : Fold"
        circle
        @click="toggleSidebar"
      />
    </div>
    <div class="right-menu">
      <el-dropdown>
        <span class="user-info">
          <el-icon class="user-icon"><Avatar /></el-icon>
          <span>{{ username }}</span>
          <el-icon><ArrowDown /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/store'
import { Expand, Fold, Avatar, ArrowDown } from '@element-plus/icons-vue'

const userStore = useUserStore()
const username = computed(() => userStore.username)
const isCollapsed = computed(() => userStore.isCollapsed)

const toggleSidebar = () => {
  userStore.toggleSidebar()
}
</script>

<style scoped>
.navbar {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.left-menu {
  display: flex;
  align-items: center;
}

.right-menu {
  display: flex;
  align-items: center;
}

.user-info {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 10px;
}

.user-icon {
  margin-right: 8px;
  font-size: 20px;
}

.user-info:hover {
  background-color: #f5f7fa;
}
</style>
