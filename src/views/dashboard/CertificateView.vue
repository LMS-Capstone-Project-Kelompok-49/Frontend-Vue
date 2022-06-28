<template>
  <div class="container-fluid d-flex-column">
    <CertificateContent />
  </div>
</template>

<script>
import CertificateContent from '@/components/dashboard/CertificateContent.vue'
export default {
  name: 'CertificateDashboard',
  components: {
    CertificateContent
  }
}
</script>