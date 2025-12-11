<template>
  <div class="dashboard">
    <div class="page-header">
      <h1>仪表盘</h1>
    </div>
    
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" style="background-color: #409eff;">
              <el-icon size="24"><User /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">{{ stats.totalCustomers }}</div>
              <div class="stat-label">总客户数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" style="background-color: #67c23a;">
              <el-icon size="24"><Opportunity /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">{{ stats.totalLeads }}</div>
              <div class="stat-label">线索数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" style="background-color: #e6a23c;">
              <el-icon size="24"><Coin /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">{{ stats.totalDeals }}</div>
              <div class="stat-label">商机数</div>
            </div>
          </div>
        </el-card>
      </el-col>
      
      <el-col :xs="24" :sm="12" :md="6">
        <el-card class="stat-card">
          <div class="stat-content">
            <div class="stat-icon" style="background-color: #f56c6c;">
              <el-icon size="24"><TrendCharts /></el-icon>
            </div>
            <div class="stat-info">
              <div class="stat-value">¥{{ stats.totalRevenue }}</div>
              <div class="stat-label">总收入</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :xs="24" :md="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>最近活动</span>
            </div>
          </template>
          <el-timeline>
            <el-timeline-item
              v-for="activity in recentActivities"
              :key="activity.id"
              :timestamp="activity.timestamp"
              placement="top"
            >
              {{ activity.content }}
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </el-col>
      
      <el-col :xs="24" :md="12">
        <el-card>
          <template #header>
            <div class="card-header">
              <span>待办事项</span>
            </div>
          </template>
          <el-empty v-if="todos.length === 0" description="暂无待办事项" />
          <div v-else>
            <div v-for="todo in todos" :key="todo.id" class="todo-item">
              <el-checkbox v-model="todo.completed">{{ todo.title }}</el-checkbox>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { User, Opportunity, Coin, TrendCharts } from '@element-plus/icons-vue'

const stats = ref({
  totalCustomers: 156,
  totalLeads: 89,
  totalDeals: 45,
  totalRevenue: '1,234,567'
})

const recentActivities = ref([
  {
    id: 1,
    content: '张三创建了新客户记录',
    timestamp: '2024-12-11 10:30'
  },
  {
    id: 2,
    content: '李四更新了商机状态',
    timestamp: '2024-12-11 09:15'
  },
  {
    id: 3,
    content: '王五添加了新线索',
    timestamp: '2024-12-11 08:45'
  },
  {
    id: 4,
    content: '赵六完成了跟进任务',
    timestamp: '2024-12-10 16:20'
  }
])

const todos = ref([
  {
    id: 1,
    title: '跟进客户张三',
    completed: false
  },
  {
    id: 2,
    title: '准备周会报告',
    completed: false
  },
  {
    id: 3,
    title: '审核商机进度',
    completed: true
  }
])
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.stat-card {
  margin-bottom: 20px;
}

.stat-content {
  display: flex;
  align-items: center;
  gap: 16px;
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

.stat-info {
  flex: 1;
}

.stat-value {
  font-size: 28px;
  font-weight: 600;
  color: #303133;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #909399;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
}

.todo-item {
  padding: 8px 0;
  border-bottom: 1px solid #ebeef5;
}

.todo-item:last-child {
  border-bottom: none;
}
</style>
