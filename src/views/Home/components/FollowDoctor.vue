<script setup lang="ts">
import DoctorCard from './DoctorCard.vue'
import { useWindowSize } from '@vueuse/core'
import { apiGetDoc } from '@/services/consult'
import { onMounted, ref } from 'vue'
import type { KnowledgeParams, KnowledgePage, paramsDoc, ResDoc } from '@/type/consult'

const { width, height } = useWindowSize()
const list = ref<ResDoc>()
const para = ref<paramsDoc>({
    current: 1,
    pageSize:5
})
// 关注医生的数据
const setList = async() => { 
 const res = await apiGetDoc(para.value)
    list.value=res.data
}
onMounted(() => { 
    setList()   
})
</script>

<template>
    <div class="follow-doctor">
        <div className="head">
            <p>推荐关注</p>
            <a href="javascript:;"> 查看更多<i class="van-icon van-icon-arrow" /></a>
        </div>
        <div class="body">
            <!-- swipe 组件 -->
    <van-swipe
      :width="(150/375) * width"
     class="my-swipe"
      indicator-color="white"
      :show-indicators="false"
      :loop="false"
      >
      <van-swipe-item v-for="item in list?.rows" :key="item.id">
        <DoctorCard :item="item"></DoctorCard>
       </van-swipe-item>
    </van-swipe>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.follow-doctor {
    background-color: var(--cp-bg);
    height: 250px;

    .head {
        display: flex;
        justify-content: space-between;
        height: 45px;
        align-items: center;
        padding: 0 15px;
        font-size: 13px;

        >a {
            color: var(--cp-tip);
        }
    }

    .body {
        width: 100%;
        overflow: hidden;
    }
}</style>
