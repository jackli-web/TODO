import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import deall from '@/components/deall'
import jieguo from '@/components/jieguo'
import WelCome from '@/components/Welcome'
import list from '@/components/list'
import xinwen from '@/components/xinwen'
import xinwenxq from '@/components/xinwenxq'
import fenji from '@/components/fenji'
import fenjia from '@/components/tree/a.vue'
import fenjib from '@/components/tree/b.vue'
import fenjic from '@/components/tree/c.vue'
import error from '@/components/error'
import ceil from '@/components/ceil'
import shouye from '../components/shopchat/shouye.vue'
import Table from '../components/table/HelloWorld.vue'
import lists from '../components/synthesis/list.vue'
import main from '../components/synthesis/main.vue'
import shopchat from '../components/synthesis/shopchat.vue'
import bookshop from '../components/synthesis/bookshop.vue'

Vue.use(Router)

const router = new Router({
    routes: [{
            path: '/',
            name: 'WelCome',
            component: WelCome
        },
        {
            path: '/table',
            name: 'table',
            component: Table
        },
        {
            path: '/books',
            name: 'books',
            component: bookshop,
            redirect: '/lists',
            children: [{
                    path: '/lists',
                    name: 'lists',
                    component: lists
                },
                {
                    path: '/main',
                    name: 'main',
                    component: main
                },
                {
                    path: '/shopchat',
                    name: 'shopchat',
                    component: shopchat
                },
            ]
        },
        {
            path: '/ceil',
            name: 'ceil',
            component: ceil
        },
        {
            path: '/fenji',
            name: 'fenji',
            redirect: '/fenjia',
            component: fenji,
            children: [{
                path: '/fenjia',
                name: 'fenjia',
                component: fenjia
            }, {
                path: '/fenjib',
                name: 'fenjib',
                component: fenjib
            }, {
                path: '/fenjic',
                name: 'fenjic',
                component: fenjic
            }]
        },
        {
            path: '/xinwen',
            component: xinwen,
            redirect: 'list',
            children: [{
                    path: '/list',
                    name: 'list',
                    component: list
                },
                {
                    path: '/xinwenxq',
                    name: 'xinwenxq',
                    component: xinwenxq
                },
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: HelloWorld
        },
        {
            path: '/deall',
            name: 'deall',
            component: deall,
        },
        {
            path: '/jieguo',
            name: 'jieguo',
            component: jieguo,
        },
        {
            path: '/shouye',
            name: 'shouye',
            component: shouye,
        },
        {
            path: '/*',
            name: 'error',
            component: error,
        },
    ]
})
router.beforeEach((to, from, next) => {
    // if(to.meta.flag){
    //   next()
    // }else{
    //   alert("这个网站存在安全隐患！谨慎访问！")
    //   next()
    // }
    next()

})


export default router