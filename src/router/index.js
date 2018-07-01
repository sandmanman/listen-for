import Vue from 'vue'
import Router from 'vue-router'

import { getFromLocal } from '@/utils/localStorage'

const Discover = resolve => require(['@/views/discover'], resolve)
const Account = resolve => require(['@/views/account'], resolve)
const Login = resolve => require(['@/views/login'], resolve)

// user
const User = resolve => require(['@/views/user'], resolve)
const UserHome = resolve => require(['@/views/user/home'], resolve)

// 404
const PageNotFound =  resolve => require(['@/views/error/404'], resolve)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Discover,
      name: 'discover',
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
      path: '/user/:id',
      component: User,
      children: [
        {
          path: '',
          name: 'userHome',
          component: UserHome,
          meta: {
            title: '我的主页',
            auth: true
          }
        }
      ]
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: PageNotFound
    }
  ]
})


// 路由拦截
// 需要鉴权,在路由 meta 添加auth: true
router.beforeEach((to, from, next) => {
  if ( to.matched.some(record => record.meta.auth) ) {
    // 判断是否需要登录权限
    if (getFromLocal('CURRENT_USER') !== null) {
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
        query: { redirect: to.fullPath}
      })
    }
  } else {
    next()
  }

})

//
//
router.afterEach(route => {
  // 更改document.title
  let docTitle = route.meta.title
  if (docTitle) {
    document.title = route.meta.title || 'ListenFor'
  }
})

export default router