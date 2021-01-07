import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // count: 0
    orders:[],
    arr:[]
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }

    addtocart:function(state,obj){
      // state.orders.push(obj)
      if (state.orders.length === 0) {
        state.orders.push(obj);
      }
      //否则，
      else {
        //循环当前orders数组，将书本的bookName属性添加到新的arr1数组
        for (let i = 0; i < state.orders.length; i++) {
          const element = state.orders[i];
          //如果arr数组里没有此bookName，则添加进arr1
          if(state.arr.indexOf(element.bookName)==-1){
            state.arr.push(element.bookName);
          }

        }
        //如arr中没有传过来的书本名，则作添加购物车操作
        let bookName = state.arr.indexOf(obj.bookName);
        if (bookName == -1) {
          state.orders.push(obj);
        }
        //否则，将书本的数量相加
        else {
          //console.log(bookName);
          state.orders[bookName].count+=obj.count
        }
      }
    }
  }
})
export default store
