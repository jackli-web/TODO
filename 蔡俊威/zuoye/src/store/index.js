import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        current: '',
        count: 1,
        arrs: []
    },
    mutations: {
        increment(state) {
            state.count++
        },
        increment1(state) {
            state.count--
        }
    }
})

export default store