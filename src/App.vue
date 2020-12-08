<template>
  <div id="app">
    <p style="text-align: center; font-size: 0.3rem;width:7.2rem;margin:0px auto;overflow:hidden">
      <v-back></v-back>
      <span class="ospan">{{ this.$route.name }}</span>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ospan{
  display: block;
  float: left;
  text-align: center;
  width: 5.3rem;
}
</style>
