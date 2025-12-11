<template>
  <div class="deals-page">
    <div class="page-header">
      <h1>商机管理</h1>
      <el-button type="primary">
        <el-icon><Plus /></el-icon>
        添加商机
      </el-button>
    </div>

    <div class="card-container">
      <el-table :data="deals" style="width: 100%">
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="title" label="商机名称" width="200" />
        <el-table-column prop="customerName" label="客户" width="120" />
        <el-table-column prop="amount" label="金额" width="120">
          <template #default="{ row }">
            ¥{{ row.amount.toLocaleString() }}
          </template>
        </el-table-column>
        <el-table-column prop="stage" label="阶段" width="120">
          <template #default="{ row }">
            <el-tag :type="getStageType(row.stage)">
              {{ getStageLabel(row.stage) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="probability" label="成功率" width="100">
          <template #default="{ row }">
            {{ row.probability }}%
          </template>
        </el-table-column>
        <el-table-column prop="expectedCloseDate" label="预计成交日期" width="130" />
        <el-table-column prop="createdAt" label="创建时间" width="120" />
        <el-table-column label="操作" width="180" fixed="right">
          <template #default="{ row: _row }">
            <el-button type="primary" size="small" text>查看</el-button>
            <el-button type="primary" size="small" text>编辑</el-button>
            <el-button type="danger" size="small" text>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

const deals = ref([
  {
    id: 1,
    title: 'ERP系统采购',
    customerName: '张三',
    amount: 500000,
    stage: 'proposal',
    probability: 60,
    expectedCloseDate: '2024-12-20',
    createdAt: '2024-11-15'
  },
  {
    id: 2,
    title: 'CRM系统实施',
    customerName: '李四',
    amount: 800000,
    stage: 'negotiation',
    probability: 80,
    expectedCloseDate: '2024-12-25',
    createdAt: '2024-11-20'
  },
  {
    id: 3,
    title: 'OA办公系统',
    customerName: '王五',
    amount: 300000,
    stage: 'qualification',
    probability: 30,
    expectedCloseDate: '2025-01-10',
    createdAt: '2024-12-01'
  },
  {
    id: 4,
    title: '供应链管理系统',
    customerName: '赵六',
    amount: 1200000,
    stage: 'closed_won',
    probability: 100,
    expectedCloseDate: '2024-12-05',
    createdAt: '2024-10-10'
  }
])

const getStageType = (stage: string) => {
  const types: Record<string, any> = {
    qualification: 'info',
    proposal: 'warning',
    negotiation: 'primary',
    closed_won: 'success',
    closed_lost: 'danger'
  }
  return types[stage] || 'info'
}

const getStageLabel = (stage: string) => {
  const labels: Record<string, string> = {
    qualification: '资格审查',
    proposal: '提案',
    negotiation: '谈判',
    closed_won: '赢单',
    closed_lost: '输单'
  }
  return labels[stage] || stage
}
</script>

<style scoped>
.deals-page {
  padding: 0;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.page-header h1 {
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  color: #303133;
}
</style>
