<template>
 <div class="boxs">
     <router-view></router-view>
     <div class="nav">
         <router-link to='/index/home' active-class="select">首页</router-link>
         <router-link to='/index/order' active-class="select">订单</router-link>
         <router-link to='/index/main' active-class="select">我的</router-link>
     </div>
 </div>

</template>
<script>
export default {
components:{}
};
</script>
<style>
.boxs{
    position: relative;
    width: 7.2rem;
    height: 88vh;
    margin: 0px auto;
}
.boxs .nav{
    display: flex;
    position: absolute;
    bottom: 0px;
    left: 0;
    font-size: 0.7rem;
    text-align: center;
    border: 1px solid grey;
}
.select{
    background-color: purple;
}
.nav a{
    height: 0.75rem;
    line-height:  0.75rem;
    width: 2.4rem;
    display: block;
    font-size: 0.3rem;
}
.nav a:hover{
    background-color: purple;
}
</style>