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
  user: {
    id: 1,
    name: 'Alerra',
    email: 'altera@alterra.id',
    courses: [
      {
        id: 1,
        title: 'Belajar Web',
        mentor: {
          image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
          name: 'amidillah Ajie, S.Si, M.T',
          email: 'amdajie@gmail.com'
        },
        members: [
          {
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
            name: 'Sharon Almambera',
            email: 'sharon@gmail.com'
          },
          {
            image: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            name: 'Mark stomper',
            email: 'mark@gmail.com'
          },
          {
            image: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            name: 'Daniel khliev',
            email: 'daniel@gmail.com'
          },
        ],
        materials: [
          {
            id: 10,
            title: 'Fundamental Web',
            date: '29 April 2022, 08:57 AM',
            desc: "UX (User Experience) adalah proses mendesain untuk mengembangkan kualitas produk berdasarkan human-first approach.Yang perlu diingat adalah, UX bukan tentang desain visual; namun terkait kemudahan, relevansi, dan efisiensi pemakaian suatu produk oleh user (pengguna produk). Desainer akan memikirkan keinginan dan kebutuhan user saat menggunakan produk yang diciptakan. Oh iya, penilaian pengalaman user mencakup seluruh aspek interaksi. Mulai dari aspek interaksi dengan perusahaan, layanan, struktur desain, hingga navigasi penggunaan produk. Jadi, UX bukan sekedar berpatokan pada ulasan dan penilaian dari user.",
            type: 1,
            link: 'https://www.youtube.com/embed/NbcrLW1BsAA',
            message: "Selamat pagi semuanya, untuk hari ini kita melakukan perkuliahan secara Asynchronous ya. Jngan Lupa selalu di ulang."
          },
          {
            id: 11,
            title: 'Fundamental Hosting',
            date: '29 April 2022, 08:57 AM',
            desc: "lorem",
            type: 2,
            link: 'https://docs.google.com/presentation/d/e/2PACX-1vRGGAeTiHu3jSXkHhntc6nhc2TIKyxw8fKE4SivXHGwZBwHwNRqirGJ5zY6IatvBOCCInK0BIGbtK9b/embed?start=false&loop=false&delayms=3000',
            message: "Selamat pagi semuanya, untuk hari ini kita melakukan perkuliahan secara Asynchronous ya."
          },
        ],
        assignments: [
          {
            id: 1,
            title: 'UI & UX Design Mobile App',
            type: 1,
            due: 'April 30, 2022 11:59 PM',
            instruction :'Tugas task 1 materi mobile app, tugas mahasiswa sekalian adalah cari satu buah permasalahan pada mobile app dan analisasa apa permsalahannya. Setelah itu coba lakukan redesign dari mobile app tersebut. Format Pengumpulan terlampir di bawah ini',
            references: [
              {
                title: 'UIUX.DW.116.docx'
              },
              {
                title: 'UIUX.DW.117.docx'
              },
              {
                title: 'UIUX.DW.118.docx'
              }
            ],
            link: ''
          },
          {
            id: 2,
            title: 'Quiz Practice Fundamental UI UX',
            type: 2,
            due: 'April 30, 2022 11:59 PM',
            instruction :'Quiz weekly task tentang materi fundamental ui ux',
            references: [],
            link: 'https://docs.google.com/forms/d/e/1FAIpQLSeJqFbHp7CPM4pUY1oDlnyBr0xBzCH_CgSFg2FgtVafvwxwwg/viewform?usp=sf_link'
          },
        ],
        progess: '10%'
      }
    ],
    certificates: [
      { src: 'https://images.unsplash.com/photo-1587483169554-f9bdd1dc9fe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80' },
      { src: 'https://images.unsplash.com/photo-1568057373189-8bf0cf6179e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
      { src: 'https://images.unsplash.com/photo-1568741049635-59b0c30bf2de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
      { src: 'https://images.unsplash.com/photo-1565893181327-cd3a5d5752b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1066&q=80' },
      { src: 'https://images.unsplash.com/photo-1585508506884-3bc875d5024c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' },
      { src: 'https://images.unsplash.com/photo-1593968007460-f5fee5b74f63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80' },
    ]
  }
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
