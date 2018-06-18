//
// axios封装
//
'use strict'

import axios from 'axios'
import qs from 'qs'

import { BASE_URL } from './env'

axios.defaults.baseURL = BASE_URL
axios.defaults.timeout = 5000
// axios.defaults.withCredentials = true // `withCredentials` 表示跨域请求时是否需要使用凭证

// chack status
// http状态码
function checkStatus(response) {
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response.data
  }

  return {
    status: -404,
    mseeage: '数据请求异常'
  }
}

// chack code
function checkCode(res) {
  // code异常，这里已经包括网络错误，服务器错误，后端抛出的错误，可提示用户
  if (res.status === -404) {
    Toast.fail(res.mseeage)
  }
  if (res.data && (!res.data.success)) {
    Toast.fail(res.data.mseeage)
  }
  return res
}


// 响应拦截
axios.interceptors.response.use(
  response => {
    console.log(response)
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
    if ( localStorage.token ) {
      config.headers.Authorization = localStorage.token
    }

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
    ).catch((error)=>{
      console.log(error)
    })
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
    ).catch((error)=>{
      console.log(error)
    })
  }
}