import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    count:0,
    userInfo:{
      name:"",
      tel:"",
      token:""//用户token
    }
  },
  mutations:{
    increment: state => state.count++,
    setUserInfo(state,obj){
      let data = state.userInfo;
      data.name = obj.name;
      data.tel = obj.tel;
    },
  },
  strict: true,
  plugins: []
})
