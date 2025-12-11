<template>
  <el-menu :default-active="active" class="el-menu-vertical-demo" background-color="#001529" text-color="#fff" active-text-color="#409EFF" router>
    <el-menu-item index="/dashboard">
      <i class="el-icon-data-analysis"></i>
      <span>仪表盘</span>
    </el-menu-item>
    <el-menu-item index="/customers">
      <i class="el-icon-s-custom"></i>
      <span>客户</span>
    </el-menu-item>
    <el-menu-item index="/leads">
      <i class="el-icon-document"></i>
      <span>线索</span>
    </el-menu-item>
    <el-menu-item index="/deals">
      <i class="el-icon-s-order"></i>
      <span>商机</span>
    </el-menu-item>
    <el-menu-item index="/settings">
      <i class="el-icon-setting"></i>
      <span>设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
const route = useRoute()
const active = route.path
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100%;
  border-right: none;
  background: #001529;
}
.el-menu .el-menu-item {
  color: #fff;
}
</style>
