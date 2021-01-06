import Vue from 'vue'
import Router from 'vue-router'
import list from '../components/list/list.vue'
import payment from '../components/payment/payment.vue'
import product from '../components/product/product.vue'
import login from '../components/login/login.vue'
import use from '../components/User/user.vue'
Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
     redirect: 'list'
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/use',
      name: 'use',
      component: use
    }
  ]
})
router.beforeEach((to,from,next) => {
  if(to.path ==='/' || to.path==='/login' || to.path === '/register') return next()
  const tokenStr = window.sessionStorage.getItem('username')
  const tokenWord = window.sessionStorage.getItem('password')
  if(!tokenStr && !tokenWord) return next('/login')
  next()
})
export default router
