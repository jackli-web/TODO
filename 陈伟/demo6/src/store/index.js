import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // count: 0
    orders:[]
  },
  mutations: {
    // increment (state) {
    //   state.count++
    // }
    addtocart:function(state,obj){
        state.orders.push(obj)
    }
  }
})
export default store