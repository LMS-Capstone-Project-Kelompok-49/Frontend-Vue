<template>
  <div class="container-fluid d-flex-column">
    <MainDashboard />
  </div>
</template>

<script>
import MainDashboard from "@/components/dashboard/MainDashboard.vue"

export default {
  name: 'HomeDashboard',
  components: {
    MainDashboard,
  }
}
</script>
