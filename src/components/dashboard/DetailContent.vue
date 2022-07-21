<template>
    <div class="row">
        <div class="col-sm-12 col-md-8 col-sm-8">
            <DetailSilabus :course="getCourses[0]" />
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4">
            <DetailAnnounment :courseAss="getCourses[0]" />
        </div>
    </div>
</template>

<script>
import DetailSilabus from '@/components/dashboard/DetailSilabus.vue'
import DetailAnnounment from '@/components/dashboard/DetailAnnocunment.vue'
export default {
  name: 'MainDetailContent',
  components: {
    DetailSilabus,
    DetailAnnounment
  },
  computed: {
    getCourses () {
        const id  = this.$route.params.id
        const courses = this.$store.state.main.user.courses
        return courses.filter(function(value){
            return value.id === id
        })
    }
  }
}
</script>

<style scoped>
.main-content {
    border: 1px solid #D1D5DB;
    padding: 1.2em;
    border-radius: 12px;
}
</style>