import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cart from '@/components/cart'
import products from '@/components/products'
import payment from '@/components/payment'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    }
  ]
})
