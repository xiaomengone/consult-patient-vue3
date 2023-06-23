<script setup lang="ts">
import CpNavBar from '@/components/CpNavBar.vue'
</script>

<template>
  <div class="register">
    <CpNavBar title="注册"></CpNavBar>
    <header>给定范围内的账号和密码进行登录，后端没有提供注册对应的接口。</header>
    <main>可以进行如下登录</main>
    <footer>
      <div class="footerItem">
        <div>第一种方式：<br/>复制账号后，进行验证码登录</div>
        <div class="footerItemAcount">账号范围：<br/>13230000001 - 13230000100<br/><br/>eg:13230000002</div>
      </div>
      <div class="footerMiddle"></div>
      <div class="footerItem">
         <div>第二种方式：<br/>复制账号、密码后，进行密码登录</div>
         <div class="footerItemAcount">账号范围：<br/>13230000001 - 13230000100<br/><br/>eg:账号：13230000002<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码：abc12345</div>
      </div>
    </footer>
  </div>  
</template>

<style scoped lang="scss">
.register {
  header{
    line-height: 20px;
    margin: 20px;
    text-indent: 2em;
  }
  main {
    text-align: center;
    font-size: 20px;
  }
  footer {
    display: flex;
    justify-content: space-between;
    .footerMiddle {
      margin: 0 5px;
    }
    .footerItem {
      margin: 20px 10px;
      border: 1px solid blue;
    }
    .footerItemAcount {
      margin: 15px 0;
    }
  }
}
</style>