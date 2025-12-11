<template>
  <div style="display: flex; align-items: center; justify-content: space-between; height: 100%; padding: 0 20px;">
    <span style="font-weight: 600;">欢迎，{{ userStore.user.name }}</span>
    <el-button @click="() => userStore.setUserName('用户A')">切换</el-button>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store'
const userStore = useUserStore()
</script>
