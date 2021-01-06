/*
 * @Author: your name
 * @Date: 2021-01-04 17:45:44
 * @LastEditTime: 2021-01-06 10:51:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \book_mall\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    state_info: []
  },
  mutations: {
    add_info(state, val) {
      function check(ele) {
        return ele.bookName === val.bookName
      }
      if (state.state_info.some(check)) {
        state.state_info.forEach((element, index) => {
          if (element.bookName === val.bookName) {
            state.state_info[index].count += val.count;
          }
        })
      } else {
        state.state_info.push(val)
      }
    },
    add_count(state, index) {
      state.state_info[index].count++;
    },
    sum_count(state, index) {
      if (state.state_info[index].count > 1) {
        state.state_info[index].count--;
      }
    },
  },
})
export default store
