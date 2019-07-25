import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list:[
        
    ],
  },
  mutations: {
    addPackageList(state,items){
      state.list.push(...items);
    },
  },
  actions: {
    getPackageList({commit}){
      axios.get('http://localhost:8888/packages')
             .then(response => {
                 console.log(response);
                 commit("addPackageList",response.data)
              })
      },
   }
})
