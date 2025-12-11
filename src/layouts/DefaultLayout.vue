<template>
  <div class="layout-container">
    <Sidebar />
    <div class="main-content">
      <Navbar />
      <div class="content-area">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue'
import Navbar from '@/components/Navbar.vue'
</script>

<style scoped>
</style>
