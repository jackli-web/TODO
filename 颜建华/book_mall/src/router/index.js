/*
 * @Author: your name
 * @Date: 2021-01-03 14:01:12
 * @LastEditTime: 2021-01-06 10:10:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \book_mall\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import book_list from '@/components/book_list'
import book_part from '@/components/book_part'
import shop_cart from '@/components/shop_cart'
import order_form from '@/components/order_form'

Vue.use(Router)

export default new Router({
  routes: [ 
    {
      path: '/',
      name: 'book_list',
      component: book_list,
      meta:{
        keepAlive:false,
      }
    },
    {
      path: '/book_part',
      name: 'book_part',
      component: book_part,
      meta:{
        keepAlive:true,
      }
    },
    {
      path: '/shop_cart',
      name: 'shop_cart',
      component: shop_cart,
      meta:{
        keepAlive:false,
      }
    },
  ]
})
