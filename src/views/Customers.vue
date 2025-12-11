<template>
  <div>
    <h2>客户管理</h2>
    <el-button type="primary" style="margin-bottom: 10px;">新增客户</el-button>
    <CustomerTable />
  </div>
</template>

<script setup lang="ts">
import CustomerTable from '@/components/CustomerTable.vue'
</script>
