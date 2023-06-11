import { defineStore } from 'pinia'
import { ref } from 'vue'
import type {User} from '@/type/user'

export const useCpuserStore = defineStore('cp-user', () => {
    const user = ref<User>()
    // 设置用户信息
    const setUser=(u:User)=>{
        user.value=u
    }
//   删除用户信息
    const delUser=()=>{
        user.value = undefined
    }
    return { user,setUser,delUser}
  },
  {
    persist: true                            
  })
  