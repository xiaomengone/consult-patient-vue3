<script setup lang="ts">
import router from '@/router';
import { showToast } from 'vant';
type NaveBar={
    title?: string,
    rightText?: string
}

const { title, rightText }=defineProps<NaveBar>()
const onClickLeft = () => { 
    if (history.state?.back) {
        history.back();
    } else { 
        router.push('/')
    }
    }
const emit = defineEmits<{
    (e: "click-right"):void
}>()
const onClickRight = () => { 
   emit('click-right')
}
</script>

<template>
  <van-nav-bar
      :title="title"
      left-text="返回"
      :right-text="rightText"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
</template>

<style lang="scss" scoped>
:deep(){
    .van-nav-bar__left .van-icon-arrow-left 
      {
        color: var(--cp-text1);
       }  
    .van-nav-bar__content .van-nav-bar__title {
        font-size: 15px;
       }
}

</style>