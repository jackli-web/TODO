import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // count: 1,
        item: {},
        arr: []
    },
    mutations: {
        /* increment(state) {
            state.count++
        }, */
        updata(state, obj) {
            console.log(obj);
            console.log(state.arr);
            if (state.arr.length == 0) {
                state.arr.push(obj)
            }
            else {
                const fag = state.arr.some(e => {
                    if (e.item.id == obj.item.id) {
                        return true
                    }
                })
                if (fag) {
                    state.arr.forEach(ea => {
                        if (ea.item.id == obj.item.id) {
                            ea.count = obj.count
                        }
                    })
                }
                else {
                    state.arr.push(obj)
                }
            }
        }
    }
})
export default store