<template>
  <div>
    <h1>仪表板</h1>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <div>总客户数</div>
          <div style="font-size: 32px; font-weight: bold; margin-top: 10px;">1,234</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div>总线索数</div>
          <div style="font-size: 32px; font-weight: bold; margin-top: 10px;">567</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div>总商机数</div>
          <div style="font-size: 32px; font-weight: bold; margin-top: 10px;">89</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div>本月成交</div>
          <div style="font-size: 32px; font-weight: bold; margin-top: 10px;">12</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
// Dashboard 视图组件
</script>

<style scoped>
</style>
