<template>
  <div class="container-fluid d-flex-column">
    <h2>My Course</h2>
    <CourseContent />
  </div>
</template>

<script>
import CourseContent from '@/components/dashboard/CourseContent.vue'
export default {
  name: 'CourseDashboard',
  components: {
    CourseContent
  }
}
</script>