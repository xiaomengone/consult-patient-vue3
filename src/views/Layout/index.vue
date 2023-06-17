<script lang="ts">

</script>

<template>
  <router-view></router-view>
  <van-tabbar v-model="active" route>
      <van-tabbar-item to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/article" icon="search">健康百科</van-tabbar-item>
      <van-tabbar-item to="/notify" icon="friends-o">消息通知</van-tabbar-item>
      <van-tabbar-item to="/user" icon="setting-o">我的</van-tabbar-item>
    </van-tabbar>
</template>



<style>

</style>