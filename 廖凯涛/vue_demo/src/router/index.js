import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shop from '@/components/shop'
import shopzj from '@/components/shopzj'
import headzj from '@/components/headzj'
import head from '@/components/head'
import tabbarzj from '@/components/tabbarzj'
import yulan from '@/components/yulan'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/HelloWorld',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/shop',
            name: 'shop',
            component: shop
        },
        {
            path: '/yulan',
            name: 'yulan',
            component: yulan
        }, {
            path: '/tabbarzj',
            name: 'tabbarzj',
            component: tabbarzj
        }, {
            path: '/headzj',
            name: 'headzj',
            component: headzj
        }, {
            path: '/shopzj',
            name: 'shopzj',
            component: shopzj
        },
        {
            path: '/',
            name: 'head',
            component: head
        }
    ]
})