import Vue from 'vue'
import Vuex from 'Vuex'
//1.安装插件
Vue.use(Vuex)

//2.创建对象
const store = new Vuex.Store({
    state: {

        //这里放全局参数
        orders:[]
    },
    mutations: {
        // 此处用于处理state中数据，存放方法类似vue中的methods
        addtocart:function(state,obj){
            state.orders.push(obj)
        }

    },
    actions: {
        // 此处用于存放异步操作
    },
    getters: {
        // 这里是get方法 
    },
    modules: {
        //模块化，当数据量过大时可采用模块化
    },
})

//3.导出Store独享
export default store