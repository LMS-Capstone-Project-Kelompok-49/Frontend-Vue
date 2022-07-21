<template>
    <div>
        <div v-for="(value, index) in getCourses" :key="index">
            <DetailAnnouncementAdmin :courseAss="value[0]" />
        </div>
    </div>
</template>

<script>
import DetailAnnouncementAdmin from '@/components/adminpage/DetailAnnouncementAdmin.vue'
export default {
  name: 'AnnouncementAdminContent',
  components: {
    DetailAnnouncementAdmin
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