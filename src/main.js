// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// vant 
import 'vant/lib/vant-css/base.css'
import 'vant/lib/vant-css/toast.css'
import { Toast, Lazyload } from 'vant'

Vue.use(Toast)
Vue.use(Lazyload)

// Loadsh
var _ = require('lodash/core')

import axios from './utils/axios'
Vue.prototype.$http = axios

// utils
import docCookies from '@/utils/cookies'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
