import Vue from 'vue'
import Router from 'vue-router'

const Home = r => require.ensure([], () => r(require('@/views/home')), 'home')

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

// 路由拦截
// 需要鉴权,在路由 meta 添加auth: true
router.beforeEach((to, from, next) => {
  if ( to.matched.some(res => res.meta.auth) ) {
    // 判断是否需要登录权限
    if (window.localStorage.getItem('currentUserInfo')) {
      // 判断是否登录
      let lifeTime = JSON.parse(window.localStorage.getItem('currentUserInfo')).lifeTime * 1000
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