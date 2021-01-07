import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import xq from '@/components/xq'
import car from '@/components/car'
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/xq',
            name: 'xq',
            component: xq
        },
        {
            path: '/car',
            name: 'car',
            component: car
        }
    ]
})