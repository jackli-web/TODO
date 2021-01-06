import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import vant from 'vant'
import './assets/font/iconfont.css'
import 'vant/lib/index.css'


// Vue.use(Swipe);
// Vue.use(SwipeItem);
Vue.use(vant)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
