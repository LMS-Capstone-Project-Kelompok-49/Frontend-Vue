<template>
  <div class="container-fluid d-flex-column">
    <h2>Notification</h2>
    <NotificationAdmin />
  </div>
</template>

<script>
import NotificationAdmin from '@/components/adminpage/NotificationAdmin.vue'
export default {
  name: 'NotificationViewAdmin',
  components: {
    NotificationAdmin,
  }
}
</script>