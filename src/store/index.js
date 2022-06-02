import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import register from './register'

Vue.use(Vuex)

const persistedDataState = createPersistedState({
  path: [],
})

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    register: {
      namespaced: true,
      ...register
    }
  },
})
