import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
      count: []
    },
    getters: {

    },
    mutations: {
      storecount(state,str){
        state.count.push(str)
        console.log(str)
      }
    },
    actions: {
       
    }
  })
export default store