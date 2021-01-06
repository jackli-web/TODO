import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import bookpage from '@/components/bookpage'
import placeorder from '@/components/placeorder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bookpage',
      name: 'bookpage',
      component: bookpage
    },
    {
      path: '/placeorder',
      name: 'placeorder',
      component: placeorder
    }
  ]
})
