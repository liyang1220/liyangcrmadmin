<template>
  <el-container style="height: 100%">
    <el-aside width="200px" style="background-color: #001529">
      <div style="padding: 16px; color: #fff; font-size: 20px; font-weight: bold; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1)">
        CRM Admin
      </div>
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header style="background-color: #fff; box-shadow: 0 1px 4px rgba(0,21,41,.08); display: flex; align-items: center; justify-content: space-between; padding: 0 20px">
        <div style="font-size: 18px; font-weight: 500">{{ pageTitle }}</div>
        <div>
          <el-dropdown>
            <span style="cursor: pointer; color: #333">
              {{ userName }} <i class="el-icon-arrow-down"></i>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>
      <el-main style="background-color: #f5f7fa; padding: 20px">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useUserStore } from '@/store'
import Sidebar from '@/components/Sidebar.vue'

const route = useRoute()
const userStore = useUserStore()

const userName = computed(() => userStore.user.name || 'Guest')

const pageTitle = computed(() => {
  const titleMap: Record<string, string> = {
    '/dashboard': '仪表盘',
    '/customers': '客户管理',
    '/leads': '线索管理',
    '/deals': '商机管理',
    '/settings': '系统设置'
  }
  return titleMap[route.path] || '页面'
})
</script>

<style scoped>
.el-header {
  line-height: 60px;
}
</style>
