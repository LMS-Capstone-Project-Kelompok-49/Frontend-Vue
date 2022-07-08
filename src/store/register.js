import axios from 'axios'
import router from '../router/index'

const state = () => ({
  error: ''
})

const mutations = {
  setInfo (state, param) {
    state.error = param
  },
}

const actions = {
  async registerPost (store, payload) {
    console.log(payload);
    const link = 'http://3.95.181.246/auth/register'
    await axios.post(link,
    {
      name: payload.name,
      email: payload.email,
      password: payload.password
    })
    .then(Response => {
        console.log(Response)
        if(Response.status === 201){
          alert('Register Berhasil')
          store.commit('setInfo', '')
          router.push({ name: 'LoginPage' })
        }
    })
    .catch((error) => {
        console.log("error Axios");
        console.log(error);
        if(error.response){
          store.commit('setInfo', error.response.data.messages)
        }
    })
  },
  emptyErrorMessage (store) {
    store.commit('setInfo', '')
  }
}

export default {
  state,
  mutations,
  actions
}
