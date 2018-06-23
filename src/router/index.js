import Vue from 'vue'
import Router from 'vue-router'

const Discover = r => require.ensure([], () => r(require('@/views/discover')), 'discover')
const Account = r => require.ensure([], () => r(require('@/views/account')), 'account')
const Login = r => require.ensure([], () => r(require('@/views/account/login')), 'login')
const LoginMobile = r => require.ensure([], () => r(require('@/views/account/login-mobile')), 'loginMobile')

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
      component: Discover
    },
    {
      path: '/account',
      name: 'account',
      component: Account
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/login-mobile',
      name: 'loginMobile',
      component: LoginMobile
    }
  ]
})

// 路由拦截
// 需要鉴权,在路由 meta 添加auth: true
router.beforeEach((to, from, next) => {
  if ( to.matched.some(res => res.meta.auth) ) {
    // 判断是否需要登录权限
    if (window.localStorage.getItem('currentUser')) {
      // 判断是否登录
      let lifeTime = JSON.parse(window.localStorage.getItem('currentUser')).lifeTime * 1000
      let currentTime = new Date().getTime() // 当前时间的时间戳
      if (currentTime < lifeTime) {
        next()
      } else {
        Toast.fail('登录已过期,请重新登录')

        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      }
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

export default router