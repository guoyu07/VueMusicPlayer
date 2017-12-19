/**
 * Created by Administrator on 2017/12/18 0018.
 */
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store =new Vuex.Store({
  //定义状态
  state:{
    author:["kiwis"]
  },
  mutations:{
    addAuthor(state,author){
      state.author.push(author);
    }
  }
})
export default store
