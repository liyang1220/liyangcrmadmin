<template>
  <div>
    <el-input v-model="keyword" placeholder="搜索客户..." style="width:300px;margin-bottom:12px" @input="search" clearable />
    <el-table :data="customers" style="width:100%">
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="名称" />
      <el-table-column prop="company" label="公司" />
      <el-table-column prop="phone" label="电话" width="140" />
      <el-table-column prop="email" label="邮箱" width="200" />
      <el-table-column label="操作" width="220">
        <template #default="{ row }">
          <el-button size="small" @click="view(row)">查看</el-button>
          <el-button size="small" type="primary" @click="edit(row)">编辑</el-button>
          <el-button size="small" type="danger" @click="remove(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { fetchCustomers } from '@/api/crm'
import { ElMessage, ElMessageBox } from 'element-plus'

const customers = ref<any[]>([])
const allCustomers = ref<any[]>([])
const keyword = ref('')

async function load() {
  try {
    // 示例：后端应返回数据数组
    const res = await fetchCustomers()
    // 若后端返回包装：res.data，按实际调整
    const data = Array.isArray(res) ? res : res?.data || []
    allCustomers.value = data
    customers.value = data
  } catch (e) {
    console.error(e)
  }
}

function search() {
  // 简单本地过滤示例
  const kw = keyword.value.trim().toLowerCase()
  if (!kw) {
    customers.value = allCustomers.value
    return
  }
  customers.value = allCustomers.value.filter(c => (c.name || '').toLowerCase().includes(kw) || (c.company || '').toLowerCase().includes(kw))
}

function view(row: any) {
  ElMessage.info(`查看客户：${row.name}`)
}

function edit(row: any) {
  ElMessage.info(`编辑客户：${row.name}`)
}

function remove(row: any) {
  ElMessageBox.confirm(`确认删除 ${row.name} ?`, '删除确认', { type: 'warning' })
    .then(() => {
      ElMessage.success('已删除（示例）')
      // 后续调用 deleteCustomer(row.id) 并刷新
    })
    .catch(() => {})
}

onMounted(() => {
  // 临时 mock 数据（如果后端未接）
  const mockData = [
    { id: 1, name: '张三', company: '示例公司A', phone: '13800000001', email: 'zhangsan@example.com' },
    { id: 2, name: '李四', company: '示例公司B', phone: '13800000002', email: 'lisi@example.com' }
  ]
  allCustomers.value = mockData
  customers.value = mockData
  // 若要请求真实数据，请启用 load()
  // load()
})
</script>
