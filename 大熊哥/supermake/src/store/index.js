import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
      state: {
        currentItem: {},
        currentinfo: []
      },
      mutations: {
        showItem(state, item) {
          state.currentItem = item
        },
        showinfo(state, obj) {
          if (state.currentinfo.length == 0) {
            state.currentinfo.push(obj)
          } else {
            var fag = state.currentinfo.some(e1 => {
              if (e1.id == obj.id) {
                return true
              }
            })
             if(fag){
              state.currentinfo.forEach(item => {
                if (item.id == obj.id) {
                  item.count = obj.count
                }
             })
          }else {
            state.currentinfo.push(obj)
          }

        }

      }
    }
    })
      export default store
