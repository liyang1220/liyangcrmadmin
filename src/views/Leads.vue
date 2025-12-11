<template>
  <div>
    <h2>线索管理</h2>
    <el-button type="primary" style="margin-bottom: 10px;">新增线索</el-button>
    <el-table :data="[]" border><el-table-column prop="id" label="ID" width="60" /><el-table-column prop="name" label="线索名称" /><el-table-column prop="source" label="来源" /></el-table>
  </div>
</template>

<script setup lang="ts">
</script>
