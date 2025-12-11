<template>
  <el-container style="height: 100%;">
    <el-aside width="200px" style="background-color: #304156;">
      <Sidebar />
    </el-aside>
    <el-container>
      <el-header style="background-color: #fff; box-shadow: 0 2px 4px rgba(0,0,0,.08);">
        <Navbar />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped>
</style>
