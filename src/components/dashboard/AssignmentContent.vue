<template>
  <div>
    <div class="row" v-if="assignment.type === 1">
        <div class="col-sm-12 col-md-8 col-lg-8">
            <AssignmentInfo :dataAssignment="assignment" />
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
import AssignmentInfo from '@/components/dashboard/AssignmentInfo.vue'
import AssignmentForm from '@/components/dashboard/AssignmentUpload.vue'
import QuizContent from  '@/components/dashboard/QuizContent.vue'
export default {
  name: 'AssignmentContent',
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