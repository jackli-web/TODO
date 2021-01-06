import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 0,
        name: '',
        school: '',
        adpass: '',
        goback: [],
        Order: [],
        boosks: {},
    },
    getters: {
        changea: function(state) {
            return state.count++
        },
        changeb: function(state) {
            return state.count * 2
        },
        changegobackinput: function(state) {
            return state.goback[state.goback.length - 1]
        }
    },
    actions: {
        indexsst(context) {
            setInterval(() => {
                context.commit('increment')
            }, 2000)
        }
    },
    mutations: {
        closeOrder(state) {
            state.Order = []
        },
        changebooks(state, obj) {
            state.boosks = obj;
        },
        addOrder2(state, obj) {
            state.Order.forEach(item => {
                if (item.id == obj.id) {
                    item.shuliang = obj.shuliang
                }
            })
        },
        addOrder(state, obj) {
            if (state.Order.length !== 0) {
                var result = state.Order.some(item => {
                    if (item.id == obj.id) {
                        return true;
                    }
                })
                if (result) {
                    state.Order.forEach(item => {
                        if (item.id == obj.id) {
                            item.shuliang += obj.shuliang
                        }
                    })
                } else {
                    state.Order.push(obj)
                }
            } else {
                state.Order.push(obj)
            }
        },
        increment(state) {
            state.count++
        },
        changegoback(state, url) {
            state.goback.push(url)
        },
        change(state) {
            state.count++
        },
        changename(state, newname) {
            state.name = newname
        },
        changeschool(state, newschool) {
            state.school = newschool
        },
        changeadpass(state, newadpass) {
            state.adpass = newadpass
        }
    }
})
export default store