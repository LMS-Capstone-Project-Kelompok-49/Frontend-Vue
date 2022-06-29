<template>
  <div class="container-fluid d-flex-column">
    <h2>Notification</h2>
    <NotificationContent />
  </div>
</template>

<script>
import NotificationContent from '@/components/dashboard/NotificationContent.vue'
export default {
  name: 'NotificationDashboard',
  components: {
    NotificationContent
  }
}
</script>