<template>
  <div>
    <div class="row" v-if="assignment.type === 1">
        <div class="col-sm-12 col-md-8 col-lg-8">
            <AssignmentInfo :data="assignment" />
        </div>  
        <div class="col-sm-12 col-md-4 col-lg-4">
            <AssignmentForm />
        </div>
    </div>
    <div v-if="assignment.type === 2">
        <QuizContent :dataAssignment="assignment" />
    </div>
  </div>
</template>

<script>
import AssignmentInfo from '@/components/adminpage/AssignmentInfoAdmin.vue'
import AssignmentForm from '@/components/adminpage/AssignmentUploadAdmin.vue'
import QuizContent from  '@/components/adminpage/QuizContentAdmin.vue'
export default {
  name: 'AssignmentContentAdmin',
  props: {
    assignment: {
      type: Object
    }
  },
  components: {
    AssignmentInfo,
    AssignmentForm,
    QuizContent
  },
}
</script>