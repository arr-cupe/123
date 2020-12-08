import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// import login from '../pages/login'
// import index from '../pages/index'
// import move from '../pages/move'
// import food from '../pages/food'
// import home from '../pages/home'
// import order from '../pages/order'
// import main from '../pages/main'
// import moveDe from '../pages/moveDe'
// import foodDe from '../pages/foodDe'

const login = () => import('../pages/login')
const index = () => import('../pages/index')
const move = () => import('../pages/move')
const food = () => import('../pages/food')
const home = () => import('../pages/home')
const order = () => import('../pages/order')
const main = () => import('../pages/main')
const moveDe = () => import('../pages/moveDe')
const foodDe = () => import('../pages/foodDe')

const router = new Router({
  routes: [
    {
      path: '/index',
      component: index,
      // name: '首页',
      children: [
        {
          path: 'home',
          component: home,
          name: '商品首页',
        },
        {
          path: 'order',
          component: order,
          name: '订单',
        },
        {
          path: 'main',
          component: main,
          name: '我的',
        },
        {
          path: 'index',
          component: home
        },
        {
          path: '',
          redirect: 'home'
        }
      ]
    },
    {
      path: '/login',
      component: login,
      name: '登录',
    },
    {
      path: '/',
      component: login,
      name: '欢迎登陆',
    },
    {
      path: '/move',
      component: move,
      name: '电影',
      beforeEnter(to, from, next) {
        if (to.path == '/move') {
          next();
        }
      }
    },
    {
      path: '/moveDe/:id',
      component: moveDe,
      name: '电影详情',
    },
    {
      path: '/food',
      component: food,
      name: '美食',
      beforeEnter(to, from, next) {
        if (to.path == '/food') {
          next();
        }
      }
    },
    {
      path: '/foodDe/:id',
      component: foodDe,
      name: '美食详情',
    },
    {
      path: '*',
      redirect: 'login'
    },
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  if (to.name == '欢迎登陆' || to.name == '登录') { //判断是否到了登录页
    if (sessionStorage.getItem('isLogin')) { //判断是否登录
      next() //如果登录,进行跳转
    } else { //如果没有登录,还是回到登录页
      next();
    }
  } else {
    if (sessionStorage.getItem('isLogin') == true) {
      next();
    }else{
      next({name:'欢迎登陆'});
    }
  }

})

export default router
