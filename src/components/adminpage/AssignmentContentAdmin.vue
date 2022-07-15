<template>
  <div>
    <div class="row" v-if="type === 1">
        <div class="col-sm-12 col-md-8 col-lg-8">
            <AssignmentInfo />
        </div>  
        <div class="col-sm-12 col-md-4 col-lg-4">
            <AssignmentForm />
        </div>
    </div>
    <div v-if="type === 2">
        <QuizContent />
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
    type: {
      default: 1,
      type: Number
    }
  },
  components: {
    AssignmentInfo,
    AssignmentForm,
    QuizContent
  },
}
</script>