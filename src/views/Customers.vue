<template>
  <div class="page-container">
    <div class="page-header">
      <h1>客户管理</h1>
      <p>管理和维护客户信息</p>
    </div>

    <el-card>
      <CustomerTable />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import CustomerTable from '@/components/CustomerTable.vue'
</script>

<style scoped>
/* Page-specific styles can be added here */
</style>
