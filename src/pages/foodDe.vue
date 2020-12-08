<template>
  <div class="oboxes">
    <div>
        <p>名称:{{obj.name}}</p>
        <p v-if="obj.price">价格:￥{{obj.price | filterPrice}}</p>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      obj:{},
    };
  },
  mounted() {
      console.log(this.$route.params.id);
      var id = this.$route.params.id
    axios({
        url:'/api/getFoodDetail',
        method:'get',
        params:{
            foodId:id
        }
    }).then(res=>{
        console.log(res.data.detail);
        this.obj = res.data.detail;
    })
  },
};
</script>
<style>
.oboxes {
  width: 7.2rem;
  height: 92vh;
  font-size: 0.35rem;
  margin: 0px auto;
}
.oboxes div{
  font-size: 0.35rem;
  width: 4.5rem;
  margin-bottom: 10px;
  margin: 30px auto;
  box-shadow: 0px 0px 5px 5px grey;
  padding: 0.2rem;
}
</style>