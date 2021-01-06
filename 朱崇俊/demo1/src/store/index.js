import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        mmy: '',
        num: 1,

        arrs: []
    },
    mutations: {
        add(state) {
            state.num++
        },
        sub(state) {
            state.num--
        }
    }
})
export default store