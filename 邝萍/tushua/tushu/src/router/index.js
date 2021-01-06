import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld';
import booklist from '@/components/booklist';
import bookdetail from '@/components/bookdetail';
import order from '@/components/order';
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/',
      name: 'booklist',
      component: booklist
    },{
      path:'/bookdetail',
      name:'bookdetail',
      component:bookdetail
    },{
      path: '/order',
      name: 'order',
      component: order
    },
    
  ]
})
