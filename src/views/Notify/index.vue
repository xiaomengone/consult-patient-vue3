<script lang="ts">

</script>

<template>
    <div class="dealthEncyclopedia">
        <div>重点做了我的模块</div>
        <header>
            功能介绍
            <div class="item">1：登录后会记录token，然后设置路由白名单来展示页面。退出时会将token删除。</div>
            <div class="item">2:我的模块中，做了家庭档案模块，可以对或者信息做增删改查，并有对应的效验。</div>
        </header>
    </div>
</template>



<style lang="scss" scoped>
.dealthEncyclopedia {
    padding: 20px;

    header {
        margin: 20px;

        .item {
            margin-top: 10px;
        }
    }
}
</style>