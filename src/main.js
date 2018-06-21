// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// vant 
import 'vant/lib/vant-css/base.css'
import 'vant/lib/vant-css/toast.css'
import { Loading } from 'vant'

Vue.use(Loading)

// Loadsh
var _ = require('lodash/core')

import axios from './utils/axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
