import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import son from '@/components/son'
import xiangqing from '@/components/xiangqing'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/son',
      name: 'son',
      component: son
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
   
  ]
})
