import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        storeinfo: '',
        storenumber: 0,
        storearr: []
    },
    mutations: {
        increment(state) {
            state.count++
        },
        info(state, str) {
            state.storeinfo = str
        },
        pronumber(state, str) {
            state.storenumber = str
        },
        bookarr(state, str) {
            var arr = state.storenumber
            for(let i=0;i<arr.length;i++){
                if(arr[i].id!=str.id){
                    arr.push(str)
                }
            }
            // state.storenumber = str
        }
    }
})

export default store