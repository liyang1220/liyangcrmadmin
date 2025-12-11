<template>
  <el-container style="height: 100%">
    <el-aside width="200px"><Sidebar /></el-aside>
    <el-container>
      <el-header height="60px"><Navbar /></el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped>
.el-header { background: #fff; box-shadow: 0 1px 4px rgba(0,21,41,.08); }
.el-aside { background: #001529; color: #fff; }
.el-main { padding: 20px; }
</style>
