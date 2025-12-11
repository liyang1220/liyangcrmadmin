<template>
  <div>
    <h1>客户管理</h1>
    <el-button type="primary" @click="handleAdd" style="margin-bottom: 20px;">新增客户</el-button>
    <CustomerTable :customers="customers" @edit="handleEdit" @delete="handleDelete" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CustomerTable from '@/components/CustomerTable.vue'
import type { Customer } from '@/api/crm'

const customers = ref<Customer[]>([])

onMounted(() => {
  // Mock 数据示例
  customers.value = [
    { id: 1, name: '张三', phone: '13800138000', email: 'zhangsan@example.com', company: 'ABC公司' },
    { id: 2, name: '李四', phone: '13900139000', email: 'lisi@example.com', company: 'XYZ公司' },
  ]
})

function handleAdd() {
  console.log('新增客户')
}

function handleEdit(row: Customer) {
  console.log('编辑客户', row)
}

function handleDelete(row: Customer) {
  console.log('删除客户', row)
}
</script>

<style scoped>
</style>
