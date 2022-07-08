<template>
  <div class="home container">
    <div class="row mt-3">
      <div class="col">
        <TitleItem />
      </div>
      <div class="col">
        <HeroPictureItem />
      </div>
    </div>
    <div>
      <SecCardsItem />
    </div>
    <div class="row mt-5">
      <div class="col">
        <SecHeroPictureItem />
      </div>
      <div class="col">
        <SecTitleItem />
      </div>
    </div>
    <div>
      <ExploreCourseItem :title="titleCourse" />
    </div>
  </div>
</template>

<script>
import TitleItem from "../components/landingpage/TitleItem.vue"
import HeroPictureItem from "../components/landingpage/HeroPictureItem.vue"
import SecCardsItem from "../components/landingpage/SecCardsItem.vue"
import SecTitleItem from "../components/landingpage/SecTitleItem.vue"
import SecHeroPictureItem from "../components/landingpage/SecHeroPictureItem.vue"
import ExploreCourseItem from "../components/landingpage/ExploreCourseItem.vue"

export default {
  name: 'HomeView',
  components: {
    TitleItem,
    HeroPictureItem,
    SecCardsItem,
    SecTitleItem,
    SecHeroPictureItem,
    ExploreCourseItem
  },
  data() {
    return {
      titleCourse: 'Explore Your Courses'
    }
  },
  mounted () {
    this.getCourseAll()
  },
  methods: {
    getCourseAll () {
      this.$store.dispatch('home/getAllCourses')
    }
  },
}
</script>
