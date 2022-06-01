<template>
  <div class="home container">
    <div class="row mt-3">
      <div class="col">
        <HeroCourseItem />
      </div>
      <div class="col">
        <TitleCourseItem />
      </div>
    </div>
    <div>
      <CategoryCardsItem />
    </div>
    <div>
      <PopularCourseItem />
    </div>
  </div>
</template>

<script>
import TitleCourseItem from "../components/coursespage/TitleCourseItem.vue"
import HeroCourseItem from "../components/coursespage/HeroCourseItem.vue"
import CategoryCardsItem from "../components/coursespage/CategoryCardsItem.vue"
import PopularCourseItem from "../components/coursespage/PopularCourseItem.vue"

export default {
  name: 'CoursesView',
  components: {
    TitleCourseItem,
    HeroCourseItem,
    CategoryCardsItem,
    PopularCourseItem,
  }
}
</script>
