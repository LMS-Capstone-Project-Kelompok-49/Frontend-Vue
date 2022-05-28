import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const persistedDataState = createPersistedState({
  path: [],
})

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
  },
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
})
