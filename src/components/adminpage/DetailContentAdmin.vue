<template>
    <div>
            <DetailSilabus />
    </div>
</template>

<script>
import DetailSilabus from '@/components/adminpage/DetailSilabusAdmin.vue'

export default {
  name: 'MainDetailContentAdmin',
  components: {
    DetailSilabus,
  },
  data() {
      return {
      }
  },
}
</script>

<style scoped>
.main-content {
    border: 1px solid #D1D5DB;
    padding: 1.2em;
    border-radius: 12px;
}
</style>