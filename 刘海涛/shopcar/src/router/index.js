import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import products from '@/components/products'
import shcar from '@/components/shcar'
import book from '@/components/book'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/products',
      name: 'products',
      component: products,
    },
    {
      path: '/shcar',
      name: 'shcar',
      component: shcar,
    },
  ]
})
export default router
