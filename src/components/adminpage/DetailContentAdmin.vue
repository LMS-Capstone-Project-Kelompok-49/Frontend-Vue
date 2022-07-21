<template>
    <div>
      <DetailSilabus :course="getCourses[0]" />
    </div>
</template>

<script>
import DetailSilabus from '@/components/adminpage/DetailSilabusAdmin.vue'

export default {
  name: 'MainDetailContentAdmin',
  components: {
    DetailSilabus,
  },
  computed: {
    getCourses () {
        const id  = this.$route.params.id
        return this.$store.state.main.user.courses.filter(function(value){
            return value.id === id
        })
    }
  },
  data() {
      return {
      }
  },
}
</script>

<style scoped>
.main-content {
    border: 1px solid #D1D5DB;
    padding: 1.2em;
    border-radius: 12px;
}
</style>