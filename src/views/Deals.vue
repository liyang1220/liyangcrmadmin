<template>
  <div class="page-container">
    <div class="page-header">
      <h1>商机管理</h1>
      <p>跟踪和管理销售商机</p>
    </div>

    <el-card>
      <div class="table-header">
        <el-input
          v-model="searchQuery"
          placeholder="搜索商机"
          clearable
          style="width: 300px"
          :prefix-icon="Search"
        />
        <el-button type="primary" :icon="Plus">新建商机</el-button>
      </div>

      <el-table
        :data="filteredDeals"
        stripe
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="name" label="商机名称" width="180" />
        <el-table-column prop="customer" label="客户" width="150" />
        <el-table-column prop="amount" label="金额" width="120">
          <template #default="{ row }">
            ¥{{ row.amount.toLocaleString() }}
          </template>
        </el-table-column>
        <el-table-column prop="stage" label="阶段" width="120">
          <template #default="{ row }">
            <el-tag :type="getStageType(row.stage)" size="small">
              {{ row.stage }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="probability" label="成功率" width="100">
          <template #default="{ row }">
            {{ row.probability }}%
          </template>
        </el-table-column>
        <el-table-column prop="expectedCloseDate" label="预计成交日期" width="150" />
        <el-table-column prop="createdAt" label="创建时间" width="150" />
        <el-table-column label="操作" fixed="right" width="200">
          <template #default="{ row }">
            <el-button type="primary" size="small" @click="handleWin(row)">
              赢单
            </el-button>
            <el-button type="warning" size="small">
              编辑
            </el-button>
            <el-button type="danger" size="small" @click="handleLose(row)">
              输单
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElMessage } from 'element-plus'
import { Search, Plus } from '@element-plus/icons-vue'

interface Deal {
  id: number
  name: string
  customer: string
  amount: number
  stage: string
  probability: number
  expectedCloseDate: string
  createdAt: string
}

const searchQuery = ref('')

const deals = ref<Deal[]>([
  {
    id: 1,
    name: '云服务采购',
    customer: '阿里巴巴',
    amount: 500000,
    stage: '需求分析',
    probability: 30,
    expectedCloseDate: '2024-12-30',
    createdAt: '2024-11-15'
  },
  {
    id: 2,
    name: 'CRM系统升级',
    customer: '腾讯',
    amount: 800000,
    stage: '方案设计',
    probability: 50,
    expectedCloseDate: '2025-01-15',
    createdAt: '2024-11-20'
  },
  {
    id: 3,
    name: '数据中心建设',
    customer: '字节跳动',
    amount: 1200000,
    stage: '商务谈判',
    probability: 70,
    expectedCloseDate: '2025-01-30',
    createdAt: '2024-11-25'
  },
  {
    id: 4,
    name: 'AI解决方案',
    customer: '百度',
    amount: 600000,
    stage: '需求分析',
    probability: 40,
    expectedCloseDate: '2025-02-28',
    createdAt: '2024-12-01'
  },
  {
    id: 5,
    name: '移动应用开发',
    customer: '美团',
    amount: 450000,
    stage: '合同签署',
    probability: 90,
    expectedCloseDate: '2024-12-20',
    createdAt: '2024-11-10'
  }
])

const filteredDeals = computed(() => {
  if (!searchQuery.value) {
    return deals.value
  }
  const query = searchQuery.value.toLowerCase()
  return deals.value.filter(deal =>
    deal.name.toLowerCase().includes(query) ||
    deal.customer.toLowerCase().includes(query)
  )
})

const getStageType = (stage: string) => {
  const stageMap: Record<string, any> = {
    '需求分析': 'info',
    '方案设计': 'warning',
    '商务谈判': 'warning',
    '合同签署': 'success',
    '已成交': 'success',
    '已失败': 'danger'
  }
  return stageMap[stage] || 'info'
}

const handleWin = (row: Deal) => {
  ElMessage.success(`商机 "${row.name}" 已标记为赢单`)
}

const handleLose = (row: Deal) => {
  ElMessage.warning(`商机 "${row.name}" 已标记为输单`)
}
</script>

<style scoped>
.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
