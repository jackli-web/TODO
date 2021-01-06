import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    // orders: [],
    arr: [],
    arr1: []
  },
  mutations: {
    increment(state, item) {
      // console.log(item);
      item.count++
    },
    outcrement(state, item) {

      if (item.count === 0) {
        item.count = 0
        alert('已经是最少数量了哦')
      } else {
        item.count--
      }
    },
    // addtocart: function (state, obj) {

    //添加购物车：获取书本对象添加到arr数组
    addtocart: function (state, item) {
      //如果arr数组为空，即购物车里没有东西，则直接将获取到的书本对象添加到数组
      if (state.arr.length === 0) {
        state.arr.push(item);
      }
      //否则，
      else {
        //循环当前arr数组，将书本的bookName属性添加到新的arr1数组
        for (let i = 0; i < state.arr.length; i++) {
          const element = state.arr[i];
          //如果arr1数组里没有此bookName，则添加进arr1
          if (state.arr1.indexOf(element.bookName) == -1) {
            state.arr1.push(element.bookName);
          }

        }
        //如arr1中没有传过来的书本名，则作添加购物车操作
        let indexbookName = state.arr1.indexOf(item.bookName);
        if (indexbookName == -1) {
          state.arr.push(item);
        }
        //否则，将书本的数量相加
        else {
          //console.log(bookName);
          state.arr[indexbookName].count += item.count
        }
      }
    }
  }
})
export default store
