<template>
  <div class="box1s">
    <div class="ofrom">
      <select name="" id="" v-model="type">
        <option value="0">外卖小哥</option>
        <option value="1">普通用户</option>
      </select>
      <div><span>账号: </span><input type="text" v-model="username" /></div>
      <div><span>密码: </span><input type="password" v-model="password" /></div>
      <div class="btn"><button @click="btn">登录</button></div>
      <div class="end">
        <span>是否有账号?</span
        ><a
          href="https://passport.meituan.com/account/unitivesignup?service=www&continue=http%3A%2F%2Fwww.meituan.com%2Faccount%2Fsettoken%3Fcontinue%3Dhttp%253A%252F%252Fwww.meituan.com%252F"
          >没有请注册</a
        >
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      type: "0",
      username: "user",
      password: "123",
    };
  },
  methods: {
    btn() {
      axios({
        url: "/api/login",
        method: "post",
        data: {
          name: this.username,
          pass: this.password,
        },
      }).then((res) => {
        if (res.data.isok) {
        sessionStorage.setItem("type", this.type);
        sessionStorage.setItem("isLogin", "1");
        this.$router.push("/index");
      }
      });
    },
  },
  mounted(){
    // window.onbeforeunload = function(){
    //   sessionStorage.removeItem('type')
    //   sessionStorage.removeItem('isLogin')
    // }
  }
};
</script>
<style>
.box1s {
  width: 7.2rem;
  height: 92vh;
  font-size: 0.3rem;
  text-align: center;
  margin: 0px auto;
}
.btn {
  text-align: center;
}
.btn button {
  font-size: 0.2rem;
  background-color: orangered;
  width: 1rem;
  height: 0.4rem;
  color: white;
  margin-top: 10px;
}
input{
  border: none;
  border: 1px solid grey;
  width: 3rem;
  height: 0.3rem;
  padding-left: 0.2rem;
  border-radius: 15px;
  box-sizing: border-box;
}
select{
  width: 2rem;
  height: 0.3rem;
  padding-left: 0.1rem;
  border: none;
  border: 1px solid grey;
  border-radius: 0.15rem;
}
.box1s span{
  font-size: 0.23rem;
  vertical-align: bottom;
}
.ofrom{
  margin-top: 0.2rem;
  
}
.end span,.end a{
  font-size: 0.2rem;
  vertical-align: bottom;
}
.end a{
  color: red;
}
</style>