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
            <div class="col-sm-12 col-md-4 col-lg-2"  v-for="(value, index) in certificate" :key="index">
                <CertificateCard :image="value.src" />
            </div>
        </div>
    </div>
</template>

<script>
import CertificateCard from '@/components/dashboard/CertificateCard.vue'
export default {
  name: 'CertificateContent',
  components: {
    CertificateCard
  },
  data() {
      return {
        optionsSelected: 'all',
        options: [
            { value: 'all', text: 'All' },
            { value: 'not', text: 'Not Finished' },
        ],
        certificate: [
            { src: 'https://images.unsplash.com/photo-1587483169554-f9bdd1dc9fe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1062&q=80' },
            { src: 'https://images.unsplash.com/photo-1568057373189-8bf0cf6179e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
            { src: 'https://images.unsplash.com/photo-1568741049635-59b0c30bf2de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' },
            { src: 'https://images.unsplash.com/photo-1565893181327-cd3a5d5752b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1066&q=80' },
            { src: 'https://images.unsplash.com/photo-1585508506884-3bc875d5024c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80' },
            { src: 'https://images.unsplash.com/photo-1593968007460-f5fee5b74f63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80' },
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