<script setup lang="ts">
import { ref } from 'vue'
import KnowledgeCard from './KnowledgeCard.vue'
import type { KnowledgeType, KnowledgeParams, Knowledge } from '@/type/consult'
import { apiGetKnowlegeList } from '@/services/consult'

const props = defineProps<{
    type: KnowledgeType
}>()
const loading = ref(false)
const finished = ref(false)
const list = ref<Knowledge[]>([])
const params = ref<KnowledgeParams>({
  type: props.type,
  current: 1,
  pageSize: 5
})
// const onLoad = async() => {
//     const res = await apiGetKnowlegeList(params.value)
//     list.value.push(...res?.data.rows)
//     if (params.value.current >= res?.data.pageTotal)
//         finished.value = true;
//     else
//         params.value.current++
//     loading.value = false;
// }
// 滚动到底部
const onLoad = async () => {
    const res = await apiGetKnowlegeList(params.value)
    console.log(5, res.data.rows);
    list.value.push(...res.data.rows)
    // 判断已经加载完成了
    if (params.value.current >= res.data.pageTotal) {
        finished.value = true
    } else {
        params.value.current++
    }
    loading.value = false
}
</script>

<template>
    <div class="knowledge-list">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
        <KnowledgeCard
          v-for="item in list" 
          :key="item.id" 
          :item="item"
        >
        </KnowledgeCard>
    </van-list>
    </div>
</template>

<style lang="scss" scoped>
.knowledge-list {
    padding: 0 15px;
}
</style>
