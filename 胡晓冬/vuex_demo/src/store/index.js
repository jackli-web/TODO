import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);
Vuex.Store.prototype.$axios = axios;

const store = new Vuex.Store({
  state: {
    count: 0,
    info: [],
    info1: [],
    arr: [],
    arr1: []
  },
  getters: {
    doublecount: function(state) {
      return state.count * 2;
    },
    doubuleadd1: function(state, getters) {
      return getters.doublecount + 1;
    }
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    info(state) {
      this.$axios({
        url: "/api/books",
        method: "get"
      }).then(res => {
        console.log(res);
        state.info = res.data.info;
      });
    },
    //添加购物车：获取书本对象添加到arr数组
    arr(state, item) {
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
          if(state.arr1.indexOf(element.bookName)==-1){
            state.arr1.push(element.bookName);
          }
          
        }
        //如arr1中没有传过来的书本名，则作添加购物车操作
        let bookName = state.arr1.indexOf(item.bookName);
        if (bookName == -1) {
          state.arr.push(item);
        } 
        //否则，将书本的数量相加
        else {
          //console.log(bookName);
           state.arr[bookName].count+=item.count
        }
      }
    },
    //更新arr数组
    changearr(state,obj){
      let i= state.arr.indexOf(obj.item);
      let j = state.arr1.indexOf(obj.item.bookName);
      //如果obj.num小于0就移除obj.item对象；
      if(obj.num<0){
        state.arr.splice(i, 1);
        state.arr1.splice(j, 1);
      }
      //否则将obj.num赋值给obj.item对象的count属性
      else{
        state.arr[i].count=obj.num
      }
      
    },
  },
  actions: {
    incrementr(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 1000);
    }
  }
});
export default store;
