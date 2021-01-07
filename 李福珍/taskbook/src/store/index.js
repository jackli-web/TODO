import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // state里面放全局参数
  state: {
    // count: 0
    orders:[],
    arr:[],
    receive:{},
  },
  mutations: {
//这里是set方法
    // increment (state) {
    //   state.count++
    // }
    self(state,obj){
      state.receive=obj;
    },
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
    },

  },
  // 全局
  getters:{
//这里是get方法
    whole(state){
      var total=0;
      for(var i=0;i<state.orders.length;i++){
        let all=state.orders[i].count*state.orders[i].price;
        total+=all;
      }
      return total

    }


  }
})
export default store
