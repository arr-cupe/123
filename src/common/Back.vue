<template>
 <div class="box2">
     <i class="iconfont icon-buoumaotubiao09 wrap2" @click="$router.go(-1)">返回</i>
 </div>
</template>
<script>
export default {
components:{},
methods:{
}
};
</script>
<style>
.box2{
    text-align: left;
    float: left;
    /* position: absolute;
    top: 0;
    left: 0; */
}
.wrap2{
    cursor: pointer;
    font-size: 0.3rem;
}
</style>