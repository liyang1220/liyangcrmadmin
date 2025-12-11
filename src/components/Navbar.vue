<template>
  <div style="display: flex; justify-content: space-between; align-items: center; height: 100%;">
    <h3 style="margin: 0;">CRM 管理系统</h3>
    <div>
      <span>{{ user.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { user } = storeToRefs(userStore)
</script>

<style scoped>
</style>
