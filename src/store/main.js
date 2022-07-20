import axios from 'axios'
import router from '../router/index'

const state = () => ({
  loginMessage: '',
  isLogin: true,
  role: 'User',
  token: '',
  transactions: [
    { name: 'ada' }
  ],
  user: []
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
  },
  setUser (state, payload) {
    state.user = payload
  }
}

const actions = {
  async loginCheck (store, payload) {
    console.log(payload.email);
    try {
      const link = 'https://3.95.181.246/auth/login'
      await axios.post(link,
        {
          email: payload.email,
          password: payload.password
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Accept": "application/json",
            "Content-Type": "application/json",
          }
        })
        .then(Response => {
            console.log(Response)
            if(Response.status === 200){
              alert('Login Berhasil')
              store.commit('setIsLogin', true)
              store.commit('setToken', Response.data.token)
              router.push({ name: 'Home' })
            } else {
              store.commit('setLoginMessage', 'Login Failed but can!!')
            }
        })
        .catch((error) => {
          console.log("error Axios");
          console.log(error);
          store.commit('setLoginMessage', 'Login Failed!!')
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
  },
  checkIsLogin ({state}) {
    if(!state.isLogin){
      router.push({ name: 'LoginPage' })
    }
  },
  async checkUserdata (store) {
    try {
        const link = 'https://3.95.181.246/api/course/';
        await axios.get(link)
                .then(Response => {
                    console.log(Response.status)
                    if(Response.status === 200){
                        store.commit('setUser', Response.data.users)
                    }
                })
                .catch((error) => {
                    console.log("error Axios");
                    console.log(error);
                })
    } catch (error) {
        console.log(error)
        throw error
    }
  }
}

export default {
  state,
  mutations,
  actions
}
