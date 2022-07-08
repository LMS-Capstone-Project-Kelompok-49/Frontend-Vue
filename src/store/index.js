import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import register from './register'
import main from './main'
import home from './home'

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
    home: {
      namespaced: true,
      ...home
    },
    register: {
      namespaced: true,
      ...register
    }
  },
})
