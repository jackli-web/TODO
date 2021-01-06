// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'
import store from './store'
Vue.prototype.$axios=axios;
import Vant from 'vant';
import 'vant/lib/index.css';
import axios from './axios_instance'
Vue.use(Vant);
Vue.config.productionTip = false

/* eslint-disable no-new */
const vue_instance =  new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
export default vue_instance
