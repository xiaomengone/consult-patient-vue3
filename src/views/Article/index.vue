<script lang="ts">

</script>

<template>
    <div class="dealthEncyclopedia">
        <div>重点做了首页模块</div>
        <header>
            功能介绍
            <div class="item">1：首页中，tabBar组件点击关注、推荐、减脂、饮食。点击不同的文字向后端请求不同的参数</div>
            <div class="item">2:向后端请求数据，和后端返回的数据都按照TS限制。</div>
            <div class="item">3：首页极速问诊可以记录问诊信息，使用的pinia记录信息。</div>
            <div class="item"> 4:自己封装的头部标题组件，和Radio单选框组件。方便了组件复用。</div>
        </header>
    </div>
</template>



<style lang="scss" scoped>
.dealthEncyclopedia {
    padding: 20px;
    header{
        margin: 20px;
        .item {
            margin-top: 10px;
        }
    }
}
</style>