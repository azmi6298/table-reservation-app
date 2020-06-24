import Vuex from 'vuex'
import Vue from 'vue'
import orders from './modules/orders'

// load vuex
Vue.use(Vuex)

// create a store
export default new Vuex.Store({
  modules: {
    orders 
  }
})