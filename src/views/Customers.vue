<template>
  <div class="customers-page">
    <div class="page-header">
      <h1>客户管理</h1>
      <el-button type="primary" @click="handleAdd">
        <el-icon><Plus /></el-icon>
        添加客户
      </el-button>
    </div>

    <div class="card-container">
      <CustomerTable />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import CustomerTable from '@/components/CustomerTable.vue'

const handleAdd = () => {
  ElMessage.info('添加客户功能开发中...')
}
</script>

<style scoped>
.customers-page {
  padding: 0;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.page-header h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #303133;
}
</style>
