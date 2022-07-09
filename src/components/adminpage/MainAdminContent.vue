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
                <MyCourseAdmin v-for="n in 3" :key="n" class="m-2" />
            </div>
            
            <div class="row mt-4">
            <div class="mt-2 col-sm-12 col-md-12 col-lg-8 d-flex-column">
                <h3 class="sub-title">Assignment</h3>
                <MyAssignmentAdmin v-for="n in 5" :key="n" />
            </div>

            <div class="mt-4 col-sm-12 col-md-12 col-lg-4 d-flex-column">
                <div class="mb-5 mt-2">
                    <DetailAnnouncementAdmin />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyCourseAdmin from '@/components/adminpage/MyCourseAdmin.vue'
import MyAssignmentAdmin from '@/components/adminpage/MyAssignmentAdmin.vue'
import DetailAnnouncementAdmin from '@/components/adminpage/DetailAnnouncementAdmin.vue'

export default {
  name: 'MainAdminContent',
  components: {
      MyCourseAdmin,
      MyAssignmentAdmin,
      DetailAnnouncementAdmin,
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
}
</script>

<style scoped>
.button-head {
    margin: auto 0;
}
</style>
