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
    addPackageList1(state,items){
      state.list=items;
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
    getPackageList1({commit}){
      axios.get(`http://localhost:8888/packages?status=1`)
             .then(response => {
                 console.log(response);
                 commit("addPackageList1",response.data)
              })
    }
  }
})
