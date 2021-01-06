import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [{
    path: '/',
    redirect: '/goodslist'
  },
  {
    path: '/goodslist',
    component: () => import('@/components/GoodsList.vue'),
    name: 'goodslist',
    meta: {
      title: 'goodslist'
    }
  },
  {
    path: '/goodsdetail',
    component: () => import('@/components/GoodsDetail.vue'),
    name: 'goodsdetail',
    meta: {
      title: 'goodsdetail'
    }
  },
  {
    path: '/goodscart',
    component: () => import('@/components/GoodsCart.vue'),
    name: 'goodscart',
    meta: {
      title: 'goodscart'
    }
  },
]
const router = new Router({
  routes,
  mode: 'history'
})
router.beforeEach((to,from,next)=>{
  document.title = to.meta.title;
 
  next()
})
export default router
