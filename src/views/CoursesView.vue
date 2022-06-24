<template>
  <div class="home container">
    <div class="row mt-3">
      <div class="col-sm-12 col-md-6">
        <HeroCourseItem />
      </div>
      <div class="col-sm-12 col-md-6">
        <TitleCourseItem />
      </div>
    </div>
    <div class="my-5 pt-5">
      <CategoryCardsItem />
    </div>
    <div>
      <ExploreCourseItem :title="'Popular Course'" :typeTitle="3" />
    </div>
  </div>
</template>

<script>
import TitleCourseItem from "../components/coursespage/TitleCourseItem.vue"
import HeroCourseItem from "../components/coursespage/HeroCourseItem.vue"
import CategoryCardsItem from "../components/coursespage/CategoryCardsItem.vue"
import ExploreCourseItem from "../components/landingpage/ExploreCourseItem.vue"

export default {
  name: 'CoursesView',
  components: {
    TitleCourseItem,
    HeroCourseItem,
    CategoryCardsItem,
    ExploreCourseItem
  }
}
</script>
