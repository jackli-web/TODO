import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    info:[],
    //存储请求到的数据
    orders:[],
    //添加购物车的数据
    bookitem:{},
    //书籍列表页跳转到详情页面的数据

  },
  mutations: {
    //添加订单的方法
    add(state,obj){
      let a =state.orders.findIndex((val)=>{
       return val.id == obj.id
      });
      if(a == -1){
        state.orders.push(obj);
      }else{
        state.orders[a].count = state.orders[a].count+obj.count;
      }
      console.log('a',a)
      // state.orders.push(obj);
      console.log(state.orders)
    },
    //保存详细页面的数据的方法
    adddetail(state,e){
      state.bookitem=e
    },
    addcount(state,e){
      let a =state.orders.findIndex((val)=>{
        return val.id == e.id
       });
      state.orders[a].count = e.count
    },

  },
  actions: {

  },
  getters: {
    total(state){
      let a = 0 ;
      for(let i=0 ; i<state.orders.length ; i++){
        a = a + state.orders[i].price*state.orders[i].count
      }
      return a 
    },

  }
})
export default store
