import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BookPage from '../components/BookPage.vue'
import PlayOrder from '../components/PlayOrder.vue'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: HelloWorld
        },
        {
            path: '/book',
            component: BookPage
        },
        {
            path: '/buy',
            component: PlayOrder
        }
    ]
})