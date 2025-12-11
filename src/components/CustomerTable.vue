<template>
  <el-table :data="customers" border>
    <el-table-column prop="id" label="ID" width="60" />
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="phone" label="电话" />
    <el-table-column prop="email" label="邮箱" />
    <el-table-column prop="company" label="公司" />
    <el-table-column label="操作" width="150">
      <template #default><el-button size="small">编辑</el-button><el-button size="small" type="danger">删除</el-button></template>
    </el-table-column>
  </el-table>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const customers = ref([{ id: 1, name: '张三', phone: '13800138000', email: 'zhangsan@example.com', company: 'ABC公司' },{ id: 2, name: '李四', phone: '13900139000', email: 'lisi@example.com', company: 'XYZ公司' }])
</script>
