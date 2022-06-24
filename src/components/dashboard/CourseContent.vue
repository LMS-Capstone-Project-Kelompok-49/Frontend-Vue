<template>
    <div class="main-content">
        <div class="d-flex justify-content-between">
            <div>
                <b-input-group class="mt-3">
                    <b-form-input placeholder="Search for courses"></b-form-input>
                    <template #prepend>
                    <b-input-group-text class="bg-white">
                        <i class="fas fa-search"></i>
                    </b-input-group-text>
                    </template>
                </b-input-group>
            </div>
            <div>
                <b-form-select v-model="optionsSelected" :options="options"></b-form-select>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-4"  v-for="n in 6" :key="n">
                <MyCourseDashboard />
            </div>
        </div>
    </div>
</template>

<script>
import MyCourseDashboard from '@/components/dashboard/MyCourse.vue'
export default {
  name: 'CourseContent',
  components: {
      MyCourseDashboard,
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