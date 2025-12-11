<template>
  <div>
    <h2>系统设置</h2>
    <el-card>
      <el-form label-width="120px">
        <el-form-item label="系统名称">
          <el-input value="Liyang CRM" />
        </el-form-item>
        <el-form-item label="通知设置">
          <el-switch />
        </el-form-item>
        <el-form-item>
          <el-button type="primary">保存设置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
</script>
