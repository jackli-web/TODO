import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import payment from '@/components/payment'
import products from '@/components/products'
import products3 from '@/components/products3'
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
      path: '/products3',
      name: 'products3',
      component: products3
    },
    {
      path: '/book',
      name: 'book',
      component: book
    }
  ]
})
