<template>
    <div class="cards my-5">
        <h3 class="text-dark">Browse By Category</h3>
        <div class="d-flex text-center align-items-center flex-wrap">
            <div v-for="(value, index) in getAllTypeCourse" :key="index" class="mx-1 my-1">
                <b-button variant="outline-info" class="border-mx-green btn-category d-flex align-items-center" type="button" @click="toPage('SearchPage')" :class="{ 'bg-mx-green text-white': index === activeType }" >
                    <img :src="require('@/assets/images/logo_category.png')" alt="...">
                    <h5 class="card-title m-4">{{ value.name }}</h5>
                </b-button>            
            </div>
        </div>
        <!-- <div class="row">
            <div class="col-sm-12 col-md-2 mt-4" v-for="n in 8" :key="n">
                <b-button variant="outline-primary" class="btn-category d-flex align-items-center">
                    <img :src="require('@/assets/images/logo_category.png')" alt="...">
                    <h5 class="card-title m-4">Design</h5>
                </b-button>
            </div>
        </div> -->
    </div>
</template>

<script>
export default {
  name: 'CategoryCardsItem',
  computed: {
    getAllTypeCourse () {
        return this.$store.state.home.typeCourses
    },
    activeType () {
        return this.$store.state.home.activeType
    }
  },
  mounted() {
      this.clearActiveType()
  },
  methods: {
    getCourseByType (TypeId) {
        console.log(TypeId)
        this.$store.dispatch('home/getCoursesFilterByType', TypeId)
    },
    clearActiveType () {
        this.$store.dispatch('home/clearActiveType')
    },
    toPage (RouteName) {
        this.$router.push({ name: RouteName })
    }
  },
}
</script>

<style scoped>
.btn-category {
    height: 4em;
    color: #999898;
}
.btn-category:hover {
    background-color: #00AFB9;
    color: white;
}
</style>