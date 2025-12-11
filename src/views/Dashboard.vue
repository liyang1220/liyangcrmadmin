<template>
  <div class="page-container">
    <div class="page-header">
      <h1>仪表盘</h1>
      <p>欢迎使用 CRM 管理系统</p>
    </div>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="stat-card">
            <div class="stat-icon" style="background-color: #409eff">
              <el-icon :size="30"><User /></el-icon>
            </div>
            <div class="stat-content">
              <div class="stat-value">{{ customerCount }}</div>
              <div class="stat-label">客户总数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="stat-card">
            <div class="stat-icon" style="background-color: #67c23a">
              <el-icon :size="30"><Promotion /></el-icon>
            </div>
            <div class="stat-content">
              <div class="stat-value">128</div>
              <div class="stat-label">线索总数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="stat-card">
            <div class="stat-icon" style="background-color: #e6a23c">
              <el-icon :size="30"><TrendCharts /></el-icon>
            </div>
            <div class="stat-content">
              <div class="stat-value">45</div>
              <div class="stat-label">商机总数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <div class="stat-card">
            <div class="stat-icon" style="background-color: #f56c6c">
              <el-icon :size="30"><Money /></el-icon>
            </div>
            <div class="stat-content">
              <div class="stat-value">¥2.5M</div>
              <div class="stat-label">总销售额</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px">
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>最近活动</span>
            </div>
          </template>
          <el-timeline>
            <el-timeline-item timestamp="2024-12-11 09:30" placement="top">
              张三创建了新客户 "阿里巴巴"
            </el-timeline-item>
            <el-timeline-item timestamp="2024-12-11 09:15" placement="top">
              李四更新了商机 "腾讯云服务"
            </el-timeline-item>
            <el-timeline-item timestamp="2024-12-11 08:45" placement="top">
              王五添加了新线索 "字节跳动"
            </el-timeline-item>
            <el-timeline-item timestamp="2024-12-10 18:30" placement="top">
              赵六完成了客户跟进
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>快速操作</span>
            </div>
          </template>
          <div class="quick-actions">
            <el-button type="primary" :icon="Plus" @click="handleNewCustomer">
              新建客户
            </el-button>
            <el-button type="success" :icon="Plus" @click="handleNewLead">
              新建线索
            </el-button>
            <el-button type="warning" :icon="Plus" @click="handleNewDeal">
              新建商机
            </el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { ElMessage } from 'element-plus'
import { User, Promotion, TrendCharts, Money, Plus } from '@element-plus/icons-vue'
import { useCustomerStore } from '@/store'

const customerStore = useCustomerStore()
const customerCount = computed(() => customerStore.customers.length)

const handleNewCustomer = () => {
  ElMessage.info('新建客户功能开发中...')
}

const handleNewLead = () => {
  ElMessage.info('新建线索功能开发中...')
}

const handleNewDeal = () => {
  ElMessage.info('新建商机功能开发中...')
}
</script>

<style scoped>
.stat-card {
  display: flex;
  align-items: center;
  gap: 20px;
}

.stat-icon {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #303133;
}

.stat-label {
  font-size: 14px;
  color: #909399;
  margin-top: 5px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
}

.quick-actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.quick-actions .el-button {
  width: 100%;
}
</style>
