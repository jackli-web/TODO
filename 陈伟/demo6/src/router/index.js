import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import products from '@/components/products'
import payment from '@/components/payment'
import book from '@/components/book'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/products',
      name: 'products',
      component: products
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
  ]
})
