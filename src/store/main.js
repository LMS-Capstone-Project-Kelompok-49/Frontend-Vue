import axios from 'axios'
import router from '../router/index'

const state = () => ({
  loginMessage: '',
  isLogin: true,
  token: '',
  transactions: [
    { name: 'ada' }
  ],
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
      const link = 'http://3.95.181.246/auth/login'
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
            } else {
              store.commit('setLoginMessage', 'Login Failed!!')
            }
        })
        .catch((error) => {
          console.log("error Axios");
          console.log(error);
          if(error.response.data){
            store.commit('setLoginMessage', error.response.data.messages)
            store.commit('setLoginMessage', 'Login Failed!!')
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
  },
  checkIsLogin ({state}) {
    if(!state.isLogin){
      router.push({ name: 'LoginPage' })
    }
  },

}

export default {
  state,
  mutations,
  actions
}
