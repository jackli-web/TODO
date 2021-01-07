import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import sun from '@/components/sun'
import sun1 from '@/components/sun1'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sun',
      name: 'sun',
      component: sun
    },
    {
      path: '/sun1',
      name: 'sun1',
      component: sun1
    },

  ]
})
