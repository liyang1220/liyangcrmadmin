<template>
  <div class="customer-table">
    <div class="table-header">
      <el-input
        v-model="searchQuery"
        placeholder="搜索客户名称、邮箱或公司"
        clearable
        style="width: 300px"
        :prefix-icon="Search"
      />
    </div>
    
    <el-table
      :data="filteredCustomers"
      stripe
      style="width: 100%; margin-top: 20px"
      :default-sort="{ prop: 'createdAt', order: 'descending' }"
    >
      <el-table-column prop="id" label="ID" width="80" sortable />
      <el-table-column prop="name" label="姓名" width="120" sortable />
      <el-table-column prop="email" label="邮箱" width="200" />
      <el-table-column prop="phone" label="电话" width="150" />
      <el-table-column prop="company" label="公司" width="150" sortable />
      <el-table-column prop="status" label="状态" width="100">
        <template #default="{ row }">
          <el-tag
            :type="getStatusType(row.status)"
            size="small"
          >
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="createdAt" label="创建时间" width="150" sortable />
      <el-table-column label="操作" fixed="right" width="200">
        <template #default="{ row }">
          <el-button
            type="primary"
            size="small"
            :icon="View"
            @click="handleView(row)"
          >
            查看
          </el-button>
          <el-button
            type="warning"
            size="small"
            :icon="Edit"
            @click="handleEdit(row)"
          >
            编辑
          </el-button>
          <el-button
            type="danger"
            size="small"
            :icon="Delete"
            @click="handleDelete(row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- View Dialog -->
    <el-dialog
      v-model="viewDialogVisible"
      title="客户详情"
      width="500px"
    >
      <el-descriptions v-if="currentCustomer" :column="1" border>
        <el-descriptions-item label="ID">{{ currentCustomer.id }}</el-descriptions-item>
        <el-descriptions-item label="姓名">{{ currentCustomer.name }}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{ currentCustomer.email }}</el-descriptions-item>
        <el-descriptions-item label="电话">{{ currentCustomer.phone }}</el-descriptions-item>
        <el-descriptions-item label="公司">{{ currentCustomer.company }}</el-descriptions-item>
        <el-descriptions-item label="状态">{{ currentCustomer.status }}</el-descriptions-item>
        <el-descriptions-item label="创建时间">{{ currentCustomer.createdAt }}</el-descriptions-item>
      </el-descriptions>
    </el-dialog>

    <!-- Edit Dialog -->
    <el-dialog
      v-model="editDialogVisible"
      title="编辑客户"
      width="500px"
    >
      <el-form v-if="currentCustomer" :model="editForm" label-width="80px">
        <el-form-item label="姓名">
          <el-input v-model="editForm.name" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="editForm.email" />
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="editForm.phone" />
        </el-form-item>
        <el-form-item label="公司">
          <el-input v-model="editForm.company" />
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="editForm.status">
            <el-option label="活跃" value="活跃" />
            <el-option label="潜在" value="潜在" />
            <el-option label="休眠" value="休眠" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button @click="editDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="handleSaveEdit">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { Search, View, Edit, Delete } from '@element-plus/icons-vue'
import { useCustomerStore } from '@/store'
import type { Customer } from '@/store'

const customerStore = useCustomerStore()

const searchQuery = ref('')
const viewDialogVisible = ref(false)
const editDialogVisible = ref(false)
const currentCustomer = ref<Customer | null>(null)
const editForm = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  status: ''
})

const filteredCustomers = computed(() => {
  if (!searchQuery.value) {
    return customerStore.customers
  }
  const query = searchQuery.value.toLowerCase()
  return customerStore.customers.filter(customer =>
    customer.name.toLowerCase().includes(query) ||
    customer.email.toLowerCase().includes(query) ||
    customer.company.toLowerCase().includes(query)
  )
})

const getStatusType = (status: string) => {
  const statusMap: Record<string, any> = {
    '活跃': 'success',
    '潜在': 'warning',
    '休眠': 'info'
  }
  return statusMap[status] || 'info'
}

const handleView = (row: Customer) => {
  currentCustomer.value = row
  viewDialogVisible.value = true
}

const handleEdit = (row: Customer) => {
  currentCustomer.value = row
  editForm.value = { ...row }
  editDialogVisible.value = true
}

const handleSaveEdit = () => {
  if (currentCustomer.value) {
    customerStore.updateCustomer(currentCustomer.value.id, editForm.value)
    ElMessage.success('客户信息已更新')
    editDialogVisible.value = false
  }
}

const handleDelete = (row: Customer) => {
  ElMessageBox.confirm(
    `确定要删除客户 "${row.name}" 吗？此操作不可恢复。`,
    '删除确认',
    {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }
  ).then(() => {
    customerStore.deleteCustomer(row.id)
    ElMessage.success('客户已删除')
  }).catch(() => {
    // User cancelled
  })
}
</script>

<style scoped>
.customer-table {
  width: 100%;
}

.table-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
