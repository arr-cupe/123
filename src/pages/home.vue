<template>
  <div class="wraps">
    <div class="wraps-a">
      <router-link to="/food" v-if="type==0">美食模块</router-link>
      <router-link to="/move" v-else>电影</router-link>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data(){
    return {
      type:sessionStorage.getItem('type')
    }
  }
};
</script>
<style>
.wraps{
  font-size: 0.4rem;
  margin-top: 0.3rem;
}
.wraps-a{
  text-align: center;
}
.wraps-a a:hover{
  color: orangered;
}
</style>