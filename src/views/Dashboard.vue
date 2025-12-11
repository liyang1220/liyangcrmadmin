<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card>
          <div style="font-size:20px">活跃客户</div>
          <div style="font-size:28px;margin-top:8px">128</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div style="font-size:20px">本月新增</div>
          <div style="font-size:28px;margin-top:8px">23</div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card>
          <div style="font-size:20px">待跟进</div>
          <div style="font-size:28px;margin-top:8px">12</div>
        </el-card>
      </el-col>
    </el-row>
    <el-card style="margin-top:16px">
      <div style="height:300px">（仪表盘图表占位，后续接入 ECharts）</div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
</script>
