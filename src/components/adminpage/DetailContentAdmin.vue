<template>
    <div class="row">
        <div class="col-sm-12 col-md-8 col-sm-8">
            <DetailSilabus />
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4">
            <DetailAnnounment />
        </div>
    </div>
</template>

<script>
import DetailSilabus from '@/components/dashboard/DetailSilabus.vue'
import DetailAnnounment from '@/components/dashboard/DetailAnnocunment.vue'
export default {
  name: 'MainDetailContentAdmin',
  components: {
    DetailSilabus,
    DetailAnnounment
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