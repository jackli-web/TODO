// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Qs from 'qs'
import Store from './store/index'
import Vant from 'vant';
import 'vant/lib/index.css';
import element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
var echarts = require('echarts')



Vue.use(element)
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$echarts = echarts
Vue.prototype.Qs = Qs
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store:Store,
  router,
  components: { App },
  template: '<App/>'
})
