import axios from 'axios'

const state = () => ({
  courses: [
    {
        id: 1,
        title: 'Belajar Dasar Git dengan Github',
        desc: 'Pelajari cara mengelola data atau kode menggunakan Git dengan GitHub, mulai dari dasar-dasar Git hingga berkolaborasi dengan tim.',
        mentor: {
            image: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
            email: 'hariyanto@gmail.com',
            name: 'Hariyanto S.Kom.',
            job: 'Web Analyst',
            about: 'Hi, perkenalkan saya adalah Hariyanto. Saya telah menjadi spesialis Web selama 2 tahun dan memiliki kemampuan di bidang Web Entusiast.'
        },
        category: {
            id: 1,
            name: 'Industri Global'
        },
        rating: 4,
        discount: 30,
        price: 500000,
        material: [
            {
                id: 50,
                title: 'Introduction Git',
                desc: 'GitHub adalah layanan host web bersama yang menggunakan sistem kendali versi Git dan layanan hosting internet. GitHub memberikan kontrol akses dan beberapa fitur kolaborasi seperti pelacakan bug, manajemen tugas, dan wiki untuk setiap proyek. GitHub menawarkan paket repositori pribadi dan gratis digunakan untuk proyek perangkat lunak open source (sumber terbuka). GitHub mempunyai lebih dari 40 juta pengguna dan 190 juta repositori yang menjadikannya layanan terbesar dari kode sumber di dunia.',
                type: 1,
                link: 'https://www.youtube.com/embed/lTMZxWMjXQU',
            },
            {
                id: 51,
                title: 'Introduction Global Config GitHub',
                desc: 'Pelajari cara mengelola data atau kode menggunakan Git dengan GitHub, mulai dari dasar-dasar Git hingga berkolaborasi dengan tim.',
                type: 2,
                link: 'https://www.youtube.com/embed/lTMZxWMjXQU',
            },
            {
                id: 52,
                title: 'Introduction Collaboration with Git',
                desc: 'Pelajari cara mengelola data atau kode menggunakan Git dengan GitHub, mulai dari dasar-dasar Git hingga berkolaborasi dengan tim.',
                type: 2,
                link: 'https://www.youtube.com/embed/lTMZxWMjXQU',
            },
        ],
        member: '30+',
        testimoni: [
            {
                image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80',
                name: 'Shaubari',
                job: 'Mahasiswa STIMIK',
                rating: 4,
                message: 'saya sendiri merasa (seperti mengulas) kembali belajar mata kuliah algoritma 1, namun materinya disampaikan secara interaktif dan menyeyangkan sehingga relatif lebih cepat paham.'
            },
            {
                image: 'https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80',
                name: 'Alda',
                job: 'Mahasiswa UNMUL',
                rating: 4,
                message: 'Kelas ini benar-benar memberikan pemahaman yang baik tentang pemrograman. Dengan bahasa yang menarik, mudah dipahami, dan sedikit humor, saya selaku orang non-IT dapat memahami kelas ini dengan baik.'
            },
            {
                image: 'https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                name: 'Gabriel',
                job: 'Freelancer',
                rating: 4,
                message: 'Kelas ini sangat informatif dan bermanfaat bagi siapapun yang hendak memulai langkah di dunia pemrograman. Hal ini dikarenakan media dan pendekatan yang digunakan menjadikan saya mudah memahami tentang pemrograman dari 0 dan tidak buta arah untuk menentukan langkah selanjutnya.'
            },
        ]
    },
    {
        id: 2,
        title: 'Belajar Fundamental web developemt',
        desc: 'Pelajari komponen-komponen dasar HTML, CSS, dan JavaScript yang merupakan fondasi utama untuk menjadi web developer.',
        mentor: {
            image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            email: 'arman@gmail.com',
            name: 'Arman Maulana S.Kom.',
            job: 'Senior Web Developer',
            about: 'Hi, perkenalkan saya adalah Arman Maulan. Saya telah menjadi spesialis Web selama 2 tahun dan memiliki kemampuan di bidang Web Developer.'
        },
        category: {
            id: 2,
            name: 'Web Developer'
        },
        rating: 5,
        discount: 30,
        price: 600000,
        material: [
            {
                id: 66,
                title: 'Introduction Fundamental Web',
                desc: 'Website di era sekarang sudah menjadi kebutuhan utama yang tidak bisa diabaikan. Seluruh sektor bisnis atau edukasi dapat memanfaatkan website sebagai alat untuk promosi, tukar informasi, dan lainnya. Bedasarkan data dari World Wide Web Technology Surveys, dari seluruh website yang aktif, 88.2% menggunakan HTML, 95.6% menggunakan CSS dan 95% menggunakan JavaScript. Kelas ini membahas tuntas dasar HTML, CSS dan JavaScript sebagai tiga fondasi pembuatan website.',
                type: 1,
                link: 'https://www.youtube.com/embed/c_fRtpQf4Oc',
            },
            {
                id: 67,
                title: 'Introduction Web Structur',
                desc: 'Pelajari lebih dalam JavaScript, DOM manipulation, dan web storage untuk meningkatkan fungsionalitas dan interaktifitas pada website Anda.',
                type: 2,
                link: 'https://www.youtube.com/embed/c_fRtpQf4Oc',
            },
            {
                id: 68,
                title: 'Introduction Web Storage',
                desc: 'Pelajari lebih dalam JavaScript, DOM manipulation, dan web storage untuk meningkatkan fungsionalitas dan interaktifitas pada website Anda.',
                type: 2,
                link: 'https://www.youtube.com/embed/c_fRtpQf4Oc',
            },
        ],
        member: '80+',
        testimoni: [
            {
                image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80',
                name: 'Shaubari',
                job: 'Mahasiswa STIMIK',
                rating: 4,
                message: 'saya sendiri merasa (seperti mengulas) kembali belajar mata kuliah algoritma 1, namun materinya disampaikan secara interaktif dan menyeyangkan sehingga relatif lebih cepat paham.'
            },
            {
                image: 'https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80',
                name: 'Alda',
                job: 'Mahasiswa UNMUL',
                rating: 4,
                message: 'Kelas ini benar-benar memberikan pemahaman yang baik tentang pemrograman. Dengan bahasa yang menarik, mudah dipahami, dan sedikit humor, saya selaku orang non-IT dapat memahami kelas ini dengan baik.'
            },
            {
                image: 'https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                name: 'Gabriel',
                job: 'Freelancer',
                rating: 4,
                message: 'Kelas ini sangat informatif dan bermanfaat bagi siapapun yang hendak memulai langkah di dunia pemrograman. Hal ini dikarenakan media dan pendekatan yang digunakan menjadikan saya mudah memahami tentang pemrograman dari 0 dan tidak buta arah untuk menentukan langkah selanjutnya.'
            },
        ]
    },
    {
        id: 3,
        title: 'Belajar Dasar AWS Cloud (Practitioner Essentials)',
        desc: 'Pelajari materi dasar Cloud dengan menggunakan AWS, dari konsep cloud computing, hingga cara membangun arsitektur yang baik.',
        mentor: {
            image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
            email: 'arman@gmail.com',
            name: 'Arman Maulana S.Kom.',
            job: 'Senior Web Developer',
            about: 'Hi, perkenalkan saya adalah Arman Maulan. Saya telah menjadi spesialis Web selama 2 tahun dan memiliki kemampuan di bidang Web Developer.'
        },
        category: {
            id: 2,
            name: 'Web Developer'
        },
        rating: 3,
        discount: 30,
        price: 400000,
        material: [
            {
                id: 77,
                title: 'Introduction Fundamental Cloud',
                desc: 'Komputasi cloud telah berkembang secara signifikan dan semakin populer beberapa tahun terakhir. Salah satu platform cloud terdepan dan paling komprehensif adalah Amazon Web Services (AWS). Jutaan pelanggan telah menggunakan AWS, termasuk tiga unicorn asal Indonesia seperti Traveloka, Tokopedia, dan Gojek. Maka dari itu, kuasailah ilmu komputasi cloud agar Anda dapat memenuhi kebutuhan industri yang kian bertumbuh dan mulailah langkah perjalanan cloud Anda dengan mempelajari kelas ini. .',
                type: 1,
                link: 'https://www.youtube.com/embed/1UEidyuZsPU',
            },
            {
                id: 78,
                title: 'Introduction Cloud AWS',
                desc: 'Pelajari lebih dalam JavaScript, DOM manipulation, dan web storage untuk meningkatkan fungsionalitas dan interaktifitas pada website Anda.',
                type: 2,
                link: 'https://www.youtube.com/embed/1UEidyuZsPU',
            },
            {
                id: 79,
                title: 'Introduction Hosting',
                desc: 'Pelajari lebih dalam JavaScript, DOM manipulation, dan web storage untuk meningkatkan fungsionalitas dan interaktifitas pada website Anda.',
                type: 2,
                link: 'https://www.youtube.com/embed/1UEidyuZsPU',
            },
        ],
        member: '10+',
        testimoni: [
            {
                image: 'https://images.unsplash.com/photo-1485206412256-701ccc5b93ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=894&q=80',
                name: 'Shaubari',
                job: 'Mahasiswa STIMIK',
                rating: 4,
                message: 'saya sendiri merasa (seperti mengulas) kembali belajar mata kuliah algoritma 1, namun materinya disampaikan secara interaktif dan menyeyangkan sehingga relatif lebih cepat paham.'
            },
            {
                image: 'https://images.unsplash.com/photo-1518577915332-c2a19f149a75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=862&q=80',
                name: 'Alda',
                job: 'Mahasiswa UNMUL',
                rating: 4,
                message: 'Kelas ini benar-benar memberikan pemahaman yang baik tentang pemrograman. Dengan bahasa yang menarik, mudah dipahami, dan sedikit humor, saya selaku orang non-IT dapat memahami kelas ini dengan baik.'
            },
            {
                image: 'https://images.unsplash.com/photo-1493752603190-08d8b5d1781d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
                name: 'Gabriel',
                job: 'Freelancer',
                rating: 4,
                message: 'Kelas ini sangat informatif dan bermanfaat bagi siapapun yang hendak memulai langkah di dunia pemrograman. Hal ini dikarenakan media dan pendekatan yang digunakan menjadikan saya mudah memahami tentang pemrograman dari 0 dan tidak buta arah untuk menentukan langkah selanjutnya.'
            },
        ]
    }
  ],
  typeCourses: [
    {
        id: 1,
        name: 'Industri Global'
    },
    {
        id: 2,
        name: 'Web Developer'
    }
  ],
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
  },
  setCourse (state, payload) {
    state.course = payload
  },
}

const actions = {
    async getAllCourses (store) {
        try {
            const link = 'https://3.95.181.246/api/course/all'
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
            const link = 'https://3.95.181.246/api/type_course'
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
            const link = 'https://3.95.181.246/api/course/'
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
    },
    searchData (store, payload) {
        console.log(payload);
        let data = [...this.state.home.courses]
        if(payload.name !== ''){
            data = data.filter(function(value) {
                return value.title.toLowerCase().indexOf(payload.name) > -1
            })
        }
        if(payload.categoryId !== null){
            data = data.filter(function(value) {
                return value.category.id === payload.categoryId
            })
        }
        if(payload.star !== null){
            data = data.filter(function(value) {
                return value.rating === payload.star
            })
        }
        if(payload.order !== null){
            if(payload.order !== 'up') {
                data = data.sort(function(a,b){
                    return a.rating - b.rating
                })
            } else {
                data = data.sort(function(a,b){
                    return b.rating - a.rating
                })
            }
            
        }
        store.commit('setCourse', data)
    }
}

export default {
  state,
  mutations,
  actions
}
