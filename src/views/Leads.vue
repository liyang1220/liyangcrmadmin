<template>
  <div class="leads-page">
    <div class="page-header">
      <h1>线索管理</h1>
      <el-button type="primary">
        <el-icon><Plus /></el-icon>
        添加线索
      </el-button>
    </div>

    <div class="card-container">
      <el-table :data="leads" style="width: 100%">
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column prop="email" label="邮箱" width="200" />
        <el-table-column prop="phone" label="电话" width="140" />
        <el-table-column prop="source" label="来源" width="120" />
        <el-table-column prop="status" label="状态" width="100">
          <template #default="{ row }">
            <el-tag :type="getStatusType(row.status)">
              {{ getStatusLabel(row.status) }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="创建时间" width="120" />
        <el-table-column label="操作" width="200" fixed="right">
          <template #default="{ row: _row }">
            <el-button type="primary" size="small" text>查看</el-button>
            <el-button type="primary" size="small" text>编辑</el-button>
            <el-button type="success" size="small" text>转化</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'

const leads = ref([
  {
    id: 1,
    name: '潜在客户A',
    email: 'leadA@example.com',
    phone: '13900139001',
    source: '网站表单',
    status: 'new',
    createdAt: '2024-12-10'
  },
  {
    id: 2,
    name: '潜在客户B',
    email: 'leadB@example.com',
    phone: '13900139002',
    source: '电话咨询',
    status: 'contacted',
    createdAt: '2024-12-09'
  },
  {
    id: 3,
    name: '潜在客户C',
    email: 'leadC@example.com',
    phone: '13900139003',
    source: '推荐',
    status: 'qualified',
    createdAt: '2024-12-08'
  }
])

const getStatusType = (status: string) => {
  const types: Record<string, any> = {
    new: 'info',
    contacted: 'warning',
    qualified: 'success',
    unqualified: 'danger'
  }
  return types[status] || 'info'
}

const getStatusLabel = (status: string) => {
  const labels: Record<string, string> = {
    new: '新线索',
    contacted: '已联系',
    qualified: '已验证',
    unqualified: '不合格'
  }
  return labels[status] || status
}
</script>

<style scoped>
.leads-page {
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
