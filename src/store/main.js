import axios from 'axios'
import router from '../router/index'

const state = () => ({
  loginMessage: '',
  isLogin: false,
  token: ''
})

const mutations = {
  setLoginMessage (state, param) {
    state.loginMessage = param
  },
  setIsLogin (state, param) {
    state.isLogin = param
  },
  setToken (state, param) {
    state.token = param
  }
}

const actions = {
  async loginCheck (store, payload) {
    try {
      const link = 'http://54.236.5.123/auth/login'
      await axios.post(link,
        {
          email: payload.email,
          password: payload.password
        })
        .then(Response => {
            console.log(Response)
            if(Response.status === 200){
              alert('Login Berhasil')
              store.commit('setIsLogin', true)
              store.commit('setToken', Response.data.token)
              router.push({ name: 'Home' })
            }
        })
        .catch((error) => {
          console.log("error Axios");
          console.log(error);
          if(error.response.data){
            store.commit('setLoginMessage', error.response.data.messages)
          }
        })

    } catch (error) {
      console.log(error)
      throw error
    }
  },
  emptyLoginMessage (store) {
    store.commit('setLoginMessage', '')
  },
  signOut (store) {
    store.commit('setIsLogin', false)
    router.push({ name: 'Home' })
  }
}

export default {
  state,
  mutations,
  actions
}
