import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref<{ name: string | null }>({ name: 'Admin' })
  function setUserName(name: string) {
    user.value.name = name
  }
  return { user, setUserName }
})
