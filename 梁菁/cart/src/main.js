import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/css/global.css'
import './assets/css/icon.css'
Vue.config.productionTip = false
Vue.use(Vant);
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
