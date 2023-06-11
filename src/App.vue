<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCpuserStore } from './stores/modules/user'
import {request} from '@/utils/request'
import type {User} from '@/type/user'

const cpuserStore=useCpuserStore()
const {setUser,delUser }=cpuserStore
const {user}=storeToRefs(cpuserStore)
const getApiUser=()=>{
  request('patient/myUser')
}
//测试登录
const degnlu = ()=>{
  request<User>('login/password','POST',{
      mobile:'13211112222',
      password:'abc12345'
    }).then((res)=>{
    console.log(111);
  }).catch((err)=>{
    console.log(err);
    
  })
}
</script>

<template>
 <div class="a">
  <div>{{user}}</div>
  <van-button type="primary" @click="setUser({id:'1',token:'2'})">主要按钮</van-button>
<van-button type="success" @click="getApiUser">获取用户信息</van-button>
<van-button type="success" @click="degnlu">登录</van-button>
 </div>
</template>

<style scoped lang="scss">
</style>
