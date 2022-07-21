<template>
    <div class="container-fluid">
        <AssignmentContent :assignment="detailCourses" />
    </div>
</template>

<script>
import AssignmentContent from '@/components/dashboard/AssignmentContent.vue'
export default {
  name: 'DetailAssignmentDashboard',
  components: {
    AssignmentContent
  },
  computed: {
    thisType () {
      return this.$route.params.code
    },
    detailCourses () {
      const code = this.$route.params.code
      const id  = this.$route.params.id
      let courses = this.$store.state.main.user.courses.filter(function(value){
          return value.id === id
      })
      let material = courses[0].assignments.filter(function(value){
        return value.id === code
      })
      return material[0]
    }
  }
}
</script>