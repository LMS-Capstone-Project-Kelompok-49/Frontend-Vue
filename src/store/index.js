import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import register from './register'
import main from './main'

Vue.use(Vuex)

const persistedDataState = createPersistedState({
  path: [],
})

export default new Vuex.Store({
  plugins: [persistedDataState],
  modules: {
    main: {
      namespaced: true,
      ...main
    },
    register: {
      namespaced: true,
      ...register
    }
  },
})
