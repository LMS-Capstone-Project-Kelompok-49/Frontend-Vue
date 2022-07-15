<template>
    <div class="container-fluid">
        <AssignmentContent :type="thisType" />
    </div>
</template>

<script>
import AssignmentContent from '@/components/dashboard/AssignmentContent.vue'
export default {
  name: 'DetailAssignmentAdmin',
  components: {
    AssignmentContent
  },
  computed: {
    thisType () {
      return this.$route.params.code
    }
  }
}
</script>