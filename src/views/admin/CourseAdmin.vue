<template>
  <div class="container-fluid d-flex-column">
    <h2>My Course</h2>
    <CourseContentAdmin />
  </div>
</template>

<script>
import CourseContentAdmin from '@/components/adminpage/CourseContentAdmin.vue'
export default {
  name: 'CourseAdmin',
  components: {
    CourseContentAdmin
  }
}
</script>