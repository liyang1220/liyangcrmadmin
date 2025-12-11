<template>
  <el-table :data="customers" style="width: 100%">
    <el-table-column prop="id" label="ID" width="80" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="phone" label="电话" />
    <el-table-column prop="email" label="邮箱" />
    <el-table-column prop="company" label="公司" />
    <el-table-column label="操作" width="180">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
        <el-button size="small" type="danger" @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { Customer } from '@/api/crm'

defineProps<{
  customers: Customer[]
}>()

const emit = defineEmits(['edit', 'delete'])

function handleEdit(row: Customer) {
  emit('edit', row)
}

function handleDelete(row: Customer) {
  emit('delete', row)
}
</script>

<style scoped>
</style>
