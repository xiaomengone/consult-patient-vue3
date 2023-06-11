<script setup lang="ts">
import { Button } from 'vant';
import navBar from '@/components/CpNavBar.vue'

const fn = () => { 
    console.log('fn');
    
}
</script>

<template>
<div>
    登录页
    <navBar title="1" rightText="456" @click-right="fn"></navBar>
    <div>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="success">成功按钮</van-button>
    </div>
</div>  
</template>



<style>

</style>