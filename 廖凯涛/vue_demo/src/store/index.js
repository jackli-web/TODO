import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // price: '',
        current: '',
        // count: 0
        orders: []
    },
    mutations: {
        increment(state) {
            state.count++
        },
        increment(state) {
            state.count--
        }
    }
})
export default store