<template>
  <div>
    <h2>商机管理</h2>
    <el-button type="primary" style="margin-bottom: 10px;">新增商机</el-button>
    <el-table :data="[]" border><el-table-column prop="id" label="ID" width="60" /><el-table-column prop="name" label="商机名称" /><el-table-column prop="amount" label="金额" /></el-table>
  </div>
</template>

<script setup lang="ts">
</script>
