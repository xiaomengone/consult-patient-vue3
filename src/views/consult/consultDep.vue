<script setup lang="ts">
import { apiGetDep } from '@/services/consult'
import { onMounted, ref } from "vue";
import type { DecType } from '@/type/consult'
import CpNavBar from '@/components/CpNavBar.vue'
import { useConsultStore } from '@/stores'

const active = ref(0);
const decList = ref<DecType>({})
const clickIndex = ref(0)
const store= useConsultStore()
const getList = async () => { 
    const res = await apiGetDep()
    decList.value=res.data
   console.log('2res',res.data);
   
}
onMounted(() => { 
    getList()
})
const onChange = (index) => clickIndex.value=index;
</script>

<template>
    <CpNavBar title="选择科室"></CpNavBar>
  <div class="dep">
    <div>
      <van-sidebar 
    v-model="active" 
    @change="onChange"
    class="sidderBar"
    >
      <van-sidebar-item
       v-for="item in decList"
       :key="item.id"
       :title="item.name"
      >
     </van-sidebar-item>
    </van-sidebar>  
    </div>
    
    <div class="depRight">
       <div
        class="depRightDepartment"
        v-for=" item in decList[clickIndex]?.child"
        :key="item.id"
        @click="store.selectDepartment(item.id)"
        > 
        <router-link to="/consult/illness">{{item.name}}</router-link>
    </div>
       
    </div>
  </div>
</template>



<style lang="scss" scoped>
.dep {
    display: flex;
.depRight {
    margin-left: 20px;
    .depRightDepartment{
         padding: 22px 30px;
    }
}
}

</style>