<template>
  <div class="container mt-5">
    <div class="text-center">
      <h1>Find your Course Quickly</h1>

      <div class="mt-4 w50 m-auto">
        <label class="my-4 text-detail">
          Discover different courses that can improve our IT skills
        </label>
      </div>
    </div>
    <div class="mt-5">
        <SearchCourse />
    </div>
  </div>
</template>

<script>
import SearchCourse from '@/components/landingpage/SearchCourse.vue'

export default {
  name: 'SearchCourseView',
  components: {
    SearchCourse
  }
}
</script>

<style scoped>
.text-detail {
  font-weight: 300;
  line-height: 30px;
}

h3 {
  color: #00AFB9;
}

@media screen and (min-width: 1024px) {
  .w50 {
    width: 55%;
  }
}
</style>
