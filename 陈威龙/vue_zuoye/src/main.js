// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Grid, GridItem, Tabbar, TabbarItem,NavBar,Swipe, SwipeItem,Lazyload,Card,Icon,GoodsAction, GoodsActionIcon, GoodsActionButton   } from 'vant';
import store from './store'



Vue.prototype.$store = store
Vue.use(GoodsAction);
Vue.use(GoodsActionButton);
Vue.use(GoodsActionIcon);

Vue.use(Icon);
Vue.use(Card);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem); 
Vue.use(Grid);
Vue.use(GridItem);
Vue.config.productionTip = false
Vue.prototype.$axios=axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
