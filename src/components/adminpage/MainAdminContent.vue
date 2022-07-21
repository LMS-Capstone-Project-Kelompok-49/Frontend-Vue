<template>
    <div class="main-content">
         <div class="d-flex justify-content-between">
            <h3 class="sub-title">My Course</h3>
            <div class="d-flex">
                <b-form-select v-model="optionsSelected" :options="options"></b-form-select>
                <div class="button-head ms-2">
                    <b-button class="btn btn-info bg-mx-blue-green border-mx-green" v-b-modal.modal-lg>
                        Create Team
                    </b-button>

                    <b-modal id="modal-lg" size="lg">
                        <p class="fs-3 fw-bold">Create Your Team</p>
                        <p class="my-4">Organisasikan Course yang akan kamu dirikan agar orang lain dapat belajar dengan nyaman di kelas mu</p>
                    </b-modal>
                </div>
            </div>
        </div>
            
        <div class="d-flex">
            <MyCourseAdmin class="m-2" v-for="(value, index) in getCourse" :key="index" :course="value" />
        </div>
            
        <div class="row mt-4">
            <div class="mt-2 col-sm-12 col-md-12 col-lg-12 d-flex-column">
                <h3 class="sub-title">Assignment</h3>
                <div v-for="(value, index) in getCourse" :key="index">
                    <div v-if="value.assignments">
                        <MyAssignmentAdmin v-for="(valueAsg, indexAsg) in value.assignments" :key="indexAsg" :assignment="valueAsg" :course="value" />
                    </div>
                </div>
            </div>

            <div class="mt-4 col-sm-12 col-md-12 col-lg-4 d-flex-column">
                <div class="mb-5 mt-2">
                    <AnnouncementAdminContent />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyCourseAdmin from '@/components/adminpage/MyCourseAdmin.vue'
import MyAssignmentAdmin from '@/components/adminpage/MyAssignmentAdmin.vue'
import AnnouncementAdminContent from '@/components/adminpage/AnnouncementAdminContent.vue'

export default {
  name: 'MainAdminContent',
  components: {
      MyCourseAdmin,
      MyAssignmentAdmin,
      AnnouncementAdminContent,
  },
  data() {
      return {
        optionsSelected: 'all',
        options: [
            { value: 'all', text: 'All' },
            { value: 'not', text: 'Not Finished' },
        ]
      }
  },
  computed: {
    getCourse () {
        return this.$store.state.main.user.courses
    },
  }
}
</script>

<style scoped>
.button-head {
    margin: auto 0;
}
</style>
