// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 全局封装组件
import common from './common/index'
// Vue.component('vBack',vBack);
for(let i in common){
  Vue.component(i,common[i])
}
// 全局过滤器
import filter from './filters/index'
for(let i in filter){
  Vue.filter(i,filter[i]);
}
// 引入css样式
import './assets/css/reset.css'
import './assets/js/rem'
import './assets/font/iconfont.css'

Vue.config.productionTip = false 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
