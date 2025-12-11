<template>
  <el-menu :default-active="route.path" router background-color="#001529" text-color="#fff" active-text-color="#409eff">
    <div style="padding: 20px; font-size: 18px; font-weight: bold; text-align: center; color: #fff;">liyang CRM</div>
    <el-menu-item index="/dashboard"><el-icon><House /></el-icon><span>控制台</span></el-menu-item>
    <el-menu-item index="/customers"><el-icon><User /></el-icon><span>客户管理</span></el-menu-item>
    <el-menu-item index="/leads"><el-icon><Star /></el-icon><span>线索管理</span></el-menu-item>
    <el-menu-item index="/deals"><el-icon><Briefcase /></el-icon><span>商机管理</span></el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { House, User, Star, Briefcase } from '@element-plus/icons-vue'
const route = useRoute()
</script>
