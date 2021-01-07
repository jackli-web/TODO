// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iconfont from './assets/iconfont.css'
import axios from 'axios'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';

Vue.use(Lazyload);
Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$axios=axios;
// import axios from './axios_instance'
/* eslint-disable no-new */
// 添加响应拦截器

new Vue({
  el: '#app',
  router,
  store:store,
  components: { App },
  template: '<App/>'
})
