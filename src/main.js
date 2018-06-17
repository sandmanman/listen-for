// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// toast
import Toast from 'vant/lib/toast'
import 'vant/lib/vant-css/base.css'
import 'vant/lib/vant-css/toast.css'

// Loadsh
var _ = require('lodash/core')

import AXIOS from './utils/axios'
Vue.prototype.$http = AXIOS

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
