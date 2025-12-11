<template>
  <div>
    <el-card>
      <template #header>
        <div style="display: flex; justify-content: space-between; align-items: center">
          <span style="font-size: 18px; font-weight: 500">客户列表</span>
          <el-button type="primary">新增客户</el-button>
        </div>
      </template>
      <CustomerTable />
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import CustomerTable from '@/components/CustomerTable.vue'
</script>
