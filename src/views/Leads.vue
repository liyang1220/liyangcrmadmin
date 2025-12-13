<template>
  <div class="page-container">
    <div class="page-header">
      <h1>线索管理</h1>
      <p>跟踪和管理销售线索</p>
    </div>

    <el-card>
      <div class="table-header">
        <el-input
          v-model="searchQuery"
          placeholder="搜索线索"
          clearable
          style="width: 300px"
          :prefix-icon="Search"
        />
        <el-button type="primary" :icon="Plus">新建线索</el-button>
      </div>

      <el-table
        :data="filteredLeads"
        stripe
        style="width: 100%; margin-top: 20px"
      >
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="name" label="姓名" width="150" />
        <el-table-column prop="email" label="邮箱" width="200" />
        <el-table-column prop="phone" label="电话" width="150" />
        <el-table-column prop="source" label="来源" width="120" />
        <el-table-column prop="status" label="状态" width="120">
          <template #default="{ row }">
            <el-tag :type="getStatusType(row.status)" size="small">
              {{ row.status }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="createdAt" label="创建时间" width="150" />
        <el-table-column label="操作" fixed="right" width="200">
          <template #default="{ row }">
            <el-button type="primary" size="small" @click="handleConvert(row)">
              转换
            </el-button>
            <el-button type="warning" size="small">
              编辑
            </el-button>
            <el-button type="danger" size="small">
              删除
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

interface Lead {
  id: number
  name: string
  email: string
  phone: string
  source: string
  status: string
  createdAt: string
}

const searchQuery = ref('')

const leads = ref<Lead[]>([
  {
    id: 1,
    name: '陈八',
    email: 'chenba@example.com',
    phone: '13900139000',
    source: '网站',
    status: '新建',
    createdAt: '2024-12-01'
  },
  {
    id: 2,
    name: '周九',
    email: 'zhoujiu@example.com',
    phone: '13900139001',
    source: '推荐',
    status: '跟进中',
    createdAt: '2024-12-03'
  },
  {
    id: 3,
    name: '吴十',
    email: 'wushi@example.com',
    phone: '13900139002',
    source: '展会',
    status: '已联系',
    createdAt: '2024-12-05'
  },
  {
    id: 4,
    name: '郑十一',
    email: 'zhengshiyi@example.com',
    phone: '13900139003',
    source: '电话',
    status: '新建',
    createdAt: '2024-12-08'
  }
])

const filteredLeads = computed(() => {
  if (!searchQuery.value) {
    return leads.value
  }
  const query = searchQuery.value.toLowerCase()
  return leads.value.filter(lead =>
    lead.name.toLowerCase().includes(query) ||
    lead.email.toLowerCase().includes(query) ||
    lead.source.toLowerCase().includes(query)
  )
})

const getStatusType = (status: string) => {
  const statusMap: Record<string, any> = {
    '新建': 'info',
    '跟进中': 'warning',
    '已联系': 'success',
    '已转换': 'success'
  }
  return statusMap[status] || 'info'
}

const handleConvert = (row: Lead) => {
  ElMessage.success(`线索 "${row.name}" 已转换为客户`)
}
</script>

<style scoped>
.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
