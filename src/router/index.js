import Vue from 'vue'
import Router from 'vue-router'

import { Toast } from 'vant'

const Discover = resolve => require(['@/views/discover'], resolve)
const Account = resolve => require(['@/views/account'], resolve)
const Login = resolve => require(['@/views/login'], resolve)

// 404
const PageNotFound =  resolve => require(['@/views/error/404'], resolve)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/discover'
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover,
      meta: {
        title: '发现'
      }
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      meta: {
        title: '账号'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: '手机号登录'
      }
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: PageNotFound
    }
  ]
})


// 路由拦截
// 需要鉴权,在路由 meta 添加requestAuth: true
router.beforeEach((to, from, next) => {
  if ( to.meta.requestAuth ) {
    // 判断是否需要登录权限
    if (window.localStorage.getItem('CURRENT_USER')) {
      console.log( 'currentUser:', JSON.parse(window.localStorage.getItem('CURRENT_USER')) ) 
      next()
      // 登录过期
      // let expirationTime = JSON.parse(window.localStorage.getItem('CURRENT_USER')).expirationTime * 1000
      // let currentTime = new Date().getTime() // 当前时间的时间戳
      // if (currentTime < expirationTime) {
      //   next()
      // } else {
      //   window.localStorage.removeItem('CURRENT_USER')
      //   Toast.fail('登录已过期,请重新登录')

      //   next({
      //     path: '/login',
      //     query: { redirect: to.fullPath }
      //   })
      // }
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    next()
  }

})

//
//
router.afterEach((route) => {
  // 更改document.title
  let docTitle = route.meta.title
  if (docTitle) {
      document.title = route.meta.title
  }
})

export default router