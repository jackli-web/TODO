import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import son from '@/components/son'
import cart from '@/components/cart'
import payment from '@/components/payment'
import products from '@/components/products'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    {
      path: '/son',
      name: 'son',
      component: son
    },
    {
      path: '/',
      name: 'cart',
      component: cart,
      meta: {
        keepAlive: true,
        requireAuth111: false
      }
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment,
      meta: {
        keepAlive: true,
        requireAuth111: false
      }
    },
    {
      path: '/products',
      name: 'products',
      component: products,
      meta: {
        keepAlive: false,
        requireAuth111: false
      }
    }
  ]
})
