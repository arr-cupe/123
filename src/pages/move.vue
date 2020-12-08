<template>
  <div class="box3">
    <router-view></router-view>
    <router-link :to="'/moveDe/' + item.id" v-for="item in arr" :key="item.id">
      <p>名称:{{ item.name }}</p>
      <p v-if='item.price'>价格:￥{{ item.price | filterPrice }}</p>
      <p class="myp">{{ item.time | filterTime }}上映</p>
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
import { req } from "../utir/requires";
export default {
  data() {
    return {
      arr: [],
    };
  },
  components: {},
  methods: {},
  mounted() {
    req("/api/movie").then((res) => {
      console.log(res.data.data);
      this.arr = res.data.data;
    });
  },
};
</script>
<style>
.box3 {
  font-size: 0.5rem;
  width: 7.2rem;
  height: 88vh;
}
.box3 a{
  display: block;
  font-size: 0.35rem;
  width: 4.5rem;
  margin-bottom: 10px;
  margin: 30px auto;
  box-shadow: 0px 0px 5px 5px grey;
  padding: 0.2rem;
}
.myp{
  color: red;
}
</style>