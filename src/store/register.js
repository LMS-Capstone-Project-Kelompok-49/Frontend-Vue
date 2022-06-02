import axios from 'axios'
import router from '../router/index'

const state = () => ({
  infoResgiter: [],
  error: ''
})

const mutations = {
  setInfoRegister (state, object) {
    state.infoResgiter = object
  },
  setInfo (state, param) {
    state.error = param
  },
}

const actions = {
  async registerPost (store, payload) {
    console.log(payload);
    const link = 'http://ec2-54-242-195-218.compute-1.amazonaws.com/auth/register'
    await axios.post(link,
    {
        name: "lawas",
        email: payload.email,
        password: payload.password
    })
    .then(Response => {
        console.log(Response)
        if(Response.status === 201){
            alert('Register Berhasil')
            store.commit('setInfo', '')
            router.push({ name: 'Home' })
        }
    })
    .catch((error) => {
        console.log("error Axios");
        console.log(error);
        if(error.response){
            store.commit('setInfo', error.response.data.messages)
        }
    })

  }
}

export default {
  state,
  mutations,
  actions
}
