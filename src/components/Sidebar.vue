<template>
  <el-menu
    :default-active="activeIndex"
    mode="vertical"
    background-color="#304156"
    text-color="#bfcbd9"
    active-text-color="#409eff"
    :router="true"
  >
    <el-menu-item index="/dashboard">
      <span>仪表板</span>
    </el-menu-item>
    <el-menu-item index="/customers">
      <span>客户管理</span>
    </el-menu-item>
    <el-menu-item index="/leads">
      <span>线索管理</span>
    </el-menu-item>
    <el-menu-item index="/deals">
      <span>商机管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeIndex = computed(() => route.path)
</script>

<style scoped>
.el-menu {
  border-right: none;
}
</style>
