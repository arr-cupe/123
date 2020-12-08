<template>
  <div class="oboxs">
    <router-link
      :to="'/foodDe/' + item.foodId"
      v-for="item in arr"
      :key="item.foodId"
    >
      <p>名称:{{item.name}}</p>
      <p>价格:￥{{ item.price | filterPrice }}</p>
    </router-link>
  </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      arr: [],
    };
  },
  methods: {
    send() {
      this.$router.replace("/food/foodDe");
    },
  },
  mounted() {
    axios({
      url: "/api/foodList",
      method: "get",
    }).then((res) => {
      // console.log(res.data.data);
      this.arr = res.data.data;
    });
  },
};
</script>
<style>
.oboxs {
  font-size: 0.35rem;
  width: 7.2rem;
  margin: 0px auto;
  height: 92vh;
}
.oboxs a{
  display: block;
  font-size: 0.35rem;
  width: 4.5rem;
  margin-bottom: 10px;
  margin: 30px auto;
  box-shadow: 0px 0px 5px 5px grey;
  padding: 0.2rem;
}
</style>