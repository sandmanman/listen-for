//
// axios封装
//
'use strict'

import axios from 'axios'
import qs from 'qs'
import { Toast } from 'vant'
import { BASE_URL } from './env'
import { log } from '@/utils'

axios.defaults.baseURL = BASE_URL
axios.defaults.timeout = 5000
axios.defaults.withCredentials = true // `withCredentials` 表示跨域请求时是否需要使用凭证

// chack status
// http状态码
function checkStatus(response) {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response
  }

  return {
    status: 417,
    message: '加载出错啦，刷新页面重试'
  }
}

// chack code
function checkCode(res) {
  // code异常,接口返回的错误
  if (res.status === 417) {
    Toast.fail(res.message)
  }

  // 后端抛出的错误（根据具体项目接口返回的数据而定）
  if ( res.data && res.data.code !== 200 ) {
    log(res.status, res.data)
    Toast.fail(res.data.msg)
  }

  return res
}


// 响应拦截
axios.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.resolve(error.response)
  }
)

// POST请求序列化/请求拦截
axios.interceptors.request.use(
  config => {
    // 发送请求前
    if ( config.method == 'POST' ) {
      // 序列化数据
      config.data = qs.stringify(config.data)
      // 如后端能接受json数据，则无需再使用qs序列化
    }

    // 如需鉴权token，则头部要带token
    // if ( localStorage.token ) {
    //   config.headers.Authorization = localStorage.token
    // }

    return config
  },
  error => {
    return Promise.reject( error )
  }
)

export default {
  get(url, params) {
    return axios({
      method: 'GET',
      url,
      params,
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  },
  post(url, data) {
    return axios({
      method: 'POST',
      url,
      data: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    }).then(
      (response) => {
        return checkStatus(response)
      }
    ).then(
      (res) => {
        return checkCode(res)
      }
    )
  }
}