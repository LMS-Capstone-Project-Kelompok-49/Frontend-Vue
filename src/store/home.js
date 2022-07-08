import axios from 'axios'

const state = () => ({
  courses: [],
  typeCourses: [],
  activeType: '',
  info: '',
  course: [],
  courseID: '',
})

const mutations = {
  setCourses (state, param) {
    state.courses = param
  },
  setTypeCourses (state, param) {
    state.typeCourses = param
  },
  setInfo (state, param) {
    state.info = param
  },
  setActiveType (state, param) {
    state.activeType = param
  },
  setDetailId (state, param) {
    state.courseID = param
  },
  setDetailCourse (state, param) {
    state.course = param
  }
}

const actions = {
    async getAllCourses (store) {
        try {
            const link = 'http://3.95.181.246/api/course/all'
            await axios.get(link)
                .then(Response => {
                    console.log(Response.status)
                    if(Response.status === 200){
                        store.commit('setCourses', Response.data.users)
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
    },
    async getAllTypeCourses (store) {
        try {
            const link = 'http://3.95.181.246/api/type_course'
            await axios.get(link)
                .then(Response => {
                    console.log(Response.status)
                    if(Response.status === 200){
                        store.commit('setTypeCourses', Response.data.users)
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
    },
    async getCoursesFilterByType ({state, commit}, param) {
        commit('setActiveType', param)
        let data = state.courses
        data = data.filter(function (el){
            return el.typeCourse === param
        })
        console.log(data);
    },
    async GetCourseById (store, param) {
        store.commit('setDetailId', param)
        try {
            const link = 'http://3.95.181.246/api/course/'
            await axios.get(link+param)
                .then(Response => {
                    console.log(Response.status)
                    if(Response.status === 200){
                        store.commit('setDetailCourse', Response.data.users)
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
    },
    clearActiveType (store) {
        store.commit('setActiveType', '')
    },
    async postContactForm ( store, payload) {
        store.commit('setInfo', '')
        console.log(payload);
    },
    async postRequestForm ( store, payload) {
        store.commit('setInfo', '')
        console.log(payload);
    }
}

export default {
  state,
  mutations,
  actions
}
