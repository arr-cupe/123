<template>
  <div class="boxos">
    <div class="details">
      <p class="myimg"><img :src="obj.img" alt="" /></p>
      <p>电影名字:{{ obj.name }}</p>
      <p v-if="obj.price">电影票价格:￥{{ obj.price | filterPrice }}</p>
      <p>开始时间:{{ obj.time | filterTime}}</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { reqs } from "../utir/requires";
export default {
  components: {},
  data() {
    return {
      obj: {},
    };
  },
  mounted() {
    // console.log(this.$route.params.id);
    let id = this.$route.params.id;
    // axios({
    //   url: "/api/getMovieDetail",
    //   method: "get",
    //   params:{
    //       id:id
    //   }
    // })
    reqs("/api/getMovieDetail", { id: id }).then((res) => {
      this.obj = res.data.detail;
    });
  },
};
</script>
<style scope>
.boxos {
  width: 7.2rem;
  /* height: vh; */
  font-size: 0.3rem;
  margin: 0px auto;
}
.myimg{
  text-align: center;
  padding-top: 5px;
}
.myimg img {
  width: 4rem;
  height: 5rem;
}
.details{
  width: 4.3rem;
  margin: 7px auto;
  box-shadow: 0px 0px 5px 5px grey;
  padding: 11px;
}
.details p:not(.myimg){
  width: 3.8rem;
  font-size: 0.35rem;
  margin-top: 0.1rem;
  margin-left: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>