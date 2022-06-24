<template>
  <div class="home container">
    <div class="row mt-3">
      <div class="row">
        <div class="col-8 d-flex-column">
            <DetailCourseItem />  
        </div>
        <div class="col-4 d-flex-column">
            <CardsInfoItem />
        </div>
      </div>
    </div>
    <div>
        <TestimonialItem />
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
  }
}
</script>
