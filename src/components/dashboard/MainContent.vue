<template>
    <div class="main-content">
        <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-4 d-flex-column">
                <h3 class="sub-title">My Course</h3>
                <MyCourseDashboard v-for="(value, index) in getCourse" :key="index" :course="value" />
            </div>

            <div class="col-sm-12 col-md-12 col-lg-8 d-flex-column">
                <div class="mb-5 d-none">
                    <h3 class="sub-title">Your Progress</h3>
                    <BarChart />
                </div>
                <div>
                    <h3 class="sub-title">Assignments</h3>
                    <div v-for="(value, index) in getCourse" :key="index">
                        <div v-if="value.assignments">
                            <MyAssignmentDashboard v-for="(valueAsg, indexAsg) in value.assignments" :key="indexAsg" :assignment="valueAsg" :course="value" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MyCourseDashboard from '@/components/dashboard/MyCourse.vue'
import MyAssignmentDashboard from '@/components/dashboard/MyAssignment.vue'
import BarChart from '@/components/dashboard/MyChart.vue'
export default {
  name: 'MainContent',
  components: {
      MyCourseDashboard,
      MyAssignmentDashboard,
      BarChart
  },
  computed: {
    getCourse () {
        return this.$store.state.main.user.courses
    },
  }
}
</script>
