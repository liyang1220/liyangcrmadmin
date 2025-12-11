<template>
  <div class="customer-table">
    <div class="table-header">
      <el-input
        v-model="searchKeyword"
        placeholder="搜索客户（姓名、邮箱、公司、电话）"
        style="width: 300px"
        clearable
        @input="handleSearch"
      >
        <template #prefix>
          <el-icon><Search /></el-icon>
        </template>
      </el-input>
    </div>

    <el-table
      :data="filteredCustomers"
      style="width: 100%"
      v-loading="loading"
    >
      <el-table-column prop="id" label="ID" width="80" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="email" label="邮箱" width="200" />
      <el-table-column prop="phone" label="电话" width="140" />
      <el-table-column prop="company" label="公司" />
      <el-table-column prop="status" label="状态" width="100">
        <template #default="{ row }">
          <el-tag :type="row.status === 'active' ? 'success' : 'info'">
            {{ row.status === 'active' ? '活跃' : '非活跃' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createdAt" label="创建时间" width="120" />
      <el-table-column label="操作" width="200" fixed="right">
        <template #default="{ row }">
          <el-button
            type="primary"
            size="small"
            text
            @click="handleView(row)"
          >
            查看
          </el-button>
          <el-button
            type="primary"
            size="small"
            text
            @click="handleEdit(row)"
          >
            编辑
          </el-button>
          <el-button
            type="danger"
            size="small"
            text
            @click="handleDelete(row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Search } from '@element-plus/icons-vue'
import { useCustomerStore, type Customer } from '@/store/index'

const customerStore = useCustomerStore()

const searchKeyword = ref('')
const loading = ref(false)

const filteredCustomers = computed(() => {
  return customerStore.searchCustomers(searchKeyword.value)
})

const handleSearch = () => {
  // Search is handled reactively through computed property
}

const handleView = (customer: Customer) => {
  ElMessageBox.alert(
    `
    <div style="text-align: left;">
      <p><strong>ID:</strong> ${customer.id}</p>
      <p><strong>姓名:</strong> ${customer.name}</p>
      <p><strong>邮箱:</strong> ${customer.email}</p>
      <p><strong>电话:</strong> ${customer.phone}</p>
      <p><strong>公司:</strong> ${customer.company}</p>
      <p><strong>状态:</strong> ${customer.status === 'active' ? '活跃' : '非活跃'}</p>
      <p><strong>创建时间:</strong> ${customer.createdAt}</p>
    </div>
    `,
    '客户详情',
    {
      dangerouslyUseHTMLString: true,
      confirmButtonText: '关闭'
    }
  )
}

const handleEdit = (customer: Customer) => {
  ElMessage.info(`编辑客户: ${customer.name} (功能开发中...)`)
}

const handleDelete = (customer: Customer) => {
  ElMessageBox.confirm(
    `确定要删除客户 "${customer.name}" 吗？此操作不可恢复。`,
    '删除确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => {
    const success = customerStore.deleteCustomer(customer.id)
    if (success) {
      ElMessage.success('删除成功')
    } else {
      ElMessage.error('删除失败')
    }
  }).catch(() => {
    // User cancelled
  })
}
</script>

<style scoped>
.customer-table {
  background: white;
  border-radius: 4px;
  padding: 20px;
}

.table-header {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
