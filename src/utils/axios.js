//
// axios封装
// 参考 https://juejin.im/post/59a22e71518825242c422604
//
'use strict'

import axios from 'axios'
import qs from 'qs'
import router from '../router'

import { BASE_URL } from './env'
import { Toast } from 'vant'

const AXIOS = axios.create()

AXIOS.defaults.baseURL = BASE_URL
AXIOS.defaults.timeout = 5000
// AXIOS.defaults.withCredentials = true // `withCredentials` 表示跨域请求时是否需要使用凭证

// POST请求序列化（添加请求拦截）
AXIOS.interceptors.request.use(
  config => {
    // 发送请求前
    if ( config.method == 'post' ) {
      // 序列化数据
      config.data = qs.stringify(config.data)
      // 如后端能接受json数据，则无需再使用qs序列化
    }

    // 如需鉴权token，则头部要带token
    if ( localStorage.token ) {
      config.headers.Authorization = localStorage.token
    }

    return config
  },
  error => {
    // error 的回调信息,根据具体的回调信息定义提示
    // Toast 定义在了main.js
    Toast.fail(error)
    return Promise.reject( error.data.error.message )
  }
)

// 返回状态判断（添加响应拦截）
AXIOS.interceptors.response.use(
  res => {
    // 对响应的数据要作的
    if (res.data && res.data.code != 200) {
      console.log(res.data.code)
      Toast.fail('数据请求出错')

      return Promise.reject(res.error)
    }
    return res
  },
  error => {
    // 用户登录的时候获得基础信息,比如用户名,token,过期时间戳
    // 存储到localStorage或sessionStorage
    if ( !window.localStorage.getItem('currentUserInfo') ) {
      // 若是接口访问的时候没有发现有鉴权的基础信息,直接返回登录页
      router.push({
        path: '/login'
      })
    } else {
      // 若是有基础信息的情况下,判断时间戳和当前的时间,若是当前的时间大于服务器过期的时间
      // 则返回去登录页重新登录
      let lifeTime = JSON.parse(window.localStorage.getItem('currentUserInfo')).lifeTime * 1000
      let currentTime = new Date().getTime() // 当前时间的时间戳
      console.log(currentTime, lifeTime)
      console.log(currentTime > lifeTime)
      if ( currentTime > lifeTime ) {
        Toast.fail('登录已过期,请重新登录')
        router.push({
          path: '/login'
        })

      } else {
        // 下面是接口回调的satus, 根据不同的status code 显示不同的页面
        if (error.response.status == 403) {
          router.push({
            path: '/error/403'
          })
        }
        if (error.response.status == 500) {
          router.push({
            path: '/error/500'
          })
        }
        if (error.response.status == 502) {
          router.push({
            path: '/error/502'
          });
        }
        if (error.response.status == 404) {
          router.push({
            path: '/error/404'
          })
        }

      }

    } // if else

    // 返回 response 里的错误信息
    return Promise.reject(error)

  } // error
)


export default AXIOS