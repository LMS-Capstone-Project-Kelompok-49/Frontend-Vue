<template>
  <div class="home container">
    <div v-if="ifTrueCourse">
      <div v-if="getCourse">
        <div class="row mt-3" >
          <div class="row">
            <div class="col-8 d-flex-column">
                <DetailCourseItem :course="getCourse[0]" />  
            </div>
            <div class="col-4 d-flex-column">
                <CardsInfoItem :course="getCourse[0]" />
            </div>
          </div>
        </div>
        <div>
            <TestimonialItem :course="getCourse[0]" />
        </div>
      </div>
    </div>
    <div v-else class="mt-5">
      <div class="d-flex align-items-center mt-5">
        <strong>Loading...</strong>
        <b-spinner class="ml-auto"></b-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import DetailCourseItem from "../components/detailcoursepage/DetailCourseItem.vue"
import CardsInfoItem from "../components/detailcoursepage/CardsInfoItem.vue"
import TestimonialItem from "../components/detailcoursepage/TestimonialItem.vue"

export default {
  name: 'DetailCoursesView',
  components: {
    DetailCourseItem,
    CardsInfoItem,
    TestimonialItem,
  },
  computed: {
    getCourse () {
      const id = this.$route.params.id
      return this.$store.state.home.courses.filter(function(value){
        return value.id === id
      })
    },
    ifTrueCourse () {
      return (this.$store.state.home.courseID === this.$route.params.id)
    }
  },
  mounted() {
    this.getDetailCourse()
  },
  methods: {
    getDetailCourse () {
      const DetailId = this.$route.params.id
      this.$store.dispatch('home/GetCourseById', DetailId)
    }
  },

}
</script>
