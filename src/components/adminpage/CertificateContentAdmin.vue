<template>
    <div class="main-content">
        <div class="d-flex justify-content-between">
            <div>
                <h2>Your Certificate</h2>
            </div>
            <div>
                <b-form-select v-model="optionsSelected" :options="options"></b-form-select>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-sm-12 col-md-4 col-lg-2"  v-for="(value, index) in getCertificate" :key="index">
                <CertificateCard :image="value.src" />
            </div>
        </div>
    </div>
</template>

<script>
import CertificateCard from '@/components/adminpage/CertificateCardAdmin.vue'
export default {
  name: 'CertificateContent',
  components: {
    CertificateCard
  },
  computed: {
    getCertificate () {
        return this.$store.state.main.user.certificates
    }
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
.main-content {
    border: 1px solid #D1D5DB;
    padding: 1.2em;
    border-radius: 12px;
}
</style>