import './assets/css/base.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store/index'
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$http=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
